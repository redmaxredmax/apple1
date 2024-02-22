import React from 'react'
import { Button } from '../../../components/ui/button'
import {Search} from "/public/icons/search.jsx"
import {Like} from "/public/icons/like.jsx"
import {Untitled} from "/public/icons/untitled.jsx"
import {Pocket} from "/public/icons/pocket.jsx"
export const SubHeader = () => {
    return (
        <>
            <div className='flex justify-between items-center pb-[40px]'>
                <Button variant={"primary"}>Каталог товаров</Button>
                <form className='flex border-2  rounded-lg border-grey items-center py-[18px] px-[26px] gap-[10px] w-[594px]'>
                    <Search />
                    <input className="w-[500px]" type="text" placeholder='Поиск по каталогу товаров' />
                </form >
                <div className='flex gap-[26px]'>
                <Like/>
                <Untitled/>
                </div>
                <Button icon={<Pocket/>} variant={"secondary"}>  в корзине</Button>
            </div>
        </>
    )
}
