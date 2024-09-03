## NextJS Backend 

- This repository is to learn about NextJS Backend.
- 57:45 (till completed)


## API Creation 

- To create an API in NEXT JS, We have to create a folder named api inside app
- then we have to set its route path folder.
- example, if we want "api/user" then we have to create a user folder inside api folder
- After this, we have to create a new file named as route.ts inside it.
- Inside route.ts we can create our API
```
// GET API

export function GET(){
    return Response.json({
        email : "XYZ@gmail.com",
        name : "XYZ"
    })
}
```

```
// POST API
// Simply get back hardcoded data when hit post request to server

export function GET(){
    return Response.json({
        email : "XYZ@gmail.com",
        name : "XYZ"
    })
}
```

## Backend 

- create a DB 
- Initialize Prisma
- Let it handle DB operations
- Hit API endpoints using it.

## Prisma Optimizing 

- when use prisma on development mode, remember to optimize it
- Do singleton prisma client activate
- so that it prevent it to load prisma and our backend

## Server Action

- A server action is a native funciton which can be used by server and as well as by client (kind of)
- By doing this we don't need API's (Not always)
- We have to speacify `use server` to use this.