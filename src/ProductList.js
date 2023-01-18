// create component product list, import property values
const ProductList = (props) => {

    // grab products and save to products
    const products = props.products; 
    
    // return export
    return ( 
        <div className="product-list">
            {/* <h2> { title } </h2> */}
            {products.map((product) => (
                // run through list using product id
                <div className="product-preview" key={ product.id }>
                    {/* create elements using information accessed */}
                    <h2>{ product.title }</h2>
                    <p> { product.body }</p>
                    <p> { product.price } </p>
                </div>
            ))}
        </div>
     );
}
 
// export file to home page
export default ProductList;