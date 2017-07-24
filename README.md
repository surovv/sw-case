![Sensorfact](http://i.imgur.com/z3Dkolg.png)
## Introduction

Congratulations, you've made it this far in the hiring process.
You should feel really awesome about yourself at this time.
One of the last things remaining is a small test case to measure your level of skill.

In this assignment you will be working with Node.js, React.js, GraphQL and anything cool you might want to add.
This assignment is tailored to the Star Wars API GraphQL interface so all required data can be fetched from there.

- [Star Wars API Docs](https://swapi.co/documentation)
- [Star Wars API GraphiQL interface](http://graphql.org/swapi-graphql)

A very basic design can be found in the `assets` directory, do not feel bound to this design it is only there to give you an idea of what an interface for this app might look like.

## Assignment

**Server**

Create a web server that proxies the request to SWAPI, finds an image for every requested character and returns it as one result.

**Client**

Create a form which behaves as follows:
- It will display the following drop down menu's using the SWAPI(Star Wars API) GraphQL;
  - A list of all movies, on load there will be no movie selected.
  - A list of species, on load there is no species selected.
  - A list of characters, on load there is no character selected.
- At the bottom of the form all characters that match the top criteria.

Each dropdown will act like a filter on the next dropdowns.
So when I select "A New Hope" as a movie, the only species remaining would be the once featured in "A New Hope".
And the list of characters would only hold those featured in "A New Hope".
Once the first filter is applied you should display the characters matching the criteria and update on each applied filter until only one remains.

# High level requirements
- Project should be documented
- Project should run with one command
- Project should be deployable from CI
- Project should have tests
- Server should be written in Node.js
- Front-end should use React.js
- User interface should be responsive
- User should be able to filter through at least 3 properties

Feel free to go beyond these requirements and deliver us an amazing application that showcases everything you can do.

![Do or do not](http://i.imgur.com/2kZ0VA8.gif)
