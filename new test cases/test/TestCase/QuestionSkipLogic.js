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

const pageRandomization=require('../Modal/PageRandomized')
const oneQuestion=require("../Modal/OneTimeAtATime")
const wrapperClass=require("./WrapperClass")
const converstionFormate=require("../Modal/ConverstionFormate")
const matrixQuestion=require("../Modal/MatrixType")
const allureReporter= require('@wdio/allure-reporter').default
const star=require("../Modal/StarTypes")
const questionRandomized=require("../Modal/QuestionRandomized")


describe('verify that user is able to apply question randomization',async () => {
    before(async() => {
        await wrapperClass.beforeMethod();
       });
      beforeEach(async() => {
        await wrapperClass.beforeEachMethod();
        allureReporter.startStep("Drag and drop Star type question")
        await matrixQuestion.dragAnQuestion(properties.questionSet[11]);
      });
      afterEach(async() => {
          await wrapperClass.afterEachMethod()
      });
      after(async() => {
        await wrapperClass.afterMethod();
      });
    it('verfiy that when user add question randomzation question is randomized in the privew',async () => {
        await questionRandomized.questiontype(properties.headerSet[1])
        await questionRandomized.questiontype2();
        await questionRandomized.randmaziedQuestion();
        const text=await questionRandomized.verifyQuestionOnReview();
        await browser.refresh();
        const text2= await questionRandomized.doneQuestion();

        expect(text).not.toEqual(text2);
        console.log(text+"$$$$$$$$$101010")
        console.log(text2+"&&&&&&&&456")

        
    });
    
});