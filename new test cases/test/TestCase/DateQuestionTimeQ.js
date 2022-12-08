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
const multiple=require("../Modal/Multiple")
const wrapperClass=require("../TestCase/WrapperClass")
const allureReporter= require('@wdio/allure-reporter').default
const dateTimeQuestion=require("../Modal/DateTimeQuestion")
const matrixQuestion=require("../Modal/MatrixType")
describe('Add date/time type question',async function() {
  this.retries(2)
    before(async() => {
        await wrapperClass.beforeMethod();
       });
      beforeEach(async() => {
        await wrapperClass.beforeEachMethod();
        allureReporter.startStep("Drag and drop Date/Time text box question")
        await matrixQuestion.dragAnQuestion(properties.questionSet[9]);
        
      });
      afterEach(async() => {
          await wrapperClass.afterEachMethod()
      });
      after(async() => {
        await wrapperClass.afterMethod();
      });
      it('Add date/time type question check that its add after save',async () => {
        await dateTimeQuestion.questionAddAndSave(properties.headerSet[1])
        await dateTimeQuestion.saveQuestion();
        const question=await dateTimeQuestion.questionVerification();
        expect(question).toBeTruthy();
      });
      it("Verify that it's able to add the question and its label",async () => {
        await dateTimeQuestion.addQuestionAndLable(properties.headerSet[1],properties.labelSet[0])
        const label=await dateTimeQuestion.labelTextVerify();
        expect(label).toBeTruthy();
      });
      it('Verify that its accepts bulk question',async () => {
        await dateTimeQuestion.addBulkQuestion(properties.headerSet[1],properties.labelSet[0],properties.labelSet[1],properties.labelSet[2])
      });
      it('Verify that in collect check box can be clickable',async () => {
        await dateTimeQuestion.checkBoxDateInfo(properties.headerSet[1],properties.labelSet[0],properties.labelSet[1],properties.labelSet[2])
        const checkBox=await dateTimeQuestion.checkBoxVerify();
        expect(checkBox).toBeFalsy();
      });
      it('Verify that After clicking on the Date info MM/DD/YYYY checkbox is displayed.',async () => {
      const checkBoxDateMonthYear=await dateTimeQuestion.dDMMYYYYCheckBox(properties.headerSet[1],properties.labelSet[0],properties.labelSet[1],properties.labelSet[2])
      expect(checkBoxDateMonthYear).toBeTruthy();
     });
     it('Verify that After clicking on Date info DD/MM/YYYY format change',async () => {
        await dateTimeQuestion.dateFormateChange(properties.headerSet[1])
        await dateTimeQuestion.saveQuestion();
        const dateFormateDDMMYYYY=await dateTimeQuestion.afterSaveFormateChange();
        expect(dateFormateDDMMYYYY).toEqual("DD/MM/YYYY")
     });
     it('Check after clicking on the Time info the check box of date  format is not displayed',async () => {
      await dateTimeQuestion.errorDisplayedFormateWrong(properties.headerSet[1],"23/11/2000")
     });
});