# Craigslist Web App

This application is meant to replace the current layout of Craigslist to help promote a more streamlined user experience.
The focus of the project was on the homepage layout improvement, as well as post presentation from the 'homepage'.
'Cards' are used to present the most recent posts on each 'Category', the homepage being the 'Community' category.
This replaces the large lists of categories and sub-categories that the user would need to click through.
A user can get to a post by either clicking on the "Contact {Name}" button or by clicking on the post's picture
The current implementation of the 'post' page is a placeholder for a more 'fitting' version to be later decided on.

## Known Problems/Limitations

Only the community and Services tab are currently implemented.  The other tabs are there to show navbar layout.
The footer shifts right when not on the community homepage, have not tracked down the reason why.
    *Odd issue since I've used a single .css file that determines the formatting for both the "community" and "services" homepage.
Only the cards have been implemented on the homepage.  Other buttons will not work other than the Craigslist logo which acts as a
'button' to get back to the 'homepage'

### Dependencies

You will need to the following commands from the terminal while in the project directory:

npm install 
npm install react-router-dom

The two dependencies are "react" and "react-router-dom".
