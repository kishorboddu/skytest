const config = require('./../../config.json');
const expect = require('chai').expect;
const {
    Given,
    When,
    Then
} = require('cucumber');
const helper = require('../pageObjects/helper.js');

Scenario1:
Given(/I am on the homepage$/, async function () {
    await this.browser.get(config.baseUrl);
    var helperFunctions = new helper(this.browser);
    var cookeButton = await helperFunctions.getCookieButton();
    await cookeButton.click();
    var pageTitle = await helperFunctions.getTitle();
    expect(pageTitle).to.equal(config.homepageTitle);
});
Then(/I should see all categories$/, async function () {
    var helperFunctions = new helper(this.browser);
    var configuredCategories = config.categories;
    var categories = await helperFunctions.getCategories();
    expect(categories.length).to.equal(15);
    var politics = categories[3];
    politicsMenuTitle = await politics.getText()
    expect(politicsMenuTitle).to.equal(configuredCategories[3].title);
})

Then(/Home category should be active$/, async function () {
    var helperFunctions = new helper(this.browser);
    var activeTab = await helperFunctions.getActiveTab()
    var homeCategoryText = await activeTab.getText();
    expect(homeCategoryText).to.equal(config.categories[0].title);
})

When(/I click on Ocean Rescue$/, async function () {
    var helperFunctions = new helper(this.browser);
    var oceanRescueTab = await helperFunctions.getOceanRescueTab()
    await oceanRescueTab.click();
})

Then(/^I should see the correct header text$/, async function () {
    var helperFunctions = new helper(this.browser);
    var activeTab = await helperFunctions.getActiveTab()
    var oceanRescueText = await activeTab.getText();
    expect(oceanRescueText).to.equal('Ocean Rescue');
    var headerElement = await helperFunctions.getHederElement()
    var headerText = await headerElement.getText();
    expect(headerText).to.equal('Ocean Rescue');
    var url = await this.browser.getCurrentUrl();
    expect(url).to.equal(config.baseUrl + 'ocean-rescue');
    var pageTitle = await helperFunctions.getTitle();
    expect(pageTitle).to.equal(config.oceanRescueTitle);
})
