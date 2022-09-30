
export default function Review({person}) {
  return (
    <div className="flex flex-col justify-center items-center max-w-[500px] min-w-[500px]">
        <img src={person.image} height={60} width={60} alt="avatar" className="rounded-[999px]" />
        <div className="text-xl capitalize">{person.name}</div>
        <div className="text-lg text-gray-200 capitalize">{person.designation}</div>
        <div>
          
          <div className="text-md text-left text-gray-400 flex flex-col">
            <img className="inline mr-auto" src="left-quote.png" height={20} width={20} alt="" />
            <p className="p-1"></p>
            {person.review}
            <p className="p-1"></p>
            <img className="inline ml-auto"  src="right-quote.png" height={20} width={20} alt="" />
          </div>
          
        </div>
    </div>
  )
}
