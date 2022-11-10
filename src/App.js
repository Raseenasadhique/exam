
import './App.css';
import Home from './components/Home';
import Sign from './components/Sign';
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";


function App() {
  return (
    <div className="App">
    
     <Router>
     <Routes>
          <Route path="/Home"  element={<Home/>}>
         
          </Route>
          <Route path="/" exact  element={<Sign/>}>
           
          </Route>
      </Routes>
      </Router>
   
    </div>
  );
}

export default App;
