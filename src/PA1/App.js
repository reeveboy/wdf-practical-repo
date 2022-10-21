import React, { useState } from 'react'
import Header from './Header'
import data from './data'
import List from './List'

function PA1() {
  const [people, setPeople] = useState(data)

  const removePerson = (id) => {
    setPeople(prev => prev.filter((p) => { return p.id != id}))
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-[#3498db]'>
      <div className='flex max-w-md w-full flex-col p-4 rounded-md shadow-md bg-[#74b9ff] text-black '>
        <Header heading={"I-Gram"} /> 
        <p className="p-2"></p>
        <ul>
          {people.map((person, index) => (
            <List person={person} removePerson={removePerson} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PA1