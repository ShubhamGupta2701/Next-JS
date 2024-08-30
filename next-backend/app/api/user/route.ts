import { NextRequest, NextResponse } from 'next/server';

export function GET(){
    return Response.json({
        email : "shubham@gmail.com",
        name : "Shubham Gupta",
    })
}


export async function POST(req: NextRequest) {
    const body = await req.json();

    return NextResponse.json({ username: body.username, password: body.password })
}