const puppeteer = require('puppeteer');

module.exports = {
    async radio(req, res){
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://example.com');
        await page.screenshot({ path: 'example.png' });

        await browser.close();

        return res.json({ ok: 'ok' })
    }
}