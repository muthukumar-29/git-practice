import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react'
import { loginContext } from './App'

export default function Ref() {
  const data = useContext(loginContext);

  const [count, setCount] = useState(0);

  const refCount = useRef(0);

  const increment = () => {
    // setCount(count + 1);
    refCount.current += 1;
  }

  useEffect(() => {
    console.log(refCount);

  }, [count])

  return (
    <div>

      {data}
      <br />
      
      <button onClick={increment}>Click</button>

      <br />
      <button onClick={() => { setCount(refCount.current) }}>Update</button>

      <h1>{refCount.current}</h1>

      <h1>{count}</h1>

    </div>



  )
}
