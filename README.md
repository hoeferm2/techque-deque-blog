# Tech Blog w/ Handlebars

- Repo URL: https://github.com/hoeferm2/techque-deque-blog
- Heroku Deployment: https://techque-deque-blog.herokuapp.com/

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [DB](#DB)
- [Usage](#usage)
- [Credits](#credits)

## Description

This application is a tech blog website. Users are able to sign in and create accounts, make posts and add comments. 

## Installation

- Users should have Node JS installed
- This applicaiton uses express, Sequelize, mysql2, dotenv, and bcrypt. 
- For heroku deployment be sure to have JAWSDB installed.

## DB

- The database takes in users, posts and comments.
- Each user will have a username, email, and password. Passwords are encrypted through bcrypt. 
- Posts are connected to users and comments are connected to post.

## Usage

- Users can login or signup. New sign ups will be sent tothe profile page.
- Users can edit or remove entries via the entry id number.
- Users are able to comment and each entry is logged into the database but at this time comments are not appearing. 



## Credits

- Thanks to Andres Torres for helping me get this up and running. 