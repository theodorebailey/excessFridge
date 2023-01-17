import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';

import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

// A component is a function, which we then return
function App() {
  

  // {} will output dynamic values  - JSX


  return (
    // JSX, syntax slightly altered from HTML - babel transpiller will change to HTML
    <div className="App">
      {/* return Navbar */}
      <Navbar />
      <div className="content">
        <Routes>
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Home />} />
        </Routes>
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