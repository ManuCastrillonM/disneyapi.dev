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

There's a total of 7438 characters available

| Key             | Type     |
| --------------- | -------- |
| \_id            | Integer  |
| url             | String   |
| name            | String   |
| sourceUrl       | String   |
| films           | [String] |
| shortFilms      | [String] |
| tvShows         | [String] |
| videoGames      | [String] |
| alignment       | String   |
| parkAttractions | [String] |
| allies          | [String] |
| enemies         | [String] |

## Endpoints

### Get all characters

Get the list of all characters using the `/characters` endpoint.

```
http://api.disneyapi.dev/characters
```

```json
{
  "data": [
    {
      "_id":308,
      "films":["Tangled","Tangled: Before Ever After"],
      "shortFilms":["Tangled Ever After","Hare Peace"],
      "tvShows":["Once Upon a Time","Tangled: The Series"],
      "videoGames":["Disney Princess Enchanting Storybooks","Hidden Worlds","Disney Crossy Road","Kingdom Hearts III"],
      "parkAttractions":["Celebrate the Magic","Jingle Bell, Jingle BAM!"],
      "allies":[],
      "enemies":[],
      "sourceUrl":"https://disney.fandom.com/wiki/Queen_Arianna",
      "name":"Queen Arianna",
      "imageUrl":"https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802",
      "createdAt":"2021-04-12T01:33:34.458Z",
      "updatedAt":"2021-04-12T01:33:34.458Z",
      "url":"https://api.disneyapi.dev/characters/308",
      "__v":0
    }
    ...
  ],
  "count": 50,
  "previousPage": "https://api.disneyapi.dev/characters?page=3",
  "nextPage": "https://api.disneyapi.dev/characters?page=5",
}
```

### Get one character

Get the details about one character using the `character/:id` endpoint.

```
http://api.disneyapi.dev/characters/:id
```

```json
{
  "_id": 308,
  "films": ["Tangled", "Tangled: Before Ever After"],
  "shortFilms": ["Tangled Ever After", "Hare Peace"],
  "tvShows": ["Once Upon a Time", "Tangled: The Series"],
  "videoGames": [
    "Disney Princess Enchanting Storybooks",
    "Hidden Worlds",
    "Disney Crossy Road",
    "Kingdom Hearts III"
  ],
  "parkAttractions": ["Celebrate the Magic", "Jingle Bell, Jingle BAM!"],
  "allies": [],
  "enemies": [],
  "sourceUrl": "https://disney.fandom.com/wiki/Queen_Arianna",
  "name": "Queen Arianna",
  "imageUrl": "https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802",
  "createdAt": "2021-04-12T01:33:34.458Z",
  "updatedAt": "2021-04-12T01:33:34.458Z",
  "url": "https://api.disneyapi.dev/characters/308",
  "__v": 0
}
```
