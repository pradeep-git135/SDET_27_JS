class loginPage {
    //element
    get userNmaeTextfiled(){
        return $('//input[@name="user_name"]')
    }
    get passwordTextfiled(){
        return $('//input[@name="user_password"]')
    }
    get submitButton(){
        return $("#submitButton")
    }


    //perform action on that element
    enterUserName(username){
        this.userNmaeTextfiled.setValue(username)
    }
    enterPassword(password){
        this.passwordTextfiled.setValue(password)
    }
    clickOnSubmit(){
        this.submitButton.click()
    }

    loginToVtiger(username,password){
        this.enterUserName(username)
        this.enterPassword(password)
        this.clickOnSubmit()
    }

}
module.exports = new loginPage()
// module.exports = obj_lp