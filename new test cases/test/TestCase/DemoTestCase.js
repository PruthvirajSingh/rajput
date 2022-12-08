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

const demoModal=require("../Modal/DemoModal")
describe('Demo Test case',async () => {
   
    it('verfiy that the login text is displayed',async () => {
       allureReporter.startStep("Lanch the ='https://www.surveymonkey.com/' -URL open")
       const loginText=await demoModal.loginMethod();
       allureReporter.startStep("click on the login button")
       console.log(loginText)
       allureReporter.startStep("Verfiy that login text is displayed")
       expect(loginPage).toHaveTextContaining('Log in')
    });
});