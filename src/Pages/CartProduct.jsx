import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { addToCart, cartApi } from "../Store/Slice/CartSlice";
import { Link } from "react-router-dom";

const CartProduct = () => {

    const dispatch = useDispatch();
    const displayData = useSelector((state) => state.CartSlice.Data);


    useEffect(() => {
        dispatch(cartApi());
    }, [dispatch]);

    return (
        <>
            <div className="container product-card d-flex m-auto justify-content-center mt-5">
                <div className="row">
                    {displayData.length > 0 ? displayData.map((product) => (
                        <div className="col-md-4 mt-5" key={product.id}>
                        <div className="card h-100">
                            <img src={product.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">
                                    {product.description}
                                    </p>
                                    <h3 className="card-text">
                                    ₹ {product.price}
                                    </h3>
                                    <Link to='/cart'>
                                        <button className="btn btn-primary" onClick={() => dispatch(addToCart(product))}>
                                            Add To Cart
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )): <h3 className="text-center">No Product Found</h3>}
                    
                </div>
            </div>
        </>
    )
}
export default CartProduct;