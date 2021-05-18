Design Document Coordinator. This person is responsible for the design process documentation started in this lab, chiefly the document pointed to by ./docs/DESIGN.md. By next week (lab07), they should ensure that there is a first version, and will be responsible for updating it throughout the rest of the quarter.



Project Name:
Team Name:
Team Lead:
Developer:
Developer:
Developer:
Developer: example: Josh Lakin (jlakin@ucsb.edu)

## Intro:
- Background

- How is the problem addressed today?


- Project Specifics:
1. Webpage Specifics
a) Frontend:
- We will
- We will
- These tasks can be implemented with HTML, React and Javascript.
b) Backend:
- a
- We may use Java to implement this task.
c) Database:
- A database is needed to store user and inventory information.
- We use Firebase.
d) User authentication:


System Architecture High Level Overview:
User Interaction:
Users of the service must register for either an account. Users will then be able to input a
.mp4 video. The program will analyze the video and output a report. The report can also be
saved into a database or released for the public.
User Stories:
1. As a user, I can sign in through the web app to view my previous surgeries.
○ Given the username and password entered is valid, the user will be directed to a
webpage that will contain links of surgical footage. The user will be directed to
the correct URL.
2. As a user, I can upload a video file and receive a report.
○ The webapp provides the user the option to upload a .mp4 file to the website.
When this is done, a report is produced at least a couple minutes later and is
visible to the user.
3. As an image, I can be classified into different tools by a machine learning algorithm.
○ The image will be classified into a valid label from the set of labels.
4. As a user, I can search through past surgeries videos by entering keywords.
○ If the keywords are valid, then it will return the past surgery videos that have
those keywords.
5. As a program, I can break down the video into multiple smaller subset videos
○ Given the video is valid and of an acceptable type, the video will be broken down
into smaller videos.
Git Commit:
https://github.com/huiyuhuang/Alcon-Surgeon-City/pull/5/commits/7c47755825e5
b69077a28f9dbfd42ee1dde98de4
6. As a database, I can store the outputs of the program to keep a record of medical video
highlights.
○ Given the outputs highlight report, it will be saved into the database and show up
in the database.
Git Commit:
https://github.com/huiyuhuang/Alcon-Surgeon-City/pull/8/commits/f690effbdb939
c43a5f9aade7709ccf75ea3bf16
7. As a program, I can get audio file from a video file
○ Given an acceptable video file, the program will process the video file and return
an extracted audio file.
Git Commit:
https://github.com/huiyuhuang/Alcon-Surgeon-City/pull/5/commits/1e9ef1b79bf26
11bb30eda2943ccccfd9dfbb622
8. As a program, I can make closed captions from an audio file
○ Given the audio file is valid, then the program will automatically return closed
captions.
Git Commit:
https://github.com/huiyuhuang/Alcon-Surgeon-City/pull/5/commits/1e9ef1b79bf26
11bb30eda2943ccccfd9dfbb622
9. As a program, I can save closed captions into a text file.
○ Given closed captions, they will be inserted into a text file. The program returns
this text file.
Git Commit:
https://github.com/huiyuhuang/Alcon-Surgeon-City/pull/5/commits/03b7408cca85
6ccc178b6393650f8cff52b077f4
10. As the closed captions, the words in me can be analyzed and compared to our
predefined list to predict the highlights of the surgery
○ When there are closed captions as input, the program output the highlights.
11. As a program, given the highlights from the closed captions and images, I can generate
the report.
○ Given the captions and images input are valid, its contents will be processed in
the program and create a highlighted report.


Appendices (Technologies Employed):
1. Python 3
2. OpenCV
3. Firebase
4. Github
5. Trello
6. Javascript
7. Tensorflow
