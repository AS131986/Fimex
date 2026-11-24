// Только чтение: открывает стенд с сохранённой сессией, переходит Settings → Характеристики
// (клики только по пунктам навигации) и описывает страницу в консоль и explore.md.
const { chromium } = require('@playwright/test');
const fs = require('fs');

const BASE_URL = 'https://oman.itway.bz/';
const out = [];
const log = (line = '') => { console.log(line); out.push(line); };

// Пытается кликнуть по видимому пункту навигации; если его нет — разворачивает меню ("Показать ещё").
async function openNav(page, names) {
  const find = async (name) => {
    const candidates = [
      page.getByRole('link', { name, exact: true }),
      page.getByRole('menuitem', { name, exact: true }),
      page.getByRole('button', { name, exact: true }),
      page.getByText(name, { exact: true }),
    ];
    for (const loc of candidates) {
      const vis = loc.locator('visible=true');
      if (await vis.count()) return vis.first();
    }
    return null;
  };
  for (let attempt = 0; attempt < 2; attempt++) {
    for (const name of names) {
      const el = await find(name);
      if (el) {
        await el.click();
        await page.waitForLoadState('networkidle').catch(() => {});
        await page.waitForTimeout(800);
        return name;
      }
    }
    const more = await find('Показать ещё');
    if (!more) break;
    await more.click();
    await page.waitForTimeout(500);
  }
  return null;
}

(async () => {
  if (!fs.existsSync('auth.json')) {
    console.error('Нет auth.json — сначала запустите: node login.js');
    process.exit(1);
  }
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({ storageState: 'auth.json' });
  const page = await context.newPage();
  await page.goto(BASE_URL);
  await page.waitForLoadState('networkidle').catch(() => {});

  const s = await openNav(page, ['Settings', 'Настройки']);
  log(`# Исследование: Settings → Характеристики\n`);
  log(`- Пункт "Settings": ${s ? 'найден (' + s + ')' : 'НЕ найден'}`);
  const c = await openNav(page, ['Характеристики', 'Номенклатура']);
  log(`- Пункт "Характеристики": ${c ? 'найден (' + c + ')' : 'НЕ найден'}`);
  await page.waitForTimeout(1500);

  log(`- URL: ${page.url()}`);
  log(`- title: ${await page.title()}\n`);
  await page.screenshot({ path: 'explore.png', fullPage: true });

  const data = await page.evaluate(() => {
    const txt = (e) => (e.innerText || e.value || e.getAttribute('aria-label') || '').trim().replace(/\s+/g, ' ');
    const attrs = (e) => ({
      tag: e.tagName.toLowerCase(),
      id: e.id || undefined,
      testid: e.getAttribute('data-testid') || e.getAttribute('data-test') || e.getAttribute('data-cy') || undefined,
      role: e.getAttribute('role') || undefined,
      name: e.getAttribute('name') || undefined,
      placeholder: e.getAttribute('placeholder') || undefined,
      type: e.getAttribute('type') || undefined,
      cls: (e.getAttribute('class') || '').split(/\s+/).slice(0, 3).join('.') || undefined,
    });
    const vis = (e) => !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    const list = (sel) => [...document.querySelectorAll(sel)].filter(vis).map((e) => ({ text: txt(e), ...attrs(e) }));
    return {
      headings: list('h1,h2,h3,h4,[role=heading]'),
      buttons: list('button,[role=button],a.btn,input[type=button],input[type=submit]'),
      links: list('a[href]').map((l) => ({ ...l })).slice(0, 60),
      inputs: list('input:not([type=hidden]),select,textarea'),
      tabs: list('[role=tab]'),
      tables: [...document.querySelectorAll('table,[role=table],[role=grid]')].filter(vis).map((t) => ({
        ...attrs(t),
        headers: [...t.querySelectorAll('th,[role=columnheader]')].map(txt),
        rowCount: t.querySelectorAll('tbody tr,[role=row]').length,
        firstRows: [...t.querySelectorAll('tbody tr,[role=row]')].slice(0, 3).map((r) =>
          [...r.querySelectorAll('td,[role=cell],[role=gridcell]')].map(txt)),
      })),
      lists: [...document.querySelectorAll('ul,ol,[role=list]')].filter(vis).slice(0, 10).map((l) => ({
        ...attrs(l), items: [...l.children].slice(0, 5).map(txt),
      })),
      testids: [...document.querySelectorAll('[data-testid],[data-test],[data-cy]')].map((e) =>
        e.getAttribute('data-testid') || e.getAttribute('data-test') || e.getAttribute('data-cy')),
    };
  });

  const j = (o) => '`' + JSON.stringify(o) + '`';
  const section = (title, items, fmt) => {
    log(`## ${title} (${items.length})`);
    items.forEach((i) => log('- ' + fmt(i)));
    log();
  };
  section('Заголовки', data.headings, (h) => `${h.tag}: "${h.text}"`);
  section('Кнопки', data.buttons, (b) => `"${b.text}" ${j({ tag: b.tag, testid: b.testid, id: b.id, cls: b.cls })}  → getByRole('button', { name: '${b.text}' })`);
  section('Вкладки', data.tabs, (t) => `"${t.text}"`);
  section('Поля ввода / фильтры', data.inputs, (i) => j(i));
  section('Таблицы', data.tables, (t) => j(t));
  section('Списки', data.lists, (l) => j(l));
  section('Ссылки (до 60)', data.links, (l) => `"${l.text}" ${j({ testid: l.testid, cls: l.cls })}`);
  log(`## data-testid / data-test / data-cy (${data.testids.length})`);
  log(data.testids.length ? data.testids.map((t) => '- ' + t).join('\n') : '- не найдено (использовать role/text)');

  fs.writeFileSync('explore.md', out.join('\n') + '\n');
  console.log('\nЗаписано в explore.md, скриншот: explore.png');
  await browser.close();
})();
