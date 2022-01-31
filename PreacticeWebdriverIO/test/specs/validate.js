//navigate to any e commerse application and i will validate the title of the page

var assert = require('chai').assert
var expect = require('chai').expect
var should = require('chai').should()

describe('validate_suite', () => {
    it('validate the url of the page using toHaveurlMethod', async () => {
        await browser.url('https://www.flipkart.com/');
        var url = await browser.getUrl();
        //inbuilt assertion
        // await expect(browser).toHaveUrl('https://www.flipkart.com/')

        //chai assertion by assert
        assert.equal('https://www.amazon.com/', url, "url's are not matching");
    });

    it('validate the url of the page using toHaveUrlContainingMethod', async () => {
        await browser.url('https://www.flipkart.com/');
        await expect(browser).toHaveUrlContaining('flipkart')
    });

    it('validate the title of the page using toHaveTitleMethod', async () => {
        await browser.url('https://www.flipkart.com/');
        // await expect(browser).toHaveUrl('https://www.flipkart.com/')
        // await expect(browser).toHaveUrlContaining('flipkart')
         var title =await browser.getTitle()
         console.log('================== '+title+'====================');

         //inbuilt assertion
        //  await expect(browser).toHaveTitle(title)

         //chai assertion by using expect
         expect(title).to.equal("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!");
    });

    it.only('validate the title of the page using toHaveTitleContainingMethod', async () => {
        await browser.url('https://www.flipkart.com/');
        // await expect(browser).toHaveUrl('https://www.flipkart.com/')
        // await expect(browser).toHaveUrlContaining('flipkart')
         var title =await browser.getTitle()
         console.log('================== '+title+'====================');

        //  await expect(browser).toHaveTitleContaining('Best Offers!')

        //chai assertion using should
        title.should.equal("@@Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!");
    });
    
});