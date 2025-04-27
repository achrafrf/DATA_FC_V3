import { NextRequest, NextResponse } from "next/server";
import db from "../../../../../prisma/client";

export async function PATCH(request:NextRequest,{
    params}:{params : {contactId:string}}){
        const body = await request.json()
        const contact = await db.contact.findUnique({
            where :{
                id:params.contactId
            }
        })
        if(!contact){
            return NextResponse.json("Contact Not found",{
                status:402
            })
        }

        const updateContact =await db.contact.update({
            where:{
                id:params.contactId
            },data:{
                ...body
            }
        })
        return NextResponse.json(updateContact,{status:201})
    }

    export async function GET(request:NextRequest,{
        params}:{params : {contactId:string}}){
            const contact = await db.contact.findUnique({
                where :{
                    id:params.contactId
                }
            })
            if(!contact){
                return NextResponse.json("Contact Not found",{
                    status:404
                })
            }
            return NextResponse.json(contact,{status:201})
        }
    //DELETE METHOD
        export async function DELETE(request:NextRequest,{
            params}:{params : {contactId:string}}){
                const contact = await db.contact.findUnique({
                    where :{
                        id:params.contactId
                    }
                })
                if(!contact){
                    return NextResponse.json("Contact Not found",{
                        status:404
                    })
                }
                 await db.contact.delete({
                    where:{
                        id:params.contactId
                    }
                })
                return NextResponse.json("contact delete Successfully",{status:201})
            }