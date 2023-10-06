import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Shimmer from '../Shimmer';
import { addItem, updateItem } from '../../utils/cartSlices';
import { addProduct, updateProduct } from '../../utils/productSlices';
import { toast } from 'react-toastify';
import ProductViewGrid from './ProductViewGrid'
import ProductViewList from './ProductViewList'

const ProductListing = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const productsData = useSelector((store) => store.product.items);
    const dispatch = useDispatch();
    const [toggleView, setToggleView] = useState(true);
    useEffect(() => {
        if (!productsData)
            getProductsData();
    }, []);

    async function getProductsData() {
        const response = await fetch('https://dummyjson.com/products?skip=10&limit=20');
        const data = await response.json();
        dispatch(addProduct(data.products));
    }

    const handleAddToCart = (item) => {
        const cartExisting = cartItems.find(v => v.id === item.id);
        if (!cartExisting) {
            item = {
                ...item,
                qty: 1
            };
            // Item add to cart
            dispatch(addItem(item));
        } else {
            item = {
                ...item,
                qty: cartExisting.qty + 1
            };
            // udpate the quantity of the product using add to cart
            dispatch(updateItem(item));
        }
        let productData = productsData.find(v => v.id === item.id);
        // Remove the stock when add to cart
        productData = {
            ...productData,
            stock: productData.stock - 1
        }
        // update the store
        dispatch(updateProduct(productData));
        
        toast.success("Item successfully added to Cart");
    }

    return !productsData ? (
            <Shimmer />
        ) : (
        <>
            {productsData.length === 0 ?
                <div className="container">
                    <div className="row">
                        <h2 className="text-center">No Data Found</h2>
                    </div>
                </div>
                :
                <div className="container py-5">
                    <h2 className="text-center mb-3">Featured Products</h2>
                    <div className="d-flex justify-content-end align-items-center">
                        <h4 onClick={() => setToggleView(!toggleView)}>
                            {toggleView ? 
                                <i className="fa-solid fa-bars"></i>
                                :
                                <i className="fa-solid fa-grip"></i>
                            }
                        </h4>
                    </div>
                    <div className="row clearfix">
                        {productsData.map((item, index) => {
                            return (
                                toggleView ?
                                    <ProductViewGrid item={item} index={index} key={index} handleAddToCart={handleAddToCart} />
                                :
                                    <ProductViewList item={item} index={index} key={index} handleAddToCart={handleAddToCart} />
                            )
                        })}
                    </div>
                </div>
            }
        </>
    )
}

export default ProductListing;