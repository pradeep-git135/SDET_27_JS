var assert = require('chai').assert
// describe('sync',function ()  {
    

//     it('tc01', () => {
//         browser.url("https://flipkart.com")
//         var url = browser.getUrl()
//         var title = browser.getTitle()
//         console.log("=================================="+url);
//         console.log("=================================="+title);
//         assert.fail("intentional fail")
//     });

//     it('tc02', () => {
//         console.log("t02");
//     });

//     it.only('tc03',function ()  {
       
//         console.log("tc03");
//         assert.fail("intentional fail")
//     },3);
// });

describe('my flaky app',function ()  {

    /**
     * spec that runs max 4 times (1 actual run + 3 reruns)
     */
    it('should rerun a test at least 3 times', async function () {
        console.log("hello world");
        console.log(this.wdioRetries) // returns number of retries
        // ...
        assert.fail("intentional fail")
    }, 3)
})