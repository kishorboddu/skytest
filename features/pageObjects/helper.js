const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;
const waitTime = 2000;

function helper(browser)
{
    this.browser = browser;
    this.getTitle = async function(){
        return await this.browser.getTitle()
    }
    this.getText = function(element){
        return element.getText();
    }
    this.getCookieButton = async function(){
        var xpath = '//button[contains(text(),"Accept")]';
        return await this.browser.wait(until.elementLocated(By.xpath(xpath)), waitTime, "could not find coockie accept  button")
    }
    
    this.getCategories = function(){
        var xpath = "//div[@id='nav-wrap']//ul[@class='sdc-site-header__menu-cell sdc-site-header__menu-cell--1']//li"
         return this.browser.wait(until.elementsLocated(By.xpath(xpath)), waitTime, "could not find categories")
    }
    
    this.getHederElement = function (){
        var xpath = "//h1//span"
        return this.browser.wait(until.elementLocated(By.xpath(xpath)), waitTime, "could not find header element")
    }
    this.getActiveTab = function(){
        var xpath ="//div[@id='nav-wrap']//ul[@class='sdc-site-header__menu-cell sdc-site-header__menu-cell--1']//li//a[@aria-current='true']";
        return this.browser.wait(until.elementLocated(By.xpath(xpath)), waitTime, "could not find active tab element")
    }
    this.getOceanRescueTab = function(){
        var xpath ="//div[@id='nav-wrap']//ul[@class='sdc-site-header__menu-cell sdc-site-header__menu-cell--1']//li//a[contains(text(),'Ocean Rescue')]";
        return this.browser.wait(until.elementLocated(By.xpath(xpath)), waitTime, "could not find active tab element")
    }
}
module.exports = helper;