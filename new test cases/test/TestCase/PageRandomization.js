const loginPage=require('../Modal/LoginPage')
const properties=require("../../config")
const logoAdd=require("../Modal/LogoAdd")
const createServy=require('../Modal/CreateNewServey')
const pageTitle=require("../Modal/PageTitle")
const copyAndPaste=require("../Modal/CopyAQuestion")

const moveQuestion=require("../Modal/MoveQuestion")
const deleteQuestion=require("../Modal/DeleteQuestion")
const walnut=require("../Modal/WalnutTheme")
const skipLogic=require("../Modal/SkipLogic")
const questionRandomized=require("../Modal/QuestionRandomized")

const oneQuestion=require("../Modal/OneTimeAtATime")
const wrapperClass=require("../TestCase/WrapperClass")

const allureReporter= require('@wdio/allure-reporter').default
const pageRandomization=require('../Modal/PageRandomized')

describe('verify that user is able to apply page randomization',async function() {
  this.retries(2)  
  before(async() => {
        await wrapperClass.beforeMethod();
       });
      beforeEach(async() => {
        await wrapperClass.beforeEachMethod();
      });
      afterEach(async() => {
          await wrapperClass.afterEachMethod()
      });
      after(async() => {
        await wrapperClass.afterMethod();
      });
    it('Verify when user click on the page randomization the page is to be randomized',async () => {
        allureReporter.startStep("Add the page title")
        await pageRandomization.pageSkipLogicMethod(properties.ElementName[2],properties.ElementName[3]);
        allureReporter.startStep("Apply the page randomization")
        const pageNo1= await pageRandomization.privewGivenPages();
        await console.log(pageNo1+"{{{{{{{{{{{{{{{{{{{{{")
        // await browser.refresh();
        const pageNo2= await pageRandomization.privewGivenPages2();
        // await browser.refresh();
        await console.log(pageNo2+"}}}}}}}}}}}}}}}}}}}}}}}")
        allureReporter.startStep("Click on privew page and check page randomized or not")
        expect(pageNo1).toEqual(pageNo2);
    
    });
});