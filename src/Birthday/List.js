import { useState } from "react"

export default function List ({person}) {
    const {id, name, age, image} = person
    const [count, setCount] = useState(0)

    return (
        <div key={id} className="flex items-center mb-4 w-full">
            <img src={image} height={50} width={50} alt="avatar" className="rounded-[999px]" />
            <p className="p-1"></p>
            <div className="grow">
                <div className="text-lg">{name}</div>
                <div className="text-md text-gray-400">{age} years</div>
            </div>
            <div className="flex items-center">
                {count ? (<div className="mr-1">{count} wishes!</div>) : ""}
                <button onClick={() => setCount(count + 1)}  >
                    <img src="cake_icon.png" alt="" />
                </button>
            </div>
        </div>
    )
}