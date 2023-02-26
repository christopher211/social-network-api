# Homework 18: NoSQL Challenge: Social Network API

## Table of Contents:

1. [Description](#description)
2. [Links](#links)
3. [User Story](#user-story)
4. [Acceptance Criteria](#acceptance-criteria)
5. [Preview](#preview)

## Description

This is a simple back end using MongoDB and Mongoose to create a social network API. The API allows users to create, read, update, and delete users, thoughts, and reactions. The API also allows users to add and remove friends from their friend list.

## Links

- The repo of the tool: [Source Code](https://github.com/christopher211/social-network-api)

<!-- - Here is the link of demo video: [Google drive](https://drive.google.com/file/d/10LYD2INijLpGZgJqXcKHm62bVBYZoeRI/view?usp=share_link) -->

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Preview
