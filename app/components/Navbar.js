import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='bg-blue-950 text-white text-center py-3'>
            <span className='font-bold mx-3 text-4xl text-yellow-300'>BitLinks</span>
            <br />
            <br />
            <ul className='gap-8 mx-3'>
                <Link href={"/"} className='font-bold text-xl'><button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2">Home</button></Link>
                <Link href={"/about"} className='font-bold text-xl'><button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2">About</button></Link>
                <Link href={"/contact"} className='font-bold text-xl'><button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2">Contact</button></Link>
            </ul>
        </nav>
    )
}