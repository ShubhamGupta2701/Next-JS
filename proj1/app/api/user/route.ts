
import { NextRequest, NextResponse } from 'next/server';

export async function GET(){                      // GET API for /api/user/ 
    return Response.json({
        email : "shubham.gupta@gmail.com",
        name : "Shubham Gupta"
    },
    )
};
// export function POST(){                     // POST API for /api/user/ 
//     return Response.json({
//         email : "shubham.gupta@gmail.com",
//         name : "Shubham Gupta"
//     })
// }
// export function PUT(){                      // PUT API for /api/user/ 
//     return Response.json({
//         email : "shubham.gupta@gmail.com",
//         name : "Shubham Gupta"
//     })
// }



export async function POST(req: NextRequest) {
    const body = await req.json();

    return NextResponse.json({ username: body.username, password: body.password })
};