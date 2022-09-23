import { useState } from 'react';
import Review from './Review';
import data from '../data/reviews';

function ReviewPage() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  function prev() {
    if (index == 0) return setIndex(people.length - 1)

    setIndex(index - 1)
  }

  function next() {
    if (index == people.length - 1)  return setIndex(0)

    setIndex(index + 1)
  }

  return (
    <div className='mt-[4rem] w-full flex justify-center'>
      <div className='bg-gray-800 p-4 rounded-lg min-w-[400px]'>
        <div className='text-3xl text-center'>Movie Reviews</div>
        <p className='p-2'></p>
        <Review person={people[index]}/>
        <p className='p-2'></p>
        <div className='flex justify-center'>
            <button className='bg-rose-500 w-[100px] hover:bg-rose-600 px-2 py-1 rounded' onClick={prev}>Prev</button>
            <p className='p-2'></p>
            <button className='bg-rose-500 w-[100px] hover:bg-rose-600 px-2 py-1 rounded' onClick={next}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default ReviewPage;
