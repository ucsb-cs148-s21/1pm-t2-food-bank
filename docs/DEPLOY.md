Deployment Document Coordinator. This person is responsible for the deployment documentation refactored in this lab, chiefly the document pointed to by ./docs/DEPLOY.md. By next week (lab07), they should ensure that there is a first version, and will be responsible for updating it throughout the rest of the quarter.


### Installation Steps
  
- **The running app on Heroku**

    [https://t2-food-banks.herokuapp.com/](https://t2-food-banks.herokuapp.com/)
    
- **Download the project from github to local** 

    ```
    git clone git@github.com:ucsb-cs148-s21/1pm-t2-food-bank.git
    ```

- **Run full-stack locally** via `localhost:8080`

    After downloading the project to local machine, change directory to 1pm-t2-food-bank folder,
    ```
    cd 1pm-t2-food-bank
    ```
    
    then run the following command.
    ```
    mvn spring-boot:run
    ```

- **Run frontend only** via `localhost:3000` 

    Make sure you have run full-stack at least once before doing:
    ```
    cd React
    npm start
    ```

- **Run frontend and backend separately** (Developer Mode)

    Run in this way when only editing frontend to get realtime update on website:

    1. First terminal:
    ```
    mvn spring-boot:run -Dskip.npm
    ```
    2. Second termial:
    ```
    cd React
    npm start
    ```