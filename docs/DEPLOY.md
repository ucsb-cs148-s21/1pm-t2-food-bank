# UCSB Food Bank Deploy Document

## Library required:
- Node.js<br />
  Download here: https://nodejs.org/en/download/
- maven<br />
  Installation steps: https://maven.apache.org/install.html
- Java 11<br />
Installation steps: https://www.oracle.com/java/technologies/javase-jdk11-downloads.html


## Installation Steps

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
