
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
// const skipLogic=require("../Modal/SkipLogic")

describe('verify that user is able to apply page skip logic (skip to end of survey)',async function() {
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
    it('verify that user is able to apply page skip logic (skip to end of survey)',async () => {
        allureReporter.startStep("Click on the page logic(skip to end of survey)")
        await skipLogic.skipPageLogic();
        await skipLogic.pageNameAdd(properties.ElementName[3],properties.ElementName[4])
        //properties.ElementName[2],properties.SurveyName[0],properties.ElementName[3],properties.ElementName[4]
        allureReporter.startStep("Verfiy that logo is added or not")
        const text=await questionRandomized.titleVerifaction();
        expect(text).toEqual(properties.ElementName[3])
        
       
    });
});