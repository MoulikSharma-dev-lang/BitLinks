import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    originalUrl: {type: String, required: true},
    expectedUrl: {type: String, required: true},
    shortUrl: {type: String, required: true},
})

const UrlUser = mongoose.models.Url || mongoose.model("Url", urlSchema)
export default UrlUser