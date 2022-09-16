
export default function Review({person}) {
  return (
    <div className="flex flex-col justify-center items-center">
        <img src={person.image} height={60} width={60} alt="avatar" className="rounded-[999px]" />
        <div className="text-lg capitalize">{person.name}</div>
        <div className="text-md text-gray-400 capitalize">{person.designation}</div>
        <div className="text-md text-gray-400">{person.review}</div>
    </div>
  )
}
