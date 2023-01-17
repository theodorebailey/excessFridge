const ProductList = (props) => {

    // grab products and save to products
    const products = props.products;
    // grab title and set to title 
    const title = props.title;


    // 
    return ( 
        <div className="product-list">
            {/* <h2> { title } </h2> */}
            {products.map((product) => (
                <div className="product-preview" key={ product.id }>
                    <h2>{ product.title }</h2>
                    <p> { product.body }</p>
                    <p> { product.price } </p>
                </div>
            ))}
        </div>
     );
}
 
export default ProductList;