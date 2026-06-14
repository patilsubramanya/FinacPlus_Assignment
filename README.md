# FinacPlus QA Automation Assignment
## Overview

This project demonstrates a scalable automation framework using Playwright and JavaScript for UI and API testing.  
The Framework follows:  
* Page Object Model(POM)  
* Service Layer abstraction
* Environment-driven configuration
* Reusable utilities
* HTML reporting with playwright  
## Tech Stack  
* Playwright
* JavaScript  
## UI Test Scenario  
### Book Store Application  
* Navigate to DemoQA
* Login with registered account
* Validate username and logout button
* Navigate to book store
* Search for "Learning JavaScript Design Patterns"
* Validate the book exists
* Retrieve:  
    * Title
    * Author
    * Publisher
* Write details into a text file
* Logout

### API Test Scenario  
* Create User 
    * Create new user
    * Validate HTTP status code
    * Store the user ID
* Get User
    * Retrieve user details
    * Validate response
* Update User
    * Update user information
    * Validate updated respose

## Framework Highlights
### UI Layer  
Page Objects:  
* BasePage
* LoginPage
* ProfilePage
* BookStorePage  

### API Layer
Service abstraction:  
* UserServices  

### Utilities
* Constants
* FileUtil

##

### Install Dependencies
npm install

### Install Playwright Browsers
npx playwright install

### Execute UI Tests
npx playwright test tests/ui

### Execute API Tests
npx playwright test tests/api

### Execute All Tests
npx playwright test

### Generate HTML Report
npx playwright show-report