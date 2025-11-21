import React, { useMemo, useState } from 'react'

export default function Memo() {

    const [number, setNumber] = useState(0);

    const memorizedValue = useMemo(() => {
        return number * 2;
    }, [number]);

    return (
        <div>
            <h1>Use Memo Example</h1>

            <input type="number" name="" id="" onChange={(e) => { setNumber(e.target.value) }} />
            <br />
            {memorizedValue}

        </div>
    )
}
