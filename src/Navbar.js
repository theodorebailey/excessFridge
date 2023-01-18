import { Link } from 'react-router-dom';

import Image from './images/pink_fridge.svg';

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
 
// need to then import 
export default Navbar;

// Inline CSS
// style={{
//     color: "white",
//     backgroundColor: "black",
// }}