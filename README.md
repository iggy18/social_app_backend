# Just exploring Node

this project in just for me to explore building a REST API with Node.

user routes done

todo:
social post routes

*update:*


-this api is being tested with thunder client. 


-all crud operations working


example response from /socialpost
```
[
  {
    "id": 1,
    "content": "this is my first socialpost!! yaay",
    "image": "test.jpg",
    "impression": 0,
    "createdAt": "2023-06-07T01:04:46.572Z",
    "updatedAt": "2023-06-07T01:04:46.572Z",
    "userId": 1,
    "user": {
      "id": 1,
      "email": "darthsucks69@deathstar.com",
      "name": "name change",
      "username": "vdrchtt",
      "image": "name change",
      "bio": "name change",
      "isReal": false,
      "createdAt": "2023-06-07T00:50:27.217Z",
      "updatedAt": "2023-06-07T00:50:27.217Z"
    }
  },
  {
    "id": 3,
    "content": "Dear dairy, today I ate a sandwich. I love sandwiches",
    "image": "test.jpg",
    "impression": 0,
    "createdAt": "2023-06-07T01:05:55.508Z",
    "updatedAt": "2023-06-07T01:05:55.508Z",
    "userId": 1,
    "user": {
      "id": 1,
      "email": "darthsucks69@deathstar.com",
      "name": "name change",
      "username": "vdrchtt",
      "image": "name change",
      "bio": "name change",
      "isReal": false,
      "createdAt": "2023-06-07T00:50:27.217Z",
      "updatedAt": "2023-06-07T00:50:27.217Z"
    }
  },
  {
    "id": 4,
    "content": "this is a brand new social post. a different one was deleted. this is a good thing",
    "image": "test.jpg",
    "impression": 0,
    "createdAt": "2023-06-07T01:13:16.493Z",
    "updatedAt": "2023-06-07T01:13:16.493Z",
    "userId": 1,
    "user": {
      "id": 1,
      "email": "darthsucks69@deathstar.com",
      "name": "name change",
      "username": "vdrchtt",
      "image": "name change",
      "bio": "name change",
      "isReal": false,
      "createdAt": "2023-06-07T00:50:27.217Z",
      "updatedAt": "2023-06-07T00:50:27.217Z"
    }
  }
]
```