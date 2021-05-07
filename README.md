# 1pm-t2-food-bank

## Links
Heroku: https://t2-food-banks.herokuapp.com/

GitHub: https://github.com/ucsb-cs148-s21/t2-food-banks/

## UCent Food Bank
This Webapp aims to provide students information about what items are available at the food bank, so students don't need to come to the food bank and leave empty handed because the food they want is unavailable.

## Grand Vision
Know the availability and quantity of items at the food bank before physically being there

## Team Members
| Name              | GitHub ID   | Email                         |
|-------------------|-------------|-------------------------------|
| Jerry Wang      | missmiss20    | tianchenwang@ucsb.edu         |
| Liuhao Wu  | lwu5        | liuhao.w5@gmail.com           | 
| Kaiwen Li | kaiwenli1   | kaiwen_li@ucsb.edu            |
| Sunrise Gao | sunrise0stack    | xu_gao@ucsb.edu               |
| Orion Schwellenbach | JamesSchwellenbach   | jamesschwellenbach@ucsb.edu   |

## Tech Stack

Frontend - React/Javascript/HTML/CSS

Backend - Spring Node.js

Database - Firebase

## User Roles

1. If I am a student, I can check the app so that I know what is in the food bank.

2. If I am a student, I can check the app for “what's the daily special menu", avaliavity for food that I want, or looking for a restock of specific food that I have been wanting.

3. If I am a student, I can also check the app for the people's review of food before I order mine.

4. If I am a staff, I want to know what kind and quantity of food are distributed today to better arrange tomorrow's orders. The staff will have permission to edit content on the wepapp and give other users admin permissions.

5. If I am a researcher, I want to know the usage of the UCSB food bank and the popularity of each kind of food among students to better accomodate students' needs. A researcher needs to get admin permission by the staff.

## Installation
### Prerequisites
- Java 11
- Maven
- Node.js (`npm install`)

### Dependencies
- React
- Firebase
- Spring

### Installation Steps

- **Run on Heroku**

    https://t2-food-banks.herokuapp.com/

- **Run full-stack locally** via `localhost:8080`
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

## Functionality
- Go to our [heroku website](https://t2-food-banks.herokuapp.com/), you can see a NavBar item called inventory, where you shall find the availability of food at the food bank.
- Go to [login page](https://t2-food-banks.herokuapp.com/login), staff can login (currently the login credentials havent been connected to our database)

## Known Problems
- Unable to Connect to database (i.e. login, inventory) and update data in real time
- Inventory webpage not designed

## Contributing
Fork it!
1. Create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am 'Add some feature'`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request :D

## License
[MIT](https://choosealicense.com/licenses/mit/)
