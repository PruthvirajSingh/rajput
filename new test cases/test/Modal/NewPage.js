const utility=require("../Utility/Utility2")
const pageTitle=require('../Modal/PageTitle')
class NewPage{
    get newPage(){
        return $("#add_page")
    }
    get pageTitle2(){
        return $("(//span[contains(@class,'page-t')])[2]")
    }
    get pageTitle1(){
        return $("(//span[contains(@class,'page-t')])[1]")
    }
    get pageTitleHeadder(){
        return $("#pageTitle")
    }
    get textPageTitle(){
        return $("//label[@for='pageTitle']")
    }
    get saveButton(){
        return $(`(//a[text()='SAVE'])[9]`)
    }
    get pageTitleHeadder(){
        return $("#pageTitle")
    }
    get pageTitleHeadder(){
        return $("#pageTitle")
    }
    get pageDescripation(){
        return $(`#pageSubtitle`)
    }
    get newPageTitle(){
        return $(".page-title.user-generated.empty")
    }
    get footerText(){
        return $("//p[@class='survey-footer-title ']")
    }
    async newPageAdd(value1,value2,value3){
        await utility.performClick(this.pageTitle1);
        await this.textPageTitle.waitForDisplayed();
        await utility.performSetValues(this.pageTitleHeadder,value1);
        await utility.performSetValues(this.pageDescripation,value2);
        await utility.performClick(this.saveButton);
        await this.footerText.waitForDisplayed();
        await this.newPage.click();
        await this.newPageTitle.click();
        await utility.performSetValues(this.pageTitleHeadder,value3);
    }

}
module.exports=new NewPage();