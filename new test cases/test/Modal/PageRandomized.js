const utility=require("../Utility/Utility2")
const dragAnQuestion=require("./MoveQuestion");
const pageTitle=require('../Modal/PageTitle')
const questionRandom=require("../Modal/QuestionRandomized")
class PageRandomized{
    get bulid(){
        return $("li[title='Builder']")
    }
    get newPage(){
        return $("//div[@class='addNewPage ui-droppable']//a[@id='add_page']")
    }
    get saveQue(){
        return $("(//a[text()='SAVE'])[8]")
    }
    get pageSelection(){
        return $("(//div[@class='pageName'])[2]")
    }
    get nextPageSelection(){
        return $("(//li[@class='dropdownItem'])[2]")
    }
    get arrowSelection(){
        return $("(//a[contains(@class,'wds-button--arrow-on')])[2]")
    }
    get npsSelection(){
        return $("//a[text()='Net Promoter® Score']")
    }
    get newQ(){
        return $("(//div[@data-rte='title'])[1]")
    }
    get saveQue(){
        return $("(//a[text()='SAVE'])[8]")
    }
    get pageRandom(){
        return $(`//a[text()='Page randomization']`)
    }
    get pageLogic(){
        return $("(//a[text()='Page Logic'])[1]")
    }
    get buttonPageRandom(){
        return $(`label[for="randomPageRandom"]`)
    }
    get apply(){
        return $("(//a[text()='APPLY'])[4]")
    }
    get privewPage(){
        return $("//div//a[text()='PREVIEW & SCORE']")
    }
    get questionNo1(){
        return $("(//span[contains(@class,'user-')])[1]")
    }
    get pageTitleAdd(){
        return $("span.page-title")
    }
    get pageTitleText(){
        return $("//label[@for='pageTitle']")
    }
    get textGoodUptoChar(){
        return $(`(//span[text()="You're good up to "])[2]`)
    }
    get saveButtonTitle(){
        return $("(//div//a[@class='wds-button wds-button--sm save'])[2]")
    }
    get newPageTitle(){
        return $("//div[@id='pageTitle']")
    }
    get logoButton(){
        return $("//span[text()='LOGO']")
    }
    get doneButton(){
        return $(".done-button.notranslate")
    }
    get newPageAdd(){
        return $("//a[text()='NEW PAGE']")
    }
    get pageTitle2(){
        return $("//span[text()='PAGE TITLE']")
    }
    get userPageTitle(){
        return $("(//div[@class='pageName'])[2]")
    }
   get pageDiscripationText(){
    return $(".pageSubtitleLabel")
   }
   get pageTitle2Value(){
    return $("#pageTitle")
   }
  get saveButton2(){
    return $("(//a[@class='wds-button wds-button--sm save'])[2]")
  }
 
    async pageSkipLogicMethod(value1,value2){
        await this.pageLogic.waitForDisplayed({timeout:20000});
        await utility.performClick(this.pageLogic);
        await this.pageRandom.waitForExist()
        await utility.performClick(this.pageRandom);
        await utility.performClick(this.buttonPageRandom)
        await utility.performClick(this.apply)
        await browser.pause(1000)
        await this.logoButton.waitForDisplayed();
        await this.doneButton.waitForDisplayed();
        await this.pageTitleAdd.waitForEnabled({timeout:30000});
        

        await utility.performClick(this.pageTitleAdd);
        await this.newPageTitle.waitForDisplayed({timeout:20000});
        
        
        await this.textGoodUptoChar.waitForDisplayed();
        await this.newPageTitle.setValue(value1)
        
        await this.saveButtonTitle.waitForExist();
        await utility.performClick(this.saveButtonTitle);
        await browser.pause(9000)
        await this.newPageAdd.scrollIntoView();

        await utility.performClick(this.newPageAdd)
        // await browser.pause(1000)
        await this.userPageTitle.waitForDisplayed();
        await this.pageTitle2.waitForClickable()
        await utility.performClick(this.pageTitle2);
        await this.pageDiscripationText.waitForDisplayed();
        await this.pageTitleText.waitForDisplayed();
        await this.pageTitle2Value.setValue(value2)
        await this.saveButtonTitle.waitForEnabled();
        await utility.performClick(this.saveButton2);

      
    }
    async newQuestion(value1,value2,value3){
        await this.pageLogic.waitForDisplayed();
        await utility.performClick(this.pageLogic);
        await this.pageRandom.waitForExist()
        await utility.performClick(this.pageRandom);
        await utility.performClick(this.buttonPageRandom)
        await utility.performClick(this.apply)
        
        // await browser.pause(5000)
        await pageTitle.addtitle(value1,value2);
        await utility.performClick(this.newPage);
        await pageTitle.pageTitleButtonClick2();
        await pageTitle.titleAddForPage(value3,value2)
       
    }
    async privewGivenPages(){
       
        // await this.privewPage.waitForEnabled()
        await this.privewPage.click()
      
        await browser.switchToFrame(await $('iframe#surveyPreview'))
        await this.questionNo1.waitForDisplayed();
        const text= await this.questionNo1.getText();
        return text;
    }
    async privewGivenPages2(){
        // await this.questionNo1.waitForDisplayed({timeout:20000});
        // await browser.pause(9000)
        const text= await this.questionNo1.getText();
        return text;
    }
    async privewPage2(){
        await questionRandom.titleVerifaction();
    }
}
module.exports=new PageRandomized();