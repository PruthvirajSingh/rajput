const utility=require("../Utility/Utility2")
const pageTitle=require('../Modal/PageTitle')
const questionRandom=require("../Modal/QuestionRandomized")
class SkipLogic{
    get pageLogic(){
        return $("(//a[text()='Page Logic'])[1]")
    }
    get pageSkipLogic(){
        return $("//a[text()='Page skip logic']")
    }
    get selectionPage(){
        return $("#pageSkipTarget")
    }
    get endOfSurvey(){
        return $("//option[text()='End of Survey']")
    }
    get apply(){
        return $("(//a[text()='APPLY'])[4]")
    }
    get logoSkip(){
        return $("(//span[text()='«'])[1]")
    }
    get skipText(){
        return $(".skip-text")
    }
    get newPage1(){
        return $(`(//a[@id='add_page'])[1]`)
    }
    get newPage2(){
        return $(`(//a[@id='add_page'])[2]`)
    }
    get newPage3(){
        return $(`(//a[@id='add_page'])[3]`)
    }
    get privewPage(){
        return $("//li//a[text()='PREVIEW & SCORE']")
    }
    get textGoodUptoChar(){
        return $(`(//span[text()="You're good up to "])[2]`)
    }
    
    get saveButtonTitle(){
        return $("(//div//a[@class='wds-button wds-button--sm save'])[2]")
    }
    get newPageAdd(){
        return $("//a[text()='NEW PAGE']")
    }
    get userPageTitle(){
        return $("(//div[@class='pageName'])[2]")
    }
    get pageTitle2(){
        return $("//span[text()='PAGE TITLE']")
    }
    get pageDiscripationText(){
        return $(".pageSubtitleLabel")
     }
     get pageTitleText(){
        return $("//label[@for='pageTitle']")
    }
     get pageTitle2Value(){
        return $("#pageTitle")
       }
       get saveButton2(){
        return $("(//a[@class='wds-button wds-button--sm save'])[2]")
      }
      get pageTitleAdd(){
        return $("span.page-title")
    }
    get newPageTitle(){
        return $("//div[@id='pageTitle']")
    }
    async skipPageLogic(){
        await utility.performClick(this.pageLogic);
        await utility.performClick(this.pageSkipLogic);
        await utility.performClick(this.selectionPage)
        await this.selectionPage.selectByVisibleText("End of Survey")
        await utility.performClick(this.apply)
        await utility.performClick(this.logoSkip);
        
    }
    async pageNameAdd(value1,value2){
        // await this.textGoodUptoChar.waitForDisplayed();
        // await browser.pause(2000)

        await utility.performClick(this.pageTitleAdd);
        await this.newPageTitle.waitForDisplayed({timeout:20000});
        
        
        await this.textGoodUptoChar.waitForDisplayed();
        await this.newPageTitle.waitForDisplayed();
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
        // await pageTitle.addtitle(value1,value2);
    //     await utility.performClick(this.newPage1);
    //     await pageTitle.pageTitleButtonClick2();
    //     await pageTitle.titleAddForPage(value3,value2)
    //     await utility.performClick(this.newPage2);
    //     await pageTitle.pageTitleButtonClick3();
    //     await pageTitle.titleAddForPage(value4,value2)

    //  }
     async privewAndVerfiyQuestion(){
        // await utility.performClick(this.privewPage);
        // await browser.switchToFrame(await $('iframe#surveyPreview'))
        // await this.questionNo1.scrollIntoView();
        // const text= await this.questionNo1.getText();
        // return text;
        await questionRandom.verifyQuestionOnReview();
        
     }
}
module.exports=new SkipLogic();