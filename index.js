const {Builder, By, Key, util} = require("selenium-webdriver");

async function ex(){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://flipkart.com");
    await driver.findElement(By.xpath('/html/body/div[2]/div/div/button')).click();
    await driver.findElement(By.xpath('/html/body/div[1]/div/div[1]/div[1]/div[2]/div[3]/div/div/div/a')).click();
    await driver.findElement(By.className('_2IX_2-')).sendKeys("8979008539");
    await driver.findElement(By.xpath('/html/body/div[2]/div/div/div/div/div[2]/div/form/div[2]/input')).sendKeys("Prince@2017");
    await driver.findElement(By.xpath('/html/body/div[2]/div/div/div/div/div[2]/div/form/div[3]/button')).click();
  
}
ex();