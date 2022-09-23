import { useEffect, useState } from 'react';

function EmployeeDetails(props) {
  return (
    <div className='flex items-center justify-between'>
        <span className=' text-xl tracking-tight text-gray-900 dark:text-white'>{props.label}:</span>
        <span className='capitalize font-normal text-gray-700 dark:text-gray-400'>{props.value}</span>       
    </div>
  )
}


function  Employees(props) {
  return (
    <div className='hover:shadow-rose-700 block p-6 min-w-[350px] bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
      <EmployeeDetails label="Employee Id" value={props.id} />
      <EmployeeDetails label="Employee Name" value={props.name} />
      <EmployeeDetails label="Employee Designation" value={props.desgination} />
      <EmployeeDetails label="Employee Department" value={props.department} />
      <EmployeeDetails label="Employee Salary" value={props.salary} />
      <EmployeeDetails label="Employee Address" value={props.address} />
      <EmployeeDetails label="Employee Date of Joining" value={props.doj} />
      
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setSeconds(seconds + 1)
    }, 1000)
  })

  const updateCount = () => {
    setCount(count + 1)
  }

  return (
    <div className='flex flex-col items-center mt-4'>
    <div className='flex flex-col items-center'>
      <span className='text-3xl font-bold shadow cursor-pointer'  onClick={updateCount}>Employees</span>
      <span>Clicked {count} times!</span>
      <span>You have been on my site for {seconds} seconds</span>
    </div>
    <p className='p-1'></p>
    <div className=' grid grid-cols-3 gap-4'>
      <Employees id="1" name="reeve" desgination="dev" department="web" salary="50000" address="cavelossim" doj="2022"/>
      <Employees id="2" name="ash" desgination="mobile" department="tehx" salary="50000" address="chandor" doj="2021"/>
      <Employees id="3" name="moses" desgination="hod" department="marketing" salary="10000" address="assolna" doj="2019"/>
    </div>
    </div>
  );
}

export default App;