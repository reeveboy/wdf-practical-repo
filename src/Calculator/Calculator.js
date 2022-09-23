import React from 'react'

function Calculator() {
  return (
    <div class="w-screen h-screen bg-gray-700 text-gray-200 flex justify-center items-center">
        <div class="p-4 w-[420px] border border-white rounded grid grid-rows-5 gap-4 bg-gray-900">
            <div>
                <input class="w-full px-4 py-2 rounded text-gray-800" type="text" name="" id="" />
            </div>
            <div class="text-gray-800 grid grid-cols-4 gap-4 text-center">
                <button class="px-4 py-2 bg-gray-300 hover:bg-gray-600 rounded">7</button>
                <button class="px-4 py-2 bg-gray-300 hover:bg-gray-600 rounded">8</button>
                <button class="px-4 py-2 bg-gray-300 hover:bg-gray-600 rounded">9</button>
                <button class="px-4 py-2 bg-gray-600 hover:bg-gray-800 rounded text-gray-200">/</button>
            </div>
            <div class="text-gray-800 grid grid-cols-4 gap-4 text-center">
                <button class="px-4 py-2 bg-gray-300 hover:bg-gray-600 rounded">4</button>
                <button class="px-4 py-2 bg-gray-300 hover:bg-gray-600 rounded">5</button>
                <button class="px-4 py-2 bg-gray-300 hover:bg-gray-600 rounded">6</button>
                <button class="px-4 py-2 bg-gray-600 hover:bg-gray-800 rounded text-gray-200">*</button>
            </div>
            <div class="text-gray-800 grid grid-cols-4 gap-4 text-center">
                <button class="px-4 py-2 bg-gray-300 hover:bg-gray-600 rounded">1</button>
                <button class="px-4 py-2 bg-gray-300 hover:bg-gray-600 rounded">2</button>
                <button class="px-4 py-2 bg-gray-300 hover:bg-gray-600 rounded">3</button>
                <button class="px-4 py-2 bg-gray-600 hover:bg-gray-800 rounded text-gray-200">-</button>
            </div>
            <div class="text-gray-800 grid grid-cols-4 gap-4 text-center">
                <button class="px-4 py-2 bg-gray-300 hover:bg-gray-600 rounded">0</button>
                <button class="px-4 py-2 bg-gray-300 hover:bg-gray-600 rounded">.</button>
                <button class="px-4 py-2 bg-gray-300 hover:bg-gray-600 rounded">=</button>
                <button class="px-4 py-2 bg-gray-600 hover:bg-gray-800 rounded text-gray-200">+</button>
            </div>
        </div>
    </div>
  )
}

export default Calculator