## "Shakespeare Passport" | Thinkful Node Capstone
The Shakespeare Passport app is designed for Theatrical Performers, Theatre Goers, and Theatre enthusiast alike. It allows a User to compile a list of plays by SEEN, PERFORMED, and READ tracking date and location.

## Screenshots

Home Page View #1 | Home Page View #2
:-------------------------:|:-------------------------:
![Home Page view-1]()  |  ![Home Page view-2]()
Museum by Map View #1 | Museum by Map View #2
![Map Museum view-1]() | ![Map Museum view-2]()
Featured Museums View  | Featured Museums View
![Featured Museums view-1]() | ![Featured Museums view-2]()
![Featured Museums view-3]() |

## User Cases
This app is for three types of users:
1. READ - For Theatrical Students, so that they can track Plays that have been read (by title and author, optional edition) by date and include Notes.
2. SEEN - For Theatre-Goers (enthusiasts, specialists, insert-word-here), so that they can track all the shows the have seen, where and when they have seen them, and any specific Notes they would like to add.
3. PERFORMED - For Theatrical Artists and Perfomers, so that they can record all shows they have performed in by Role, Location, Date and include Notes (and Lines).

### UI Flow
![UI Flow handwritten draft](https://github.com/KatiLong/node-capstone/blob/master/images/node-capstone-user-flow.jpg)
Login/Create an Account Page (demo account) -> Create Login information -> User Account Dashboard (Any entries populate here) --> Add Entry | Delete Entry (if entry exists) | Edit Entry |||| View All | View Performer Page | View Seen Shows | View Read (exists at bottom of other pages) -> Logout Button
### Wireframe _main
![Wireframe _Main]()

## Working Prototype
You can access a working prototype of the app here: [https://katilong.github.io/](https://katilong.github.io/)

## Functionality
The app's functionality includes:
* Every User the ability to create an account

## Technology
* FRONTEND: HTML5 | CSS3 | JavaScript ES6 | jQuery
* BACKEND: Node.js | Express.js | Mocha | Chai | RESTful API Endpoints

* The app uses AJAX JSON calls to the <a href="https://maps.googleapis.com/maps/api">Google Maps</a> Open Platform API, including the Places Library, to return an interactive map to search for Museums in a given area with clickable icons, which return Place Details for each museum result.


## Responsive
App is strongly built to be usuable on mobile devises, as well as responsive across mobile, tablet, laptop, and desktop screen resolutions.

## Development Roadmap
This is v1.0 of the app, but future enhancements are expected to include:
* Google Maps integrated to view all entries by location
* Featured Theaters of the World Section
