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
## User Interface and User Experience
### UI Design
- main page: so that users can get started to see the inventory
![image](https://user-images.githubusercontent.com/72473351/119703180-23d4d300-be0b-11eb-8a47-4ec4535b3dbd.png)
- inventory page: so that users can see the current inventory in food bank
![image](https://user-images.githubusercontent.com/72473351/119703323-48c94600-be0b-11eb-842f-7015f8711241.png)
- contact us page: so that users can contact with staffs
![image](https://user-images.githubusercontent.com/72473351/119703293-3fd87480-be0b-11eb-9741-7e890ce96465.png)
- staff portal: so that staffs can edit the inventory
![image](https://user-images.githubusercontent.com/72473351/119703718-ae1d3700-be0b-11eb-928c-26b0416eea01.png)

### User Experience
- users can search by name or by category to find the item they want
![image](https://user-images.githubusercontent.com/72473351/119704395-74006500-be0c-11eb-81eb-c92a1bb20f00.png)
![image](https://user-images.githubusercontent.com/72473351/119704469-8aa6bc00-be0c-11eb-8fb4-bec9ff4da1eb.png)
- When user sent an email to staff successfully, they will receive a notification and an auto-reply email
![image](https://user-images.githubusercontent.com/72473351/119704636-bcb81e00-be0c-11eb-9ce8-88a009a75919.png)
![image](https://user-images.githubusercontent.com/72473351/119706697-29341c80-be0f-11eb-9b77-79920b7cbf3d.png)
- When user trys to send an empty email to staff, it will require user to input messages
![image](https://user-images.githubusercontent.com/72473351/119706609-102b6b80-be0f-11eb-91b6-1a9aeef8d4a3.png)
- If user click the social media links at the bottom, it will redirect to the social media page of food bank
![image](https://user-images.githubusercontent.com/72473351/119704919-06086d80-be0d-11eb-8552-a16de7c8868d.png)
- If the user click the email links at the bottom, it will open the email app installed in their machine so that users can write email to staffs directly<br/>
![image](https://user-images.githubusercontent.com/72473351/119705037-2a644a00-be0d-11eb-81ca-249d800a9a21.png)

