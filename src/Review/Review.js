
export default function Review({person}) {
  return (
    <div className="flex flex-col justify-center items-center max-w-[500px] min-w-[500px]">
        <img src={person.image} height={60} width={60} alt="avatar" className="rounded-[999px]" />
        <div className="text-xl capitalize">{person.name}</div>
        <div className="text-lg text-gray-200 capitalize">{person.designation}</div>
        <div className="text-md text-left text-gray-400">{person.review}</div>
    </div>
  )
}
