# Connect Four

[My Notes](notes.md)

This is the game Connect Four. The goal of this game is to place 4 circles in a way that it creates either a horizontal, vertical, or diagonal line. The game goes back and forth between turns until either the board is full in which case it is a draw or one player wins. 

## 🚀 Specification Deliverable

> [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] Proper use of Markdown
- [X] A concise and compelling elevator pitch
- [X] Description of key features
- [X] Description of how you will use each technology
- [X] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Have you ever wanted to play connect 4 online but have not had any good options for playing with friends online without interuptions? Well with this website all your problems are solved! This website has an easy free to play no ad game that can be played from anywhere. Don't know how to play? There is an entire page that explains the game for those who have not been introduced to the wonderful world of connect four.  

### Design

<div style="display: flex;">
  <img src="Connect4-Login.jpg" alt="Login page" width="300">
  <img src="Connect4-Home.jpg" alt="Home page" width="300">
</div>


There will be two main pages (unless later I decide I need an about page as well) a login page and a main page. The login page will have the basic information for login and a place to put in the username and password. The main page will have the actual game where you can play and will include instructions to the side along with a link to logout in the top corner. It will also have some form of information that will be accessed through a API but I have not decided on that yet a few ideas I could implement are images, quotes, or jokes. 

### Key features

- Login with secure HTTPS
- Highest scores are displayed
- Random inspirational quote is displayed every time it is opened
- Easy interface to play against friends 
- Really fun and easy to learn 

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Design for the login page, and home page
- **CSS** - Styling for all three pages that is formatted well and pleasing to the eye
- **React** - Allows for login capabilities, clean code, and automatic updates
- **Service** - Backend services for loginning in and retreving scores 
- **DB/Login** - Stores scores and user login information
- **WebSocket** - As each player plays their turn is broadcast to the other player

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Server deployed and accessible with custom domain name** - [My server link](https://yourdomainnamehere.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **HTML pages** - I have 3 pages, About, index, and Play. 
- [X] **Proper HTML element usage** - I used HTML elements correctly throughout my code
- [X] **Links** - I linked each page together and added a link to my github repo in my footer 
- [X] **Text** - I added text throughout all the pages
- [X] **3rd party API placeholder** - I will have a quote that periodically switches and is called from a 3rd party I also have a picture that will switch every time it is loaded.
- [X] **Images** - I added a image that is a placeholder for now that will adjusted every time it is opened.
- [X] **Login placeholder** - I have a place to put in a username and password that will be saved and stored in a database.
- [X] **DB data placeholder** - I will store the login information from each person and will also store who won the round
- [X] **WebSocket placeholder** - I will broadcast each turn to the other player and will also need a way to pair people up to play where they login at the same time and have to hit a button to search for a contest that will be live.  

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Header, footer, and main content body** - This was the easiest part I designed it once and then just copied and pasted it 
- [X] **Navigation elements** - I followed what the simon.css did so this was not to bad
- [X] **Responsive to window resizing** - I again followed what simon did and I think I have it all working correctly
- [X] **Application elements** - I was able to finish all this pretty easily the one part that was a little frusturating was the graph I ended up having to completely remove everything I did for my HTML and just use div elements and assign each one a specific format
- [X] **Application text content** - This was really easy and did not take to much time
- [X] **Application images** - This took forever I could not figure out how to get the background and the image to format with each other and they kept on going out of sync

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Bundled using Vite** - This was super easy and straightforward no big hassle
- [X] **Components** - I messed up the colors slightly and that was a bit of a pain to work through
- [X] **Router** - No problem this was super simple

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.


## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
