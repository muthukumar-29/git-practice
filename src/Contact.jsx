import React from 'react'

export default function Contact() {
    return (
        <div>
            <h1>Welcome to Contact Page</h1>

            <form>

                <input type="text" name='username'placeholder='Username' className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500' />
                <br />
                <input type="email" name='email' placeholder='Email' className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500' />
                <br />
                <input type="number" name='age' placeholder='Age' className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500' />
                <br />
                <button type="submit" className='text-black bg-gray-400 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none'>Submit Form</button>

            </form>

        </div>
    )
}
