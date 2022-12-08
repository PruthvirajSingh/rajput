const loginPage=require('../Modal/LoginPage')
const properties=require("../../config")
const logoAdd=require("../Modal/LogoAdd")

const allureReporter= require('@wdio/allure-reporter').default
const wrapperClass=require("../TestCase/WrapperClass")

describe('verify that user is able to add logo from computer',async function()  {
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
    it('Verfiy  that the users addition of a logo that is under 2 MB should be approved',async () => {
        allureReporter.startStep("Click on the logo verify that 'Drag and drop a file here.' pop up displayed upload image")
        const imageAddVerfication= await logoAdd.addLogo();
        allureReporter.startStep("verfiy that its added")
       
        expect(imageAddVerfication).toBeTruthy();
    });
    it('Verfiy that an error should appear when the user adds a logo that is larger than 2 MB.',async () => {
        
        allureReporter.startStep("Click on the logo verify that 'Drag and drop a file here.' pop up displayed")
        const errorVerifaction= await logoAdd.negativeLogoAdd();
        allureReporter.startStep(" Validate that upload image more than 2mb error is displayed")
        expect(errorVerifaction).toHaveText(properties.errorSet2[3]);
    });

});