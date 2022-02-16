const puppeteer = require('puppeteer');

module.exports = {

    async data(req, res){
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('http://stream2.svrdedicado.org:8160/');
        const data = await page.evaluate(() => Array.from(document.querySelectorAll('b'), e => e.innerText));

        await browser.close();

        return res.json({Ouvintes: data[5], Locutor: data[7], Programa: data[8], Música: data[10]})
    }
}