import React from 'react'
import { useState } from 'react'

function Notes() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!input) return
        setTodos((prev) => {return [...prev, input]})
        setInput("")
    }
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleClear = (idx) => {
        setTodos(prev => {
            return prev.filter((val, index) => {
                if (index != idx) return val
            })
        })
    }
    const handleClearAll = () => {
        setTodos([])
    }
  return (
    <div className='w-screen h-screen bg-gray-900 text-gray-200 flex justify-center items-center'>
        <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 text-gray-900 rounded min-w-[400px] flex flex-col'>
            <div className='text-2xl font-black text-center'>
                Todo App
            </div>
            <p className="p-2"></p>
            <form onSubmit={handleSubmit} className='flex'>
                <input value={input} onChange={handleChange} className='appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" />
                <p className="p-2"></p>
                <button className='text-white bg-pink-500 hover:bg-rose-600 px-2 py-1 rounded' type="submit">Enter</button>
            </form>
            <div className='flex flex-col'>
                {todos.map((todo, idx) => (
                    <div className='text-xl flex justify-between items-center w-full bg-gray-100 hover:bg-gray-200 px-2 py-1 mt-2 rounded' key={idx}>{todo}
                        <button onClick={() => handleClear(idx)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                        </button>
                    </div>
                ))}
                {todos.length != 0 ? (
                    <>
                        <p className="p-1"></p>
                        <button onClick={handleClearAll} className='text-white bg-pink-500 hover:bg-rose-600 px-2 py-1 rounded'>Clear All</button>
                    </>
                ) : ""}
            </div>
        </div>
    </div>
  )
}

export default Notes