import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import data from './Menu'

function Restaurant() {
    const [menu, setMenu] = useState(data)

    useEffect(() => {
        let cats = []
        data.forEach(val => {
            if (!cats.includes(val.category))
                cats.push(val.category)
        })
        setCategories(cats)
    })
    const [categories, setCategories] = useState([])

    function handleAll (cat) {
        if (cat == "all") return setMenu(data)

        setMenu(() => {
            return data.filter(val => {
                if (val.category == cat) return val
            })
        })        
    }

  return (
    <div className='flex flex-col justify-center items-center p-8'>
        <div className='text-2xl font-bold'>Our Menu</div>
        <p className="p-2"></p>
        <div className='flex'>
            <button onClick={() => handleAll("all")}>All</button>
            <p className="p-2"></p>
            {categories.map(cat => {
                return (
                    <>
                        <button className='capitalize ' onClick={() => handleAll(cat)}>{cat}</button>
                        <p className="p-2"></p>
                    </>
                )
            })}
        </div>
        <p className="p-4"></p>
        <div className='grid grid-cols-2'>
            {menu.map((item, idx) => (
                <div className='flex w-full mb-4 p-4'>
                    <img className='rounded object-cover max-h-[150px] max-w-[250px] min-h-[150px] min-w-[250px]' src={item.image} />
                    <div className='flex flex-col p-2'>
                        <div className='capitalize  text-xl'>{item.name}</div>
                        <div className='text-gray-400'>{item.description}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Restaurant