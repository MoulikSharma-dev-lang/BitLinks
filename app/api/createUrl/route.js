import { NextResponse } from "next/server";
import { connectDb } from "@/app/db/connectDb";
import UrlUser from "@/app/models/Url";

export async function POST(request) {
    try {
        const data = await request.json()
        connectDb()
        const shortUrl = `${process.env.NEXT_PUBLIC_HOST}/${data.expectedUrl}`
        await UrlUser.create({originalUrl: data.originalUrl, expectedUrl: data.expectedUrl, shortUrl: shortUrl})
        return NextResponse.json({data: "Url was created!", success: true})
    } catch (error) {
        return NextResponse.json({data: "Url was not created!", success: false})
    }
}