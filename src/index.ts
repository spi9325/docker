import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
const client =new  PrismaClient();
app.use(express.json())
app.get("/",async(req,res)=>{
    res.json({message:"get api res message"});
    const names = await client.user.findMany({});
    console.log(names);
    res.send(names);
});

app.post("/addname",async(req,res)=>{
   await client.user.create({
        data:{
            name:Math.random().toString()
        }
    })
    const names = await client.user.findMany({});
    console.log(names);
    res.send(names);
});

app.listen(3000);