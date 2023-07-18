import React from 'react'
import { BsInstagram,BsTwitter } from 'react-icons/bs';
import { BiLogoFacebook } from 'react-icons/bi';
import Link from 'next/link';


const Footer = () => {
  return (
    <div class='bg-white h-10 w-full flex justify-around items-center fixed bottom-0'>
        <div>
            <div class='text-black-400'>© EMRE AKIN 2023</div>
        </div>
        <div class='flex justify-center items-center'>
            <Link href='/' class='p-3 text-black-400'><BsInstagram/></Link>
            <Link href='/' class='p-3 text-black-400'><BiLogoFacebook/></Link>
            <Link href='/' class='p-3 text-black-400'><BsTwitter/></Link>
        </div>
    </div>
  )
}

export default Footer