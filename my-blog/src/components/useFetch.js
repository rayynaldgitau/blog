import { useState, useEffect } from "react"; // Importing necessary hooks from React
import axios from 'axios'; // Importing Axios for making HTTP requests

// Custom hook named useFetch for fetching data from a specified URL
const useFetch = (url) => {
    // Initializing state for storing fetched data using useState hook
    const [data, setData] = useState(null);

    // useEffect hook is used for side effects, like data fetching
    useEffect(() => {
        // Using Axios to make a GET request to the specified URL
        axios.get(url)
            .then(res => {
                // If successful, update the data state with the fetched data
                setData(res.data);
            })
            .catch(err => console.log(err))
    }, [url])


    // Returning the fetched data as an object
    return { data };
}

export default useFetch; // Exporting the useFetch hook as default
