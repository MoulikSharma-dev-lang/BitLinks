import { NextResponse } from "next/server";
import { connectDb } from "@/app/db/connectDb";
import UrlUser from "@/app/models/Url";

export async function DELETE(request) {
    try {
        const { originalUrl } = await request.json()
        connectDb()
        await UrlUser.findOneAndDelete(originalUrl)
        return NextResponse.json({data: "Url deleted successfully!", success: true})
    } catch (error) {
        return NextResponse.json({data: "Url not deleted successfully!", success: false})
    }
}