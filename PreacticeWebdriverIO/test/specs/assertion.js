var assert = require('chai').assert
describe('practice_assert', () => {

    it.only('validating the browser_url',async () => {
        await browser.url('https://www.amazon.in/');
        console.log("++++++++++++++++++++++++++++++++++++++ "+await browser.commandList)
        var url = await browser.getUrl();
        //inbuilt assertion
        // await expect(browser).toHaveUrl(url)

        // chai assertion
        assert.equal(url, "https://www.amazon.in/")
    });

    it('validating the browser_url partially',async () => {
        await browser.url('https://www.amazon.in/');
        var url = await browser.getUrl();
        await expect(browser).toHaveUrlContaining('flipkart')
    });

    it('validating the browser_url partially',async () => {
        await browser.url('https://www.amazon.in/');
        var url = await browser.getUrl();
        await expect(browser).toHaveUrlContaining('amazon')
    });


    
});