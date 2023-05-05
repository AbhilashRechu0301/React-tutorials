import {BrowserRouter as Router, Link,  Switch,  Route} from 'react-router-dom';
import Home from '../containerV5/Home';
import Login from '../containerV5/Login';
import Registration from '../containerV5/Registration';
import './Navbar.css'

function NavbarV5(){


    return(

        <div>
         <Router>
          <Link  className = "linkname" to ='/Home'>Home</Link>
          <Link  className = "linkname" to ='/Login'>Login</Link>
          <Link  className = "linkname" to ='/Registration'>Registration</Link>
         < Switch>
          <Route path = '/Home' > <Home></Home></Route>
          <Route path = '/Login'> <Login></Login></Route>
          <Route path = '/Registration'> <Registration></Registration></Route>
         </ Switch>


         </Router>
        
        </div>
    )
}
export default NavbarV5;