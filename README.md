# ELEVATOR SYSTEM

![elevator system](./elevator-app.png)

## Table of contents
* [General information](#general-information)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Delimitations](#delimitations)

## General information
Creates an application that is able to control an elevator system by calling an elevator to a certain floor. 
The route of the elevators are animated and visualized.

## Technologies

* JavaScript
* TypeScript
* React.js
* Node express
* Tailwind CSS
* Jest

## Setup
Install this repo locally using yarn to run:
```
$ git clone git@github.com:sarahtell/elevator-app.git
$ cd ../elevator-app
```

### Backend
The following command is required to serve backend (http://localhost:8000/):
```
$ cd ../backend
$ yarn install
$ yarn serve
```

To run the tests in Jest, the following command is used: 
```
$ yarn test
```

### Frontend
The following command is required to run frontend (http://localhost:4000/):
```
$ cd ../frontend
$ yarn start
```

## Features
The number of floors and elevator shafts can be determined by the user. 
Initial floor locations for each elevator are randomized on each page refresh.  
By pressing a button with a specific floor number, a request is sent from frontend to a certain route in backend which sends the elevator to that floor.
An elevator travels between to adjacent floors in two seconds. 

## Delimitations
This application is subject to some delimitations, as follows: 

* Adding a destination after an elevator is requested and sent to a certain floor is not considered. 
* The mode of the elevators are not persisted upon restarts of the application. 
* An elevator does not stop at any requested floor along the way while travelling to the initially requested floor. 
