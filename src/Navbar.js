// import link elements to route
import { Link } from 'react-router-dom';
// import image for logo in nav
import Image from './images/pink_fridge.svg';

// create nav component
const Navbar = () => {

    return ( 
        <nav className="navbar" role="navigation">
            <h1>Fridge Excess</h1>
            <img src={Image} alt="" style={
                {
                    width: "9vw",
                    height: "auto"
                }
            }/>
            <div className="links">
                <Link to="/">Home</Link>
                {/* {} = dynamic value, inner {} is JavascriptObject */}
                <Link to="/about" >About</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
     );
}
 
// export nav element
export default Navbar;

// using inline CSS styling
// Inline CSS
// style={{
//     color: "white",
//     backgroundColor: "black",
// }}