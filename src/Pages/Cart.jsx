import { Link } from "react-router-dom";
import CartCard from "../components/CartCard";
import CartSidebar from "../components/CartSidebar";
import { useSelector } from "react-redux";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className="container mt-4">
            {cartItems.length === 0 ?
                <div className="flex text-center mb-48">
                    <h3>Your cart is empty</h3>
                    <Link to="/">Start Shopping</Link>
                </div>
                :
                <>
                    <h3>Shopping Cart</h3>
                    <p className="fw-light fs-xsmall">You have {cartItems.length} items in your cart</p>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                {cartItems.map((item) => {
                                    return <CartCard {...item} key={item.id}  />
                                })}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <CartSidebar />
                        </div>
                    </div>
                </>
            }
            
        </div>
    )
}

export default Cart;