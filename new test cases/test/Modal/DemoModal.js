const properties=require("../../config")
class DemoModal{
    get loginButton1(){
        return $("//a[text()='Log in']")
    }
   
    get loginText(){
        return $("(//h1[text()='Log in'])[2]")
    }
    async loginMethod(){
        await browser.maximizeWindow();
        await browser.url(properties.Url)
        await this.loginButton1.click();
        const text=await this.loginText.getText();
        return text;
    }
}
module.exports=new DemoModal();