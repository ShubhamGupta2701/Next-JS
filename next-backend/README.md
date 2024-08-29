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