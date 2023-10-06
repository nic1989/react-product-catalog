const ProductViewGrid = (props) => {
    const {item, index } = props;
    const manageAddToCart = (item) => {
        return props.handleAddToCart(item);
    }
    return (
        <div className="col-md-6 col-lg-4 col-xl-4 mb-4" key={index}>
            <div className="card">
                <div className="card-img">
                    <img src={item.thumbnail} className="card-img-top" alt={item.title}></img>
                </div>
                <div className="card-body">
                    <h5 className="dress-name">{item.title}</h5>
                    <div className="d-flex justify-content-between align-items-center">
                        <h6>
                            <span className="new-price">${item.price}</span>
                        </h6>
                        <div className="fs-small">
                            <i className="fa-regular fa-star"></i>
                            <span className="rating-number">{item.rating}</span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="fs-small">
                            <i className="fa-regular fa-copyright"></i>
                            <span> {item.brand}</span>
                        </div>
                        <div className="fs-small">
                            <i className="fa-solid fa-warehouse"></i>
                            <span className="rating-number"> {item.stock}</span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center pt-1">
                        <button onClick={() => manageAddToCart(item)} className="add-to-cart">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductViewGrid;