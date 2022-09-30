import { useEffect, useState } from 'react';
import List from './List';
import data from '../data/data';

function App() {
  const [people, setPeople] = useState(data)
  return (
    <div className='h-screen w-full flex items-center justify-center bg-pink-400'>
      <div className='bg-white text-gray-900 p-4 rounded-lg min-w-[400px] flex flex-col'>
        <div className='text-2xl'>{people.length} birthdays today</div>
        <p className='p-2'></p>
        {people.map(person => (
          <List person={person} />
        ))}
        {people.length == 0 ? "" : (
          <button className='w-full text-white bg-pink-400 hover:bg-rose-600 px-2 py-1 rounded' onClick={() => setPeople([])}>Clear All</button>
        )}
      </div>
    </div>
  );
}

export default App;
