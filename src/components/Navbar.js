import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div class='flex justify-evenly items-center bg-white fixed top-50 top-0 w-full h-1/6'>
            <div class='h-full flex justify-center items-center'>
                <Image src="/ealogo.jpg" width={150} height={150} class='text-3xl'/>
            </div>
            <div class='flex justify-center items-center h-46'>
                <Link href='/' class='m-3 text-gray-400 hover:text-red-900'>HOME</Link>
                <Link href='/'class='m-3 text-gray-400 hover:text-red-900'>ABOUT</Link>
                <Link href='/galery'class='m-3 text-gray-400 hover:text-red-900'>GALLERY</Link>
                <Link href='/'class='m-3 text-gray-400 hover:text-red-900'>STORE</Link>
                <Link href='/'class='m-3 text-gray-400 hover:text-red-900'>CONTACT</Link>
                <Link href='/'class='m-3 text-gray-400 hover:text-red-900'>CONTACT</Link>
                <Link href='/'class='m-3 text-gray-400 hover:text-red-900'>CONTACT</Link>
            </div>
        </div>
    )
}

export default Navbar

