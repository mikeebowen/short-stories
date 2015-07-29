# short-stories
[![Build Status](https://travis-ci.org/mrbgit/short-stories.svg)](https://travis-ci.org/mrbgit/short-stories)

short-stories is a blogging site designed for people to write and share short stories. The API for short-stories is built using Node.js and Express.js.

>This project is a work in progress, the README.md will be updated as more is added.

>npm install

To create a new story send send a post request to /api/stories/ and send JSON data with the following format:

>'{"author": "test author 3", "categories": ["fiction", "sciencefiction", "adventure"], "storyTitle": "Test Title 3", "storyText": "test story text, blah blah blah something something"}'

To show all stories send a get request to /api/stories/showall

To show a single category, send a get request to /api/stories/ + category. So to see all fiction stories, send your get request to /api/stories/fiction

######To Do
-add karma tests to travis-ci

-add view to show stories by category
