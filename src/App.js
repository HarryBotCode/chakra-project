
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";


function App() {


  return (
    <div className='App'>
      
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
