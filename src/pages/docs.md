---
slug: '/docs'
title: 'Documentation'
---

This API is GET only and no authentication is required to access it.

## REST

**Base url:** https://api.disneyapi.dev

Available endpoints:

```javascript
{
  filterCharacter: 'https://api.disneyapi.dev/character?queryParams',
  getAllCharacters: 'https://api.disneyapi.dev/character',
  getOneCharacter: 'https://api.disneyapi.dev/character/:id'
}
```

### [Get all characters](https://api.disneyapi.dev/character)

Get the list of all characters using the `/character` endpoint.

```
https://api.disneyapi.dev/character
```

```json
{
  "info": {
    "totalPages": 149,
    "count": 50,
    "previousPage": "https://api.disneyapi.dev/character?page=3",
    "nextPage": "https://api.disneyapi.dev/character?page=5",
  },
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
}
```

Query params available:

- `page`: The page number to get. Default: 1
- `pageSize`: The number of items per page. Default: 50

### [Get one character](https://api.disneyapi.dev/characters/308)

Get the details about one character using the `character/:id` endpoint.

```
https://api.disneyapi.dev/character/308
```

```json
{
  "info": {
    "count": 1
  },
  "data": {
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
    "name": "Queen Arianna",
    "imageUrl": "https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg",
    "url": "https://api.disneyapi.dev/characters/308"
  }
}
```

### [Filter characters](https://api.disneyapi.dev/character?name=Mickey%20Mouse)

Filter a specific character using the `character?params` endpoint.

```
https://api.disneyapi.dev/character?name=Mickey%20Mouse
```

```json
{
    "info": {
      "count": 1
    },
    "data": [
      {
        "_id": 4703,
        "films": [...],
        "shortFilms": [...],
        "tvShows": [...],
        "videoGames": [...],
        "parkAttractions": [...],
        "allies": [...],
        "enemies": [...],
        "name": "Mickey Mouse",
        "imageUrl": "https://static.wikia.nocookie.net/disney/images/9/99/Mickey_Mouse_Disney_3.jpeg",
        "url": "https://api.disneyapi.dev/characters/4703",
      }
    ],
}
```

## GraphQL

**Base url:** https://api.disneyapi.dev/graphql

Available queries:

```javascript
character(_id: Int!): Character

characterByName(name: String!): Character

characters(page: Int) {
  items: [Character]
  paginationInfo: {
    hasPreviousPage: Boolean!
    hasNextPage: Boolean!
    pageItemCount: Int!
    totalPages: Int!
  }
}
```

### [Get a character by id](<https://api.disneyapi.dev/graphql?query=%7B%0A%20%20character(_id%3A4703)%20%7B%0A%20%20%20%20_id%0A%09%09name%0A%20%20%20%20url%0A%20%20%20%20imageUrl%0A%20%20%20%20films%0A%20%20%20%20shortFilms%0A%20%20%7D%0A%7D>)

```graphql
{
  character(_id: 4703) {
    _id
    name
    url
    imageUrl
    films
    shortFilms
  }
}
```

### [Get a character by name](<https://api.disneyapi.dev/graphql?query=%7B%0A%20%20characterByName(name%3A%22Mickey%20Mouse%22)%20%7B%0A%20%20%20%20_id%0A%09%09name%0A%20%20%20%20url%0A%20%20%20%20imageUrl%0A%20%20%20%20films%0A%20%20%20%20shortFilms%0A%20%20%7D%0A%7D>)

```graphql
{
  characterByName(name: "Mickey Mouse") {
    _id
    name
    url
    imageUrl
    films
    shortFilms
  }
}
```

### [Get all characters](<https://api.disneyapi.dev/graphql?query=%7B%0A%20%20characters(page%3A%202)%20%7B%0A%20%20%20%20items%20%7B%0A%20%20%20%20%20%20_id%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%20%20paginationInfo%20%7B%0A%20%20%20%20%20%20hasPreviousPage%0A%20%20%20%20%20%20hasNextPage%0A%20%20%20%20%20%20pageItemCount%0A%20%20%20%20%20%20totalPages%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

```graphql
{
  characters(page: 2) {
    items {
      _id
      name
    }
    paginationInfo {
      hasPreviousPage
      hasNextPage
      pageItemCount
      totalPages
    }
  }
}
```

The default page size is 50 items, you can change it using the `pageSize` param.

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
