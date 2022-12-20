
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <div className='App'>
       <Header />
      <Home /> 
   {/* <BrowserRouter>
          <Header />
       <div>
           <Route path='/' exact>
              <Home/>
            </Route>
            <Route path='/cart' exact>
               <Cart/>
            </Route>
         </div>
      
     </BrowserRouter>  */}
     </div>
  );
  }

export default App;
