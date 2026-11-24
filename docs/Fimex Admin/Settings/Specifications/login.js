// Открывает стенд в видимом браузере, ждёт ручного входа и сохраняет сессию в auth.json.
// Логин/пароль скрипт не запрашивает и не сохраняет — только cookies/localStorage (storageState).
const { chromium } = require('@playwright/test');
const readline = require('readline');

const BASE_URL = 'https://oman.itway.bz/';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(BASE_URL);

  console.log('Войдите вручную в открытом окне браузера.');
  console.log('Когда окажетесь в админке — нажмите Enter здесь, в терминале.');

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  await new Promise((resolve) => rl.question('', resolve));
  rl.close();

  await context.storageState({ path: 'auth.json' });
  console.log('Сессия сохранена в auth.json');
  await browser.close();
})();
