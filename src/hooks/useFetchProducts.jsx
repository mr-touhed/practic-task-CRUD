import { useEffect, useState } from "react";



const useFetchProducts = () => {
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');
    const [products,setProducts] = useState([]);

    useEffect(()=>{

        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await fetch('http://localhost:3000/shoes');
                const data = await response.json();
                setProducts(data)
                console.log(data);
                setLoading(false)
            } catch (error) {
                setError(error.massage)
                setLoading(false)
            }
        }

        fetchData()
    },[])
    return (
        [products,loading,error]
    );
};

export default useFetchProducts;