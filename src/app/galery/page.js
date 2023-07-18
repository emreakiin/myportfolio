"use client"
import Image from 'next/image'
import React from 'react'

const Galery = () => {

  


    return (
        <div class='w-full h-full flex justify-center items-center'>
            <div class='w-7/12 h-full flex justify-center items-center'>
                <div class='h-4/6 w-full flex justify-between flex-wrap' >
                    <div><Image class='m-5' src="/bir.jpg" width={200} height={100} /></div>
                   
               </div>
            </div>
        </div>
    )
}

export default Galery