# Assignment 9

This is a simple react app containing four pages showing a simple card component. This is made to demonstrate routing and reuse of components in react.

## Features

- A login page is the first component on the main route. This page is used to communicate with the backend to check if the user detials are entered properly. If the user is authenticated the details of the user are stored in a session storage variable
- A simple card component containing a heading and a content section is used throughout this application
- Every page in the application also has a header containing nav links to all other pages. The nav item of the current page is highlighted for the user to understand where they are currently.
- Once the user is authenticated successfully we are redirected to the home page. This page contains a single card component showing the details of the page and an image in the content as well. The image is displayed fluidly based on its size in the content box
- The Jobs page contains 6 card components displayed using the map() function in react with which we can map a list of items to JSX components
- The About Us and Contact pages are also simple pages containing a card component showing the details of the page.
- A logout button is also implemented in the header to remove the user from the session storage and redirect the user to the login page. Once that is done the user won't be able to navigate to other pages without logging in again.
