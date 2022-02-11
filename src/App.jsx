import Hero from "./home/Hero.jsx";
import Navbar from './Navbar/Navbar';
import { Routes,Route } from "react-router-dom";
import Blogpage from "./blogpage/index.jsx";

function App() {



  return (


    <div>
      <Navbar />
        
          <Routes>  
          
             <Route exact path="/" element={<Hero/>}/>
             <Route path="/c/:cat/:_id" element={<Blogpage/>} />
          </Routes>
    </div>
  );
}

export default App;
