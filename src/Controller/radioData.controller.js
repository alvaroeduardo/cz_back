const puppeteer = require('puppeteer');
const axios = require('axios');

module.exports = {

    async data(req, res){
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('http://stream2.svrdedicado.org:8160/');
        const data = await page.evaluate(() => Array.from(document.querySelectorAll('b'), e => e.innerText));        

        await browser.close();

        const convertData = {
            ouvintes: data[5], 
            locutor: data[7], 
            programa: data[8], 
            musica: data[10]
        }

        let visu = await axios.get(`https://lella.ws/api/user?username=${convertData.locutor}`);
        let visuData = visu.data.figure;

        let visuConvert = `https://habbo.city/habbo-imaging/avatarimage?figure=${visuData}&direction=3&head_direction=3&gesture=sml&size=l`;

        return res.json({ convertData, visuConvert });
    }
}