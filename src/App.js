
import Navbar from './Navbar';
import Home from './Home';
// A component is a function, which we then return
function App() {
  

  // we can right valid javascript
  const title = 'Welcome';
  // react will convert to a string
  const likes = 20;

  // {} will output dynamic values  - JSX


  // booleans and objects are problematic
  const person = {
    name: 'Josh',

  }


  return (
    // JSX, syntax slightly altered from HTML - babel transpiller will change to HTML
    <div className="App">
      {/* return Navbar */}
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

// always export our components to use in other files
export default App;

{/* output dynamic value *
         <h1>{title}</h1>

        <p>Liked {likes} times</p>

         <p> {person} </p> *

         <p> { 10 } </p>

        <p> { "Hello, legends" } </p>

        <p> { [1, 2, 3, 4, 5 ] } </p>

        <p> { Math.random() * 10 } </p> */}