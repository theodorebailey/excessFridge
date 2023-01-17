import {useState} from 'react';
import ProductList from './ProductList';

// props make elements more resuable
// props allow us to use data stored here later on
// props pass data from child to parent
const Home = () => {

    // non-reactive element, React won't rerender - we require a hook {useState}, use = hook

    // cycle through products - .map javascript methods
    const [products, setProducts] = useState([
        {title: "A package", body: "A - z features", price: 9.99, id: 1, featured: "no"},
        {title: "B package", body: "B - y features", price: 5.99, id: 2, featured: "yes"},
        {title: "C package", body: "C - x features", price: 2.99, id: 3, featured: "no"}
    ]);




    return ( 
        <div className="home">
            <h2>Company Packages</h2>
            {/* pass information ass property */}
            <ProductList products={products} title="Products list" />
            {/* <ProductList products={products.filter((product) => product.featured === "yes")} title="Products list" /> */}
        </div>
     );
}
 
export default Home;