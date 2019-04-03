 Feature: Sky test feature
 
    Scenario: Browse through sky site 
		Given  I am on the homepage
		Then   I should see all categories
		Then   Home category should be active
		When   I click on Ocean Rescue
		Then   I should see the correct header text

    