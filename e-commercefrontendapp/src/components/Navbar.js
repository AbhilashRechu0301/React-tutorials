import './Navbar.css'
import Home from "../containers/Home";
import Login from "../containers/LoginForm";
import Registration from "../containers/Registration";
import Products from '../containers/Products';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'

function Navbar(){


    return(

        <div>
            <Router>
                <Link className = "link" to = '/Home'>Home</Link>
                <Link className = "link" to = '/Login'>Login</Link>
                <Link className = "link" to = '/Registration'>Registration</Link>
                <Link className = "link" to = '/Products'>Products</Link>

                <Routes>
                    <Route path = '/Home' element={<Home></Home>}></Route>
                    <Route path = '/Login' element={<Login></Login>}></Route>
                    <Route path = '/Registration' element={<Registration></Registration>}></Route>
                    <Route path = '/Products' element={<Products></Products>}></Route>
                </Routes>
            </Router>
           
        </div>
    )
}
export default Navbar;