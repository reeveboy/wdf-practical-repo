import React from 'react'

function List({person, removePerson}) {
  const {id, name, image, bio} = person

  const handleFollow = () => {
    removePerson(id)
  }
  
  return (
    <div key={id} className='flex items-center mt-2 shadow-md p-2 bg-[#87c1fc] rounded-lg'>
      <img src={image} className="bg-[#fd79a8] rounded-full max-h-[60px] max-w-[60px] p-1" alt="" />
      <p className="p-1"></p> 
      <div className='grow'>
        <div className='text-lg font-semibold'>{name}</div>
        <div>{bio}</div>
      </div>
      <p className="p-1"></p> 
      <div className='self-end'>
        <button onClick={handleFollow} className='flex items-center text-white bg-[#fd79a8] hover:bg-[#e84393] rounded-md px-2 py-1'>
            <div className='font-medium'>
                Follow
            </div> 
            <p className="p-1"></p>
            <img className='max-h-[25px]' src="add-friend.png" alt="" />
        </button>
      </div>
    </div>
  )
}

export default List