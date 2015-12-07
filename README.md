# Description Module

An attemt to solve the simpliest of tasks with FLUX

### Requirements:
1. node - download installer from `http://nodejs.org` or use `brew`

### Local setup:
1. Clone repository
2. Install all dependencies by running `npm install`

### Run server:
1. Inside main dir run `npm start`
2. Navigate to `http://localhost:8080/app/` to view the app

To test how dispatching works, open Web Developer tools and try typing one of the commands to the console:

`App.dispatch({type: 'TOGGLE_READMORE'})`

`App.dispatch({type: 'SHOW_READMORE'})`

`App.dispatch({type: 'HIDE_READMORE'})`