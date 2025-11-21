import React from 'react'
import useFetch from './CustomHooks/useFetch';
import useCreate from './CustomHooks/useCreate';

export default function CustomHook() {

    const [data, loading, error] = useFetch('http://localhost:5000/api/users');

    const [createData, user, userLoading, userError] = useCreate();

    const handleCreate = () => {
        const result = createData('http://localhost:5000/api/users', { username: 'muthukumar', email: 'muthukumar@gmail.com', password: '12345678' });
        console.log("result", result);
        console.log("Response/", user);
    }

    return (
        <div>
            <h1>Custom Hook Example</h1>
            
            {/* {JSON.stringify(data)} */}

            <button onClick={handleCreate}>create</button>

            {JSON.stringify(user)}

        </div>
    )
}
