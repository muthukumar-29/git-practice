import { useState } from "react";
import axios from "axios";

const useCreate = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const createData = async (url, body) => {

        try {
            const response = await axios.post(url, body);
            if (!response.data.success) {
                throw Error("Couldn't create data");
            }
            setData(response.data);
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false);
        }

    }


    return [createData, data, loading, error]

}

export default useCreate;