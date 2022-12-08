const multipleText=require("../Modal/MultipleTextBox")
const dropDown=require("../Modal/DropDownQuestion")
class DateTime{
    get dateText(){
        return $("(//label[@class='checkboxSetting'])[1]")
    }
    get question(){
        return $("#editTitle")
    }
    get questionAdd(){
        return $("//div//span[@class='user-generated notranslate']")
    }
    get dateFormate(){
        return $("(//tr[@class='highlight']//label[@for='dateUSFormat'])[1]")
    }
    get saveQue(){
        return $("(//div//a[text()='SAVE'])[8]")
    }
    get labelSet(){
        return $("(//div[@data-var='text'])[5]")
    }
    get labelTextCheck(){
        return $("(//label[contains(@class,'question-da')])[7]")
    }
    get dateInfoBox(){
        return $("(//label[@for='toggleDateVisible'])[1]")
    }
    get dDMMYYYYFormate(){
        return $("(//label[@for='dateIntlFormat'])[1]")
    }
    get formateChange(){
        return $("//input[@data-date-format='dd/mm/yyyy']")
        
    }
    get privewAndScore(){
        return $("//a[text()='PREVIEW & SCORE']")
    }
    get boxDate(){
        return $(".question-datetime-fields")
    }
    get enterValues(){
        return $(".form-control.text.date--picker.date-validation")
    }
    get doneButton(){
        return $("(//button[@type='submit'])[1]")
    }
    get errorWhenDateWrong(){
        return $("(//label[@class='error'])[1]")
    }
    async saveQuestion(){
        await this.saveQue.click();
    }
    async questionVerification(){
        await this.questionAdd.waitForDisplayed({timeout:10000})
        const text=await this.questionAdd.isDisplayed()
        return text;
    }
    async labelTextVerify(){
       await this.labelTextCheck.waitForDisplayed({timeout:10000})
       const text=await this.labelTextCheck.isDisplayed();
       return text;
    }
    async questionAddAndSave(values){
        await this.dateText.waitForExist();
        await this.dateFormate.waitForDisplayed({timeout:30000});
        await this.question.waitForDisplayed();
        await this.question.setValue(values)
        
    
    }
    async addQuestionAndLable(values,label){
        await this.questionAddAndSave(values);
        await this.labelSet.clearValue();
        await this.labelSet.setValue(label)
        await this.saveQuestion();
    }
    async addBulkQuestion(question,value1,values2,values3){
       await multipleText.bulkQuestions(question,value1,values2,values3)

    }
    async checkBoxVerify(){
        this.dateInfoBox.waitForDisplayed({timeout:10000})
        const text=await this.dateInfoBox.isSelected();
        return text;
    }
    async checkBoxDateInfo(question,value1,values2,values3){
        await dropDown.bulkQuestionSet(question,value1,values2,values3);
        await this.dateInfoBox.click();
        
    }
    async dDMMYYYYCheckBox(question,value1,values2,values3){
        await this.checkBoxDateInfo(question,value1,values2,values3)
        await this.dateInfoBox.click();
        const text=await this.dateFormate.isDisplayed()
        return text;
    }
    async timeInfoSelection(question,value1,values2,values3){
        await this.checkBoxDateInfo(question,value1,values2,values3);
        const text=await this.dateFormate.isDisplayed();
        return text;   
    }
    async afterSaveFormateChange(){
        await this.formateChange.waitForDisplayed({timeout:10000})
       const text=await this.formateChange.getAttribute('placeholder')
       console.log(text+"::::::::::::::::::::::::::::::")
       
       return text;
    }
    async dateFormateChange(question){
        await this.questionAddAndSave(question);
        await this.dDMMYYYYFormate.waitForDisplayed()
        await this.dDMMYYYYFormate.click();
    }
    async errorDisplayedFormateWrong(question,value){
        await this.questionAddAndSave(question);
        await this.saveQuestion();
        await this.privewAndScore.click();
        await browser.switchToFrame(await $('iframe#surveyPreview'))
        await this.boxDate.waitForDisplayed();
        
        await this.enterValues.setValue(value)
        await this.doneButton.click();
        const text=await this.errorWhenDateWrong.isDisplayed();
        return text;

    }

}
module.exports=new DateTime();