import axios from "axios";
import { useState, useEffect } from "react"

export default function useFetch(url) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // fetch(url)
        //     .then(response => {
        //         if (!response.success) {
        //             throw Error("Couldn't Retrieve data");
        //         }
        //         console.log(response);
        //         return response.data;
        //     }).then(data => setData(data))
        //     .catch((error) => {
        //         console.log(error.message);
        //         setError(error.message);
        //     })

        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                console.log(response);
                if (!response.data.success) {
                    throw Error("Couldn't fetch data");
                }

                setData(response.data.data);

            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();

    }, [url])

    return [data, loading, error];



}
