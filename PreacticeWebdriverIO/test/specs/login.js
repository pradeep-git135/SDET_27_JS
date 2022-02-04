//login to v_tiger application
var data = require("./../../data/testData")
var excelData = require('../../data/readDataFromExcel_2')

describe('login', () => {
    it('login to v_tiger using valid credentials',async () => {
        //hardcoding value
        // await browser.url("http://localhost:8888/");

        //reading data from json file
        // await browser.url(data.url);

        //reading data from excel
        // await browser.url(excelData[0].URL);

        var excelArray = excelData(data.filepath,data.sheetName)
        await browser.url(excelArray[0].URL);

        // var links = await $$("//a")
        // console.log("##########################"+links.length); 
        // links.forEach(async (link)=>{
        //     console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@"+await link.getText());
        // })  
        // $ ==> browser.findElement(using, value)
       var usernameTextfield = await $("//input[@name='user_name']");
    //    await usernameTextfield.setValue(data.username)
    // await usernameTextfield.setValue(excelData[0].USERNAME)

    
    await usernameTextfield.setValue(excelArray[0].USERNAME)

       var passwordTextfield = await $("//input[@name='user_password']");
    //    await passwordTextfield.setValue(data.password)
        //    await passwordTextfield.setValue(excelData[0].PASSWORD)

        await passwordTextfield.setValue(excelArray[0].PASSWORD)


    //    var loginBtn = await $("#submitButton")
    //    await loginBtn.click() 

       await browser.keys("Enter")
       //"Enter"
       var title =await browser.getTitle()
       await browser.saveScreenshot("./screenshots/firtscreenshot.png")  //screenshots
       await wdioExpect(browser).toHaveTitleContaining("Administrator - Home - vtiger CRM 5 - Commercial Open Source CRM")

        var element  =await  $("//tr[@id='headerrow_2']/descendant::b[contains(text(),'Home ')]")

        var boolResult =await element.isDisplayedInViewport()
        console.log("*****************"+boolResult);

        element.scrollIntoView()

        browser.pause()
        var boolResult =await element.isDisplayedInViewport()
        console.log("*****************"+boolResult);


    });
    
});