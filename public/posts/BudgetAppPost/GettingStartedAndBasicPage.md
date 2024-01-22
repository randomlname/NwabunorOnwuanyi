# Getting started

To start, I set up a React app and a Postgres database. I made a blank homepage and a basic login and signup page.  

As well as basic account setup to enable a user to be able to log in and start using the app. 
I use bcrypt to hash the password when writing to the database and use JSON Web Tokens to manage the user session.
In the future, I plan to add Two-factor Authentication and possibly Rate Limiting to prevent brute-force attacks.  

![Sign up page](/images/BudgetAppImages/SignupPage.png "Sign up page")  
![login page](/images/BudgetAppImages/LoginPage.png "Login page")  
![Account set up](/images/BudgetAppImages/SignupAccountCreate.png "Account set up")