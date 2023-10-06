const ProductViewList = (props) => {
    const {item, index } = props;
    const manageAddToCart = (item) => {
        return props.handleAddToCart(item);
    }
    return (
        <div className="col-md-12" key={index}>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="d-flex justify-content-start align-items-center">
                        <div>
                        <img src={item.thumbnail} className="card-img-top" alt={item.title} />
                        </div>
                        <div className="flex justify-content-start align-content-center ms-5">
                            <h6>{item.title}</h6>
                            <p className="fs-xsmall"><strong>Price:</strong> ${item.price}</p>
                            <p className="fs-xsmall"><strong>Stock:</strong> {item.stock}</p>
                        </div>
                        <div className="flex justify-content-start align-content-center ms-5">
                            <p className="fs-xsmall"><strong>Brand:</strong> {item.brand}</p>
                            <p className="fs-xsmall"><strong>Rating:</strong> {item.rating}</p>
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

export default ProductViewList;