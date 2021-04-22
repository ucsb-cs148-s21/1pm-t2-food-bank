# 1pm-t2-food-bank

## Links
Heroku: https://t2-food-banks.herokuapp.com/

GitHub: https://github.com/ucsb-cs148-s21/t2-food-banks/

## Deploy instructions
Run it on Heroku: https://t2-food-banks.herokuapp.com/

Run it locally: 
```
mvn spring-boot: run
```

Run frontend only: 
```
cd React
npm start
```

Run frontend and backend separately(do this when you are only editing frontend to get realtime update on website):


- First terminal:
```
mvn spring-boot: run -Dskip.npm
```
- Second termial:
```
cd React
npm start
```

## UCent food bank
This Webapp aims to provide students information about what items are available at the food bank, so students don't need to come to the food bank and leave empty handed because the food they want is unavailable.

## Grand Vision
Know the availability and quantity of items at the food bank before physically being there

## Team Members
| Name              | GitHub ID   |
|-------------------|-------------|
| Jerry Wang      | missmiss20    | 
| Liuhao Wu  | lwu5        | 
| Kaiwen Li | kaiwenli1   | 
| Sunrise Gao | sunrise0stack    | 
| Orion Schwellenbach | JamesSchwellenbach   |

## Tech Stack

Frontend - React/Javascript/HTML/CSS

Backend - SpringBoot

Database - Mongo.db

## User Roles

1. If I am a student, I can check the app so that I know what is in the food bank.

2. If I am a student, I can check the app for “what's the daily special menu", avaliavity for food that I want, or looking for a restock of specific food that I have been wanting.

3. If I am a student, I can also check the app for the people's review of food before I order mine.

4. If I am a staff, I want to know what kind and quantity of food are distributed today to better arrange tomorrow's orders. The staff will have permission to edit content on the wepapp and give other users admin permissions.

5. If I am a researcher, I want to know the usage of the UCSB food bank and the popularity of each kind of food among students to better accomodate students' needs.
A researcher needs to get admin permission by the staff.
