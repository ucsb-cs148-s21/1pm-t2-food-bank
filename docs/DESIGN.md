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

## Stage of design
### Stage I: The beginning
- We decided to use React frontend library because:<br/>
  a. It is easy to get start with<br/>
  b. React component is really useful for us to develop this app
- We decided our main page and staff portal page
![image](https://user-images.githubusercontent.com/72473351/119876915-420b0380-bedd-11eb-8a02-5bcfc7c7d87e.png)
![image](https://user-images.githubusercontent.com/72473351/119876934-48997b00-bedd-11eb-983f-f5164b6e51d0.png)
### Stage II:
- We have implemented our main page, inventory page, navbar and footer.
![image](https://user-images.githubusercontent.com/72473351/119878924-8dbeac80-bedf-11eb-9a22-9fa271e18953.png)
- We decided to use firebase instead of mongoDB as our database because:<br/>
  a. Firebase is easier for us to get started<br/>
  b. It is easier for us to maintain the database
- Our backend is initialized but it has no functionality yet.
### Stage III:
- Backend has implemented get fucntion to retrieve all the items in food bank from firebase
- Inentory page can now retrive items information and show it on a table
- Contact us page is implemented so that users can contact staffs by email.<br/>
  a. But there's no input validation.<br/>
- Footer now is linked to fook bank social media pages and their email is also clickable.
### Stage IV:
- Backend is fully implemented with get, update, add and delete functions.
- On inventory page, now users can search items by name or by category
![image](https://user-images.githubusercontent.com/72473351/119878670-433d3000-bedf-11eb-8e7a-38ec60a6977d.png)
- Add input validation on contact us page
- staff page is half implemented with only add function
![image](https://user-images.githubusercontent.com/72473351/119878634-37ea0480-bedf-11eb-8b14-7ea80df4c17b.png)
- Instead of sign in using the username and password stored in firebase, we decided to change to google auth because:<br/>
  a. One of the TAs has implemented the code for us<br/>
  b. It is not easy for us to setup global variables in a short time.
- We decided to make a timestamp so that users can know when the database is updated.
  - a. Both inventory page and staff portal page will have a timestamp on top-left under the search bar. 
  - b. The timestamp displays as relative time to the most recent time of inventory change, showed as xx second ago/xx minutes ago/xx hours ago etc.
  - c. The timestamp will be automatically refreshed once there is a change in the inventory.
  - d. Users can use the timestamp as a reference prior to last inventoy updated, so they will have a sense whether the food they want is still avaviable before they decide to go        to the foodbank.
![image](https://user-images.githubusercontent.com/54722175/120694492-22d12080-c45f-11eb-81a6-03392301f169.png)
![image](https://user-images.githubusercontent.com/54722175/120694620-4c8a4780-c45f-11eb-9f48-53d978176fc2.png)


