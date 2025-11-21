import React, { useState } from 'react'

export default function SubmitForm() {

    const [data, setData] = useState({
        username: '',
        email: '',
        age: 0
    })

    const handleChange = (e) => {
        e.preventDefault();

        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(data);
        
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>

                <input type="text" name='username' onChange={handleChange} placeholder='Username' className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500' />
                <br />
                <input type="email" name='email' onChange={handleChange} placeholder='Email' className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500' />
                <br />
                <input type="number" name='age' onChange={handleChange} placeholder='Age' className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500' />
                <br />
                <button type="submit" className='text-black bg-gray-400 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none'>Submit Form</button>

            </form>

        </div>
    )
}
