import {BrowserRouter as Router, Link,  Routes, Route} from 'react-router-dom';
import Home from '../containersV6/Home';
import Login from '../containersV6/Login';
import Registration from '../containersV6/Registration';
import './Navbar.css'

function Navbar(){


    return(

        <div>
         <Router>
          <Link  className = "linkname" to ='/Home'>Home</Link>
          <Link  className = "linkname" to ='/Login'>Login</Link>
          <Link  className = "linkname" to ='/Registration'>Registration</Link>
         <Routes>
          <Route path = '/Home' element = {<Home></Home>}></Route>
          <Route path = '/Login' element = {<Login></Login>}></Route>
          <Route path = '/Registration' element = {<Registration></Registration>}></Route>
         </Routes>


         </Router>
        
        </div>
    )
}
export default Navbar;