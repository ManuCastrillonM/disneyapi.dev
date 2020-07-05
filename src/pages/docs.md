---
slug: '/docs'
title: 'Documentation'
---

This API is GET only and no authentication is required to access it.

## REST

**Base url:** https://api.disneyapi.dev

Here you can find info about the available endpoints.

```javascript
{
  getAllCharacters: 'https://api.disneyapi.dev/characters',
  getOneCharacter: 'https://api.disneyapi.dev/characters/:id'
}
```

## GraphQL

✨ Soon...

## Schemas

### Character

There's a total of 🙊characters available

| Key             | Type        | Description                          |
| --------------- | ----------- | ------------------------------------ |
| id              | Integer     | The identifier for this character    |
| name            | String      | The name of the character            |
| firstAppereance | Integer     | The character first appeareance year |
| CreatedBy       | [String]    | List of the character creators       |
| species         | String      | The species of the character         |
| gender          | String      | The gender of the character          |
| relatives       | [Character] | List of the character relatives      |
| imageUrl        | String      | The character image url              |

## Endpoints

### Get all characters

Get the list of all characters using the `/characters` endpoint.

```
http://api.disneyapi.dev/characters
```

```javascript
[
  {
    "_id":"5efff6d396fcf28a2244eada",
  "firstAppareance":1928,
  "createdBy":["Walt Disney","Ub Iwerks"],
  "name":"Minnie Mouse",
  "species":"Mouse",
  "gender":"Female",
  "relatives":["Mickey Mouse"],
  "imageUrl":"https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Minnie_Mouse.png/220px-Minnie_Mouse.png"
  },{
    "_id":"5efff6d396fcf28a2244eadb",
    "firstAppareance":1928,
    "createdBy":["Walt Disney","Ub Iwerks"],
    "name":"Mickey Mouse",
    "species":"Mouse","gender":"Male",
    "relatives":["Minnie Mouse"],
    "imageUrl":"https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Mickey_Mouse.png/220px-Mickey_Mouse.png"
  }
  ...
]
```

### Get one character

Get the details about one character using the `character/:id` endpoint.

```
http://api.disneyapi.dev/characters/:id
```

```javascript
// http://api.disneyapi.dev/characters/5efff6d396fcf28a2244eada

{
    "_id":"5efff6d396fcf28a2244eada",
  "firstAppareance":1928,
  "createdBy":["Walt Disney","Ub Iwerks"],
  "name":"Minnie Mouse",
  "species":"Mouse",
  "gender":"Female",
  "relatives":["Mickey Mouse"],
  "imageUrl":"https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Minnie_Mouse.png/220px-Minnie_Mouse.png"
}
```
