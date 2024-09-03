"use server"

import client from "@/db";

export async function signup (email : string, password : string){
    try{
        await client.new.user({
            data:{
                email: email,
                password: password
            }
        });
        return "Signed Up!";
    }catch(e){
        return "Error encounter !"
    }
}