import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeCartItem } from "../Store/Slice/CartSlice";

const Cart = () => {

    const cartProduct = useSelector((state) => state.CartSlice.Cart);

    const dispatch = useDispatch();

    return (
        <>
            <div className="container cart-data">
                <div className="row">
                    {cartProduct.length > 0 ? cartProduct.map((product) => (
                    <div className="col-md-3" key={product.id}>
                       <div className="row">
                                <div className="card h-100">
                                <img src={product.image} className="card-img-top" alt="..." />
                                <div className="card-body"> 
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">
                                    {product.description}
                                    </p>
                                </div>
                                <button className="btn btn-danger" onClick={() => dispatch(removeCartItem(product.id))}>Delete</button>
                                </div>
                                <Link to='/checkout' className="btn btn-primary">
                                        proceed to checkout
                                </Link>
                        </div>

                    </div>
                    )): <h3 className="text-center">Cart is Empty</h3>}

                </div>
            </div>
        </>
    )
}
export default Cart;