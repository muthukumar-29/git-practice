import React from 'react'
import About from './About';
import { createContext } from 'react';

export const dataContext = createContext()

export default function Home(props) {

  // const data = "context example";

  const data1 = "hello from Home component"

  return (
    <div>
      <div className='text-center'>
        <h2 className='bg-sky-300 hover:bg-sky-700 hover:text-white p-5'>Hello {props.name}</h2>


        <dataContext.Provider value={data1}>
          <About />
        </dataContext.Provider>

      </div>
    </div>
  )
}
