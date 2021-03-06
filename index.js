const domain = '@outlook.com'
const url = 'https://hfj6flekvbm.typeform.com/to/AdM4AcBK'

var fs = require('fs');
const puppeteer = require('puppeteer');
const chalk = require('chalk');

const userArray = fs.readFileSync('usernames.txt').toString().split('\n');
console.log(chalk.green(`Loaded ${userArray.length} usernames!`));
const pwArray = fs.readFileSync('passwords.txt').toString().split('\n');
console.log(chalk.green(`Loaded ${pwArray.length} passwords!`));

let att = 0
let com = 0
async function spam() {

    async function email() {
        let username = await userArray[Math.floor(Math.random() * userArray.length)]
        if (username.length < 9) {
            return email = username + pwArray.length + username.length
        } else {
            return username = username + username.length
        }
    };

    async function password() {
        let password = await pwArray[Math.floor(Math.random() * pwArray.length)]
        if (password.length < 9) {
            return password = password + password.length
        } else {
            return password = password + password.length
        }
    }
    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    att++
    console.log(chalk.yellow(`Running attempt #${att} in the background...`))
    await page.goto(url);
    await page.waitForTimeout(1000);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    await page.keyboard.type(await email());
    await page.waitForTimeout(500);
    await page.keyboard.type(domain);
    await page.waitForTimeout(1000);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    await page.keyboard.type(await password());
    await page.waitForTimeout(1000);
    await page.keyboard.down('Control');
    await page.keyboard.press('Enter');
    await page.keyboard.up('Control');
    await page.waitForTimeout(3000);
    await browser.close()
    com++
    console.log(chalk.green(`Completed attempt #${com}!`))
};

setInterval(spam, 1000);