import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

 
 
 const Navbar = () => {
    
    const cartProduct = useSelector((state) => state.CartSlice.Cart);


    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to='/product'>
            Mine-Cart
            </Link>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
    <   div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to='/product'>
                Product
                </Link>
                <Link className="nav-link" to='/cartproducts'>
                Cart Products
                </Link>
                <Link className="nav-link" to='/cart'>
                Cart  <span className="text-danger"><b>{cartProduct.length}</b></span>
                </Link>
            </div>
         </div>
  </div>
</nav>

        </>
    )
}

export default Navbar;