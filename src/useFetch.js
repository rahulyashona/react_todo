import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        setTimeout(() => {
            fetch(url)
            .then(res =>{
                if(!res.ok){
                    throw Error('Could not fetch any Task!!');
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setData(data);
                setError(null);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                setError(err.message);
            });
        } , 1000);
    }, [url]);
return { data, loading, error}
}

export default useFetch;