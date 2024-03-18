import { useState } from "react";
import { useProduct } from "../Hooks/usePorduct";
import { Link } from "react-router-dom";

const Product = () => {

    const {data} = useProduct();

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        let value = e.target.value;
        setValue(value);
    }

    const filterdData = data.filter((item) => item.title && item.title.toLowerCase().includes(value.toLowerCase()));

    const [checkbox, setCheckbox] = useState([
        {id:0, brand: 'Apple', state: false},
        {id:1, brand: 'OPPO', state: false},
        {id: 2, brand: 'Infinix', state: false},
        {id: 3, brand: 'Samsung', state: false}
    ]);

    const [selectBrand, setSelectBrand] = useState('All Brands');

    const handleFilterChange = (brand) => {
        let checkUser;
        if (brand === 'All Brands') {
            checkUser = checkbox.map((brand) => ({...brand, state: selectBrand.includes('All Brands')}))
        } else {
            checkUser = checkbox.map((item) => item.brand === brand ? {...item, state: true}: {...item, state: false});
        }
        setCheckbox(checkUser);
        setSelectBrand(brand);
    }

    const combineData = filterdData.filter((product) => (selectBrand === 'All Brands' || product.brand === selectBrand));

    


    
    
    return (
        <>

            <div className="container serach-input d-flex justify-content-center">
                <div className="container-fluid mt-5">
                    <form className="d-flex" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        value={value}
                        onChange={handleChange}
                        placeholder="Search Products"
                        aria-label="Search"
                    />
                 </form>
                </div>
            </div>

            <div className="container sorting-price d-flex">
                <div className="row">
                <div className="dropdown text-center mt-3">
                    <div className="col-md-12">
                    <div className="form-check w-m-auto">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                        checked={selectBrand.length === 0 || selectBrand.includes('All Brands')}
                        onChange={() => handleFilterChange('All Brands')}
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                        All Brands
                        </label>    
                    </div>    
                        {checkbox.map((check, id) => (
                            <div className="form-check" key={id}>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id={`flexCheckChecked${check.id}`}
                                    checked={check.state}
                                    onChange={() => handleFilterChange(check.brand, check.id)}
                                    />
                                    <label className="form-check-label" htmlFor={`flexCheckChecked${check.id}`}>
                                    {check.brand}
                                </label>
                        </div>
                        ))}
                    </div>
                </div>
                </div>
            </div>

            <div className="container product-card d-flex m-auto justify-content-center mt-5">
                <div className="row">
                    {combineData.length > 0 ? combineData.map((product) => (
                        <div className="col-md-4 mt-5" key={product.id}>
                        <div className="card h-100">
                            <img src={product.thumbnail} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">
                                    {product.description}
                                    </p>
                                    <h3 className="card-text">
                                    ₹ {product.price}
                                    </h3>
                                    <Link to={`/singleProduct${product.id}`} className="btn btn-primary">
                                        Product Detail
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

export default Product;