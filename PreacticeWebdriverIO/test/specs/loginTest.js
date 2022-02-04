

describe('vtiger', () => {

    it('handling multiple windows', () => {
        browser.url("https://nxtgenaiacademy.com/multiplewindows/")
        browser.maximizeWindow()
        $("#button1").click()
        var handles = browser.getWindowHandles()
        console.log(handles);
    });

    it('getting title from different windows', () => {
        browser.url("https://nxtgenaiacademy.com/multiplewindows/")
        browser.maximizeWindow()
        $("#button1").click()
        var handles = browser.getWindowHandles()
        console.log(handles);
        for (const handle of handles) {
            browser.switchToWindow(handle)
            console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"+browser.getTitle());
        }
    });

    it.only('closing the child window', () => {
        browser.url("https://nxtgenaiacademy.com/multiplewindows/")
        browser.maximizeWindow()
        var parentTilte = browser.getTitle()
        $("#button1").click()
        var handles = browser.getWindowHandles()
        console.log(handles);
        for (const handle of handles) {
            browser.switchToWindow(handle)
            if (!(browser.getTitle()==parentTilte)) {
                break;
            }
        }
        console.log("after window handle the title is @@@@@@@@@@@@@@@@@@@@@@@@"+browser.getTitle());
        browser.closeWindow()
        browser.debug()
    });
});