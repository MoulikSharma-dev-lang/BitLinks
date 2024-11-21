"use client"
import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { redirect } from "next/navigation";

export default function Generate() {
  const [urlArray, setUrlArray] = useState([])
  const [urlForm, setUrlForm] = useState({ originalUrl: "", expectedUrl: "" })

  useEffect(() => {
    getUrls()
  }, [])

  async function hitApi(path, method, body){
    let data = await fetch(path, {method: method, body: JSON.stringify(body), headers: { 'Content-Type': 'application/json' }})
    let res = await data.json()
    console.log(res)
  }

  async function getUrls() {
    let data = await fetch("/api/fetchUrls")
    let res = await data.json()
    setUrlArray(res.urls)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!urlForm.originalUrl || !urlForm.expectedUrl) {
      toast.error("Please write all information!", { position: "top-right" })
    } else {
      hitApi("/api/createUrl", "POST", urlForm)
      toast.success("Url is generated! Refresh the page!", { position: "top-right" })
    }
  }

  return (
    <div className=''>
      <h1>Generate your short URL</h1>
      <br />
      <div className='text-center'>
        <form onSubmit={handleSubmit}>
          <input value={urlForm.originalUrl} onChange={(e) => { setUrlForm({ ...urlForm, [e.target.name]: e.target.value }) }} type="text" name="originalUrl" placeholder='Enter your original url' className='border w-[350px] p-2 rounded-lg' />
          <br />
          <br />
          <input value={urlForm.expectedUrl} onChange={(e) => { setUrlForm({ ...urlForm, [e.target.name]: e.target.value }) }} type="text" name="expectedUrl" placeholder='Enter your expected url' className='border w-[350px] p-2 rounded-lg' />
          <br />
          <br />
          <button type="submit" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button>
        </form>
      </div>
      <br />
      {urlArray.map((item, index) => {
        return <div key={index} className="text-center mb-10">
          <b>Url: </b><p>{item.originalUrl}</p>
          <b>Short Url: </b><p onClick={()=>{redirect(`/${item.expectedUrl}`)}} className="cursor-pointer">https://bitlinks.onrender.com/{item.expectedUrl}</p>
          <button onClick={()=>{hitApi("/api/deleteUrl", "DELETE", item); toast.success("Url is deleted successfully! Refresh the page!", {position: "top-right"})}} className="bg-red-500 text-white p-2 rounded-lg">Delete</button>
        </div>
      })}
      <ToastContainer />
    </div>
  )
}