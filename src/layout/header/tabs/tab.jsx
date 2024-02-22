import React from 'react'
import { tabData } from '../../../data/data'
import { Button } from '../../../components/ui/button'
export const Tab = () => {
  console.log(tabData[1].icon);
  return (
    <>
    <div className='flex items-center justify-between'>
        <ul className='flex justify-between w-[900px]'>
        {tabData.map((item)=>
        <li className='flex' key={item.id}>
          <a className='hover:text-primary flex items-center gap-4' href={item.path}>
          <img src={item.icon} alt="icon" />
            {item.name}</a>
        </li>
        )}
        </ul>
        <Button variant={"tab"}>iPhone 14 Pro Max</Button>
    </div>
    </>
  )
}
