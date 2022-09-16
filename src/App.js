import { useEffect, useState } from 'react';
import List from './List';
import data from './utils/data';

function App() {
  const [people, setPeople] = useState(data)
  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <div className='bg-gray-800 p-4 rounded-lg min-w-[400px] flex flex-col items-center'>
        <div className='text-3xl'>Birthday Reminder App</div>
        <div className='text-2xl'>{people.length} birthdays today</div>
        <p className='p-2'></p>
        <List people={people} />
        <button className='w-full bg-rose-500 hover:bg-rose-600 px-2 py-1 rounded' onClick={() => setPeople([])}>Clear All</button>
      </div>
    </div>
  );
}

export default App;
