
export default function Review({person}) {
  return (
    <div className="flex flex-col justify-center items-center">
        <img src={person.image} height={50} width={50} alt="avatar" className="rounded-[999px]" />
        <div className="text-lg">{person.name}</div>
        <div className="text-md text-gray-400">{person.designation}</div>
        <div className="text-md text-gray-400">{person.review}</div>
    </div>
  )
}
