'use client'

import React from 'react'
import { Skiper58, TextRoll } from "@/components/ui/skiper-ui/rolled-up-text";


const CustomRolledUp = () => {

 const items = [
  {
    name: "LinkedIn➡",
    href: "https://www.blackmooncreative.com",
    description: "[0]",
  },
  {
    name: "Instagram➡",
    href: "https://www.blackmooncreative.com",
    description: "[2]",
  },
  {
    name: "Facebook➡",
    href: "https://www.blackmooncreative.com",
    description: "[3]",
  }

];
  
  return (
    <>
     {
         items.map((data) => (
             <a 
                key={data.name} 
                href={data.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer group"
             >
                <TextRoll className="group-hover:text-gray-700 dark:group-hover:text-gray-100">
                   {data.name}
                </TextRoll>
             </a>
         ))
     }
    </>
  )
}

export default CustomRolledUp