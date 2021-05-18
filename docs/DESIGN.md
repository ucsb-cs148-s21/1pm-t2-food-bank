# UCSB Food Bank Architecture 

- Contribution: modified based on [https://capstone.cs.ucsb.edu/team_docs_20/prd1/alcon.pdf](https://capstone.cs.ucsb.edu/team_docs_20/prd1/alcon.pdf)

a) Frontend:
- We implemented a login page. Staff need to have an account they can log in to so they will have easy access to staff portal and modify the inventory.
- We implemented an interface that displays the inventory of the food bank.
- These tasks can be implemented with React Frontend Library.
b) Backend:
- We must have our web app retrieve inventory data from the database so that inventory can be updated.
- We used spring-boot to implement this task.
c) Database:
- A database is needed to store inventory.
- We used Firebase.
d) User authentication:
- Along with a login page, we implemented user authentication.
- We plan to implement this task with gogle Auth.
- We give admin role to staff members.

# Instruction

Design Document Coordinator. This person is responsible for the design process documentation started in this lab, chiefly the document pointed to by ./docs/DESIGN.md. By next week (lab07), they should ensure that there is a first version, and will be responsible for updating it throughout the rest of the quarter.

An example from in UCSB Capstone projects:
- [https://capstone.cs.ucsb.edu/past20.html](https://capstone.cs.ucsb.edu/past20.html)
- [https://capstone.cs.ucsb.edu/team_docs_20/prd1/alcon.pdf](https://capstone.cs.ucsb.edu/team_docs_20/prd1/alcon.pdf)
