# UCSB Food Bank Design Docuement

## Architecture Diagram

![t2-food-bank](https://user-images.githubusercontent.com/72473351/118924482-02975280-b8f2-11eb-8153-485814650541.jpg)

## Architecture Description

- Frontend:
  - We implemented a login page and staff portal page. Staff need to have an account they can log in to so they will have easy access to staff portal and modify the inventory.
  - We implemented an interface that displays the inventory of the food bank.
  - These tasks can be implemented with React Frontend Library.
- Backend:
  - We must have our web app retrieve inventory data from the database so that inventory can be updated.
  - We used spring-boot to implement this task.
- Database:
  - A database is needed to store inventory.
  - We used Firebase.
- User authentication:
  - Along with a login page, we implemented user authentication.
  - We plan to implement this task with gogle Auth.
  - We give admin role to staff members.

```
Contribution: description is modified based on https://capstone.cs.ucsb.edu/team_docs_20/prd1/alcon.pdf
```
