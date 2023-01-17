import Image from './images/pink_fridge.svg';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <img src={Image} alt="" style={
                {
                    width: "10vh",
                    height: "auto"
                }
            }/>
            <h1>Fridge Excess</h1>
            <div className="links">
                <a href="/">Home</a>
                {/* {} = dynamic value, inner {} is JavascriptObject */}
                <a href="/about" >Landing</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/contact">Contact</a>
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