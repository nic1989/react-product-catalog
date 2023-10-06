import { useSelector } from "react-redux";

const CartSidebar = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const cartTotal = cartItems.reduce((a, c) => {
        return a + c.price;
    }, 0);
    return (
        <>
            <div className="float-end order-summary bb">
                <h4>Order Summary</h4>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="fs-xsmall">SubTotal:</div>
                    <div className="fs-xsmall">${cartTotal}</div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="fs-xsmall">Shipping:</div>
                    <div className="fs-xsmall">-</div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="fw-bold fs-xsmall">Total:</div>
                    <div className="fw-bold fs-xsmall">${cartTotal}</div>
                </div>
                <div className="mt-4">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Discount code" />
                        <div className="input-group-append">
                            <span className="input-group-text" id="basic-addon2">Apply</span>
                        </div>
                    </div>
                </div>
                <div className="d-grid mt-4">
                    <button className="btn btn-dark btn-lg">Pay ${cartTotal}</button>
                </div>
            </div>
        </>
    )    
}

export default CartSidebar;