import { NextResponse } from "next/server";
import { connectDb } from "@/app/db/connectDb";
import UrlUser from "@/app/models/Url";

export async function GET(request) {
    try {
        connectDb()
        const urls = await UrlUser.find()
        return NextResponse.json({data: "Fetched the urls!", success: true, urls: urls})
    } catch (error) {
        console.log(error)
        return NextResponse.json({data: "Not fetched the urls!", success: false})
    }
}