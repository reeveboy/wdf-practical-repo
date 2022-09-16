export default function List ({people}) {
    return (
        <>
            {people.map(person => {
                const {id, name, age, image} = person
                return (
                    <div key={id} className="flex items-center mb-4 w-full">
                        <img src={image} height={50} width={50} alt="avatar" className="rounded-[999px]" />
                        <p className="p-1"></p>
                        <div>
                            <div className="text-lg">{name}</div>
                            <div className="text-md text-gray-400">{age} years</div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}