import React from 'react'
import { useContext } from 'react'
import { dataContext } from './Home'

export default function Context() {

    const data = useContext(dataContext);

    return (
        <div>
            <h1>Use Context</h1>
            {/* <h2>{props.value}</h2> */}
            <h2>{data}</h2>
        </div>
    )
}
