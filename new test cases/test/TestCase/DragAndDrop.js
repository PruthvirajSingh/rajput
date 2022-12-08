
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
const pageRandomization=require('../Modal/PageRandomized')
const oneQuestion=require("../Modal/OneTimeAtATime")
const wrapperClass=require("./WrapperClass")
const converstionFormate=require("../Modal/ConverstionFormate")
const allureReporter= require('@wdio/allure-reporter').default
const defaultLang=require("../Modal/DefaultLanguage")

const matrixQuestion=require("../Modal/MatrixType")
describe('verify that user is able to move question from one position to other',async function() {
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
    it('Verify that user able to drag the question at the drag location',async () => {
      allureReporter.startStep("Drag and drop the checkbox question")
     const dragQuestion=await matrixQuestion.dragAnQuestion(properties.questionSet[12]);
        
        allureReporter.startStep("Question add by using the drag and drop")
        expect(dragQuestion).toBeTruthy();
        allureReporter.startStep("verify the question the display after the drag and drop")
    });
    
});