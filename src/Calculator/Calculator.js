import React, { useState } from 'react'

function Calculator() {
    const [input, setInput] = useState([])
    return (
        <div class="w-screen h-screen bg-gray-700 text-gray-200 flex justify-center items-center">
            <div class="p-4 w-[420px] border border-white rounded grid grid-rows-5 gap-4 bg-gray-900">
                <div>
                    <input value={input.join("")} class="w-full px-4 py-2 rounded text-gray-800" type="text" name="" id="" />
                </div>
                <div class="text-gray-800 grid grid-cols-4 gap-4 text-center">
                    <CalcBtns  setInput={setInput} value={7} />
                    <CalcBtns  setInput={setInput} value={8} />
                    <CalcBtns  setInput={setInput} value={9} />
                    <CalcBtns  setInput={setInput} value={"/"} operation={true} />
                </div>
                <div class="text-gray-800 grid grid-cols-4 gap-4 text-center">
                    <CalcBtns  setInput={setInput} value={4} />
                    <CalcBtns  setInput={setInput} value={5} />
                    <CalcBtns  setInput={setInput} value={6} />
                    <CalcBtns  setInput={setInput} value={"*"} operation={true} />
                </div>
                <div class="text-gray-800 grid grid-cols-4 gap-4 text-center">
                    <CalcBtns  setInput={setInput} value={1} />
                    <CalcBtns  setInput={setInput} value={2} />
                    <CalcBtns  setInput={setInput} value={3} />
                    <CalcBtns  setInput={setInput} value={"-"} operation={true} />
                </div>
                <div class="text-gray-800 grid grid-cols-4 gap-4 text-center">
                    <CalcBtns  setInput={setInput} value={0} />
                    <CalcBtns  setInput={setInput} value={"."} />
                    <CalcBtns  setInput={setInput} value={"="} operation={true} />
                    <CalcBtns  setInput={setInput} value={"+"} operation={true} />
                </div>
            </div>
        </div>
  )
}

function CalcBtns({value, operation, setInput}) {
    const handleClick = () => {
        setInput(prev => [...prev, value])
    }

    if (operation) return <button onClick={handleClick} class="px-4 py-2 bg-gray-600 hover:bg-gray-800 rounded text-gray-200">{value}</button>
    return <button onClick={handleClick} class="px-4 py-2 bg-gray-300 hover:bg-gray-600 rounded">{value}</button>
}

export default Calculator