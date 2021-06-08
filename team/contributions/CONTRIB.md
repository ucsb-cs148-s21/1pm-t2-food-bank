# t2-food-bank team members' contributions.

## Jerry's work

1. Initial webpage outlook planning and design.
2. Page background, welcoming message, and link, two initial versions.
3. Page content display reoganizing: footer present at proper location(Together with orion).
4. Inventory / staff portal display items, frontend. Loading screen before displaying items, beautifying display.
5. Inventory / staff portal search function, each by name and category(Together with Orion), some functionalities later not adapted.
6. Create staff portal insert, update, and delete buttons, participate in implementing their corresponding functionality.
7. MVP demo script writing, recording and uploading, write the user manual and participate in writing the deploy document.
8. Final presentation script writing and coordiator.
9. Some other lab paperwork checks and enrichment.
-------
(1). Please notice that because of cooperation, some of the final merge is done my Orion or Liuhao, which means the "code modified" display in insights might not show some codes as my contribution.
(2). Although the staff page was created by Orion, the search function and display item function was a direct copy from the inventory page. 
(3). Some important commits, the inventory search/ add filter/ display items on inventory/ implement main page content contain large amount of code modification, but somehow they are not "unvarified" ones, these commits are created and the content written by me.

## Kaiwen's work

1. Initialized backend framework.
2. Helped Sunrise when he was connecting firebase to spring boot(debug)
3. Helped Liuhao when he got stuck on integrating google auth
4. Connected the inventory page to backend so that invnetory can be shown.
5. Created update function on staff page.
6. Made the search bar working on staff page(debug)
7. Updated the table on staff page everytime database is modified
8. Helped sunrise finish time stamp
9. Created fetching template for our team members
10. Tested backend API
11. Made navbar link to the correct page without showing error


## Liuhao's work

1. led the daily scrums and did the final check for lab, project, and final presentation requirements.
2. led the discussions for sprint planning and built a roadmap towards final project by adding backlog items on kanban
3. built some major features of our web app:
   - Nav Bar
   - Contact form w/ EmailJS
   - Google Auth
4. handled the frontend UI/UX design:
   - upgraded content and UI of the home page
   - introduced the responsive web design (i.e. mobile version, toast notification)
   - beautified the UI of our inventory table and buttons
   - designed the UI/UX of navbar
   - solved issues related to css files (i.e. css files for one input features accidentally applied to all input features) 
5. integrated component testing using JEST/React Testing Library and unit testing using JUnit to our project
6. co-led the design document and user manual of our project
7. contributed to procedual paperwork including deployment, readme, retrospectives, etc. 
8. reviewed PRs and helped debug functions related to inventory modification on staff portal
9. offered general design ideas and shared useful YouTube tutorials and tools such as material-ui, momentJS, etc.


## Orion's work

1. Creation and implementation of the footer.
    - Creation of footer
    - Clickable links for social media, map and email
2. Creation and implementation of the staff page
    - Creation of page
    - Initial table, including buttons for create/update/delete, as well as 
    - Implementing funtionality for create/update/delete using api functions and some collaboration with Kaiwen for database editting.
3. General design ideas
4. Final presentation script writing and participation.


## Sunrise's work

1. Initializing and setup firebase as our database.
2. Connecting firebase to our backend spring framework. (Kaiwen helped me debugging)
3. Setting up java objects which to be used for database and essential APIs for our project.
4. Creating a timestamp which dislpays last updated time on both inventory page and staff portal page. (Liuhao shared ideas, and Kaiwen helped me debugging)
5. Backend code clean-up, fixing small issues, and some beautifying on frontend.
6. Some essential documentions contribution.
7. ** I first tried initializing MongoDB and tried connecting to our backend, but failed to do so, then switched to Firebase. Since the first try was failed I did not commit to our github, the graph might not show about that. **
