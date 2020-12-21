# Project Name
> Mixed Messages - A simple Node.js console app to generate random quotes for Instagram influencers to help with post descriptions based on the category of post types: Outdoors, Motivational and Fitness.

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
This was a JavaScript Syntax portfolio project for the Codecademy Full-Stack Engineer course. The idea was to build a Node.js console app that generates random messages each time a user runs the program and version your project with Git/GitHub.

I decided to come up with a simple console app that generates a random quote from arrays stored within an object that could be used by an Instagram influencer to come up with quotes based on desired categories. This consnole app uses a for...in loop and a switch statement to iterate throught the object's keys and return a random quote from each category.

## Technologies
* JavaScript - version ES6
* node - version 12.18.0

## Setup
Clone respository from https://github.com/manovak24/mixed-messages.git

To start your server, run `npm install` and then `node main.js`.

## Code Examples
```js
for (prop in quotes) {
    let optionIdx = randomNumber(quotes[prop].length)
    switch(prop) {
        case 'outdoors':
            quotesToPost.push(`Outdoor Quote - ${quotes[prop][optionIdx]}`)
            break
        case 'motivational':
            quotesToPost.push(`Motivational Quote - ${quotes[prop][optionIdx]}`)
            break
        case 'fitness':
            quotesToPost.push(`Fitness Quote - ${quotes[prop][optionIdx]}`)
            break
        default:
            quotesToPost.push(`Nothing to post today`)
    }
}
```

## Features
List of features ready and TODOs for future development
* Generates a random quote from arrays stored within an object
* Uses for...in loop to iterate over the keys in the object
* Switch statement to generate the random quote from each array within the object

To-do list:
* Create site where this app could be used.

## Status
Project is: _finished_, and _in progress_
>I would like to come back to make a site that the app could be used on

## Contact
Created by [@manovak24](https://github.com/manovak24) - feel free to contact me!