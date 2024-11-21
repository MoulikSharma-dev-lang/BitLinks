import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className='bg-blue-950 text-white text-center py-3'>
            <p className="font-bold text-xl">Copyright &copy; BitLinks {currentYear} | All rights reserved!</p>
        </footer>
    )
}