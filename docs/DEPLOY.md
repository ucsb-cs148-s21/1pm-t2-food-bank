# UCSB Food Bank Deploy Document

## Library required:
- Node.js<br />
  Download here: https://nodejs.org/en/download/
- maven<br />
  Installation steps: https://maven.apache.org/install.html
- Java 11<br />
Installation steps: https://www.oracle.com/java/technologies/javase-jdk11-downloads.html

## Adding Google Authentification

The next step to setup the "client_id" for your app in the ".env". Go to this link: https://console.cloud.google.com/apis/credentials and create a project. In the OAuth consent screen, you should set the user type to "external." Now go ahead to the "credentials" screen and add a new "OAuth Client ID."

When adding an "OAuth Client ID," add it for a "web application" and remember to set the "Authorized JavaScript origins" and "Authorized redirect URIs" to "http://localhost:3000" , "https://localhost:3000" , "http://localhost:8080" , "https://localhost:8080" , and "https://t2-food-banks.herokuapp.com/".

In your folder, copy a file called ".env.SAMPLE" into ".env". Finally add your "client_id" (e.g. `XXXXXXXXXX.apps.googleusercontent.com`) into your ".env" file as `REACT_APP_AUTH_CLIENT_ID`. (P.S. Please leave the `REACT_APP_ADMIN_EMAILS` here for a second. We will dive into that in [Setting Admin Account](https://github.com/ucsb-cs148-s21/1pm-t2-food-bank/blob/main/docs/DEPLOY.md#setting-admin-account) section.)

Contribution: [Vincent Tieu](https://github.com/ucsb-cs148-s21/ReactGoogleAuthStarter)

## Setting Admin Account

As you've already obtain a ".env" file from the [Adding Google Authentification](https://github.com/ucsb-cs148-s21/1pm-t2-food-bank/blob/main/docs/DEPLOY.md#adding-google-authentification) step. Just simply add emails you want to use as an admin emails sperating by commas (no space). 

e.g. `REACT_APP_ADMIN_EMAILS=liuhaowu@ucsb.edu,tianchenwang@ucsb.edu,kaiwen_li@ucsb.edu,xu_gao@ucsb.edu,jamesschwellenbach@ucsb.edu` (You want to use your own emails here).

You might not want to put emails of every member into the file as admin accounts, as you also want to test the web app in an non-admin mode.

P.S. In our web app, we only allow admin accounts to access the staff portal to modify our food bank inventory.

## Installation Steps

Finally, we are here for intallation! Choose one of the following mode you want to access our web app and then type the command lines in your terminal as instructed. Good luck and have fun!

    git clone git@github.com:ucsb-cs148-s21/1pm-t2-food-bank.git

- **Run full-stack locally** via `https://localhost:8080`

    After downloading the project to local machine, change directory to 1pm-t2-food-bank folder,
    ```
    cd 1pm-t2-food-bank
    ```
    
    then run the following command.
    ```
    mvn spring-boot:run
    ```

- **Run frontend only** via `https://localhost:3000` 

    Make sure you have run full-stack at least once before doing:
    ```
    cd 1pm-t2-food-bank/React
    npm install
    npm start
    ```

- **Run frontend and backend separately** (Developer Mode)

    Run in this way when only editing frontend to get realtime update on website:

    1. First terminal, run in 1pm-t2-food-bank directory:
    ```
    mvn spring-boot:run -Dskip.npm
    ```
    2. Second termial, run in React directory:
    ```
    cd React
    npm install
    npm start
    ```
