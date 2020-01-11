import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Sign_in from './Components/Sign_in';
import Sign_up from './Components/Sign_up';

function App() {
  return (
    <div className="App">
      
      <header>
        <Navbar />
        <h1>StarFinder Charater Management Site</h1>
        <Sign_in />
        <Sign_up />
      </header>
      <body>
        
        <section>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis asperiores enim nostrum numquam tenetur iusto consequuntur eum iure doloremque nisi. Earum vel repellat modi, eaque pariatur asperiores omnis rem rerum.</p>
        </section>
        <footer>
            <h6>This is the footer</h6>
        </footer>
      </body>
      
    </div>
  );
}

export default App;
