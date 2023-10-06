import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../utils/cartSlices';
import { updateProduct } from '../utils/productSlices';

const CartCard = (props) =>  {
    const productsData = useSelector((store) => store.product.items)
    const dispatch = useDispatch();
    const removeCart = (item) => {
        let productData = productsData.find(v => v.id === item.id);
        // Remove the stock when add to cart
        productData = {
            ...productData,
            stock: productData.stock + item.qty
        }
        // update the store
        dispatch(updateProduct(productData));
        dispatch(removeItem(item));
    }
    return (
        <div className="col-md-12">
            <div className="card mb-4">
                <div className="card-body">
                    <div className="d-flex justify-content-start align-items-center">
                        <div>
                            <img src={props.thumbnail} className="cart-img" alt={props.title} />
                        </div>
                        <div className="flex justify-content-start align-content-center ms-5">
                            <h6>{props.title}</h6>
                            <p className="fs-xsmall"><strong>Price:</strong> ${props.price}</p>
                            <p className="fs-xsmall"><strong>Qty:</strong> {props.qty}</p>
                        </div>
                    </div>
                    <div onClick={() => removeCart(props)} className="d-flex justify-content-end align-items-center">
                        <i role="button" className="fa-solid fa-trash text-danger"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartCard;