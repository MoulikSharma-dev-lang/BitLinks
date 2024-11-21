import React from 'react'
import UrlUser from '../models/Url'
// import { connectDb } from '../db/connectDb'
import { redirect } from 'next/navigation'

export default async function Url({ params }) {
    const url = (await params).url
    const urls = await UrlUser.find()
    const pageUrl = urls.find((item) => {
        return item.expectedUrl === url
    })
    if (pageUrl){
        redirect(pageUrl.originalUrl)
    }
    return (
        <div>

        </div>
    )
}