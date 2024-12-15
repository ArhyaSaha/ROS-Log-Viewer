import React from 'react'
import './App.css'
import Task1 from './Task1'
import robotair from './assets/robotair.svg'

const App = () => {
  return (
    <>
      <div className='flex justify-between m-2 mt-4 p-1 w-full items-center'>
        <span className='flex items-center w-[10%]'>
          <img src={robotair} alt="" />
        </span>

        <h1 className='dm-sans-thin text-3xl text-white text-center font-semibold'>ROS Log Viewer and Analyzer</h1>
        <div className='w-1/12'></div>
      </div>
      <div id='main' className='w-full h-full'>
        <Task1 />
      </div>
    </>
  )
}

export default App