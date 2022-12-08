const loginPage=require('../Modal/LoginPage')
const properties=require("../../config")
const logoAdd=require("../Modal/LogoAdd")
const createServy=require('../Modal/CreateNewServey')
const pageTitle=require("../Modal/PageTitle")
const copyAndPaste=require("../Modal/CopyAQuestion")
const matrixQuestion=require("../Modal/MatrixType")
const moveQuestion=require("../Modal/MoveQuestion")
const deleteQuestion=require("../Modal/DeleteQuestion")
const walnut=require("../Modal/WalnutTheme")
const skipLogic=require("../Modal/SkipLogic")
const questionRandomized=require("../Modal/QuestionRandomized")
const pageRandomization=require('../Modal/PageRandomized')
const oneQuestion=require("../Modal/OneTimeAtATime")
const wrapperClass=require("../TestCase/WrapperClass")
const singleTextBox=require("../Modal/SingleText") 
const allureReporter= require('@wdio/allure-reporter').default
describe('Add Single textbox type question',async function() {
  this.retries(2)  
  before(async() => {
        await wrapperClass.beforeMethod();
       });
      beforeEach(async() => {
        await wrapperClass.beforeEachMethod();
        allureReporter.startStep("Drag and drop Single type question")
        await matrixQuestion.dragAnQuestion(properties.questionSet[0]);
      });
      afterEach(async() => {
          await wrapperClass.afterEachMethod()
      });
      after(async() => {
        await wrapperClass.afterMethod();
      });
      it('Check to see if the user can add just one text box and save the query with its header label.',async () => {
        allureReporter.startStep("Positive test-Add the hedder for question and save it")
        await singleTextBox.setValuesForSingleText(properties.headerSet[0]);
      });
      it('Check to see if the user can add a single text field and save the query without adding another.',async () => {
      allureReporter.startStep("Negative testing-Without add heder error validated")
      const questionError= await singleTextBox.withoutSetValue();
      expect(questionError).toEqual(properties.errorSet[0]);
      });
});