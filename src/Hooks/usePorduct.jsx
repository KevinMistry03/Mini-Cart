import { useEffect, useState } from "react"
import axios from 'axios'

export const useProduct = () => {

    const [data, setData] = useState([]);

    const getProduct = async () => {
       try {
            const res = await axios.get(`https://dummyjson.com/products`);
            const data = res.data;
            setData(data.products);
       } catch (error) {
            console.log('error :', error);
       }
    }

    useEffect(() => {
        getProduct();
    },[]);

    return {data}
}