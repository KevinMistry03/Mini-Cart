import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

const SingleProduct = () => {

    const {id} = useParams();

    const [data, setData] = useState({});

    const getSingleProduct = async () => {
       try {
         const res = await axios.get(`https://dummyjson.com/products/${id}`);
         const data = res.data;
         setData(data);
       } catch (error) {
            console.log('error :', error);
       }
    }

    useEffect(() => {
        getSingleProduct();
    },[]);

    const title = data.title 
    const description =  data.description 
    const price = data.price 
    const image = data.thumbnail 

    return (
        <>
            <div className="container single-product d-flex justify-content-center">
     
                        <div className="col-md-4">
                        <div className="card mt-2">
                            <img src={image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">
                                    {description}
                                    </p>
                                    <h3 className="card-text">
                                    ₹ {price}
                                    </h3>
                                </div>
                            </div>
                            <div className="button d-flex justify-content-center mt-2">
                                <Link to='/product'>
                                    <button className="btn btn-dark">Back To Home</button>
                                </Link>
                            </div>
                        </div>
                         
                    </div>

        </>
    )
}
export default SingleProduct