import './App.css';
import Header from './Header';
import Body from './Body';
import About from './About';
import Donarform from './Donarform';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function Application() {
return (
<div> 
<Header/>
<br></br>
<Router>
  <Routes><Route exact path='/' element={< Body />}></Route>
  <Route exact path='/about' element={< About />}></Route>
  <Route exact path='/form' element={< Donarform />}></Route>
</Routes>
</Router>
  <br></br>
  <Footer/>  
  </div>
  );
}
export default Application;