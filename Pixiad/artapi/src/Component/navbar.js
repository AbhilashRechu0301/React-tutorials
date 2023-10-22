//import './Navbar.css';
import React from "react";
import {BrowserRouter as Router, Link,  Routes, Route} from 'react-router-dom';
const Arthome = React.lazy(() => import('../Container/ArtMuseumHome'));
const Home = React.lazy(() => import('../Container/Home'));
//const SearchResults = React.lazy(() => import("../Container/Search Results"));
//const Single = React.lazy(() => import("../Container/Single"));

function Navbar(){
   

    return(
          <div>
            <React.Suspense fallback={<>Loading...</>}>
            <Router>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                       <Link className="navbar-brand" href="#ArtMuseum" to="/">ArtMuseum</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
   
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home">Home</Link>
                                </li>
                                  {/*<li className="nav-item">
                                    <Link className="nav-link" to="/SearchResults">SearchResults</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Single">Single</Link>
    </li>*/}                
                                 
                            </ul>
                            <button className="btn btn-secondary" type="submit" data-toggle="modal" data-target="#login">Log in</button>
                        </div>

                        <div className="modal" id="login">
                         <div className="modal-dialog modal-dialog-centered">
                       <div className="modal-content">

                
                <div className="modal-header">
                    <h4 className="modal-title">Login Here</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>

               
                <div className="modal-body">
                    <input type="text" className="form-control" placeholder="username"></input> <br/><br/>
                    <input type="text" className="form-control" placeholder="password"></input>
                </div>

            
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-dismiss="modal">Login</button>
                </div>

            </div>
        </div>
    </div>

                    </div>
                    
                </nav>
               

            <Routes>
            <Route path="/" element={<Arthome />} />
                <Route path = '/home' element = {<Home></Home>}></Route>
                {/*<Route path = '/SearchResults' element = {<SearchResults></SearchResults>}></Route>
                <Route path = '/Single' element = {<Single></Single>}></Route>*/}
            </Routes>
            </Router>
            </React.Suspense>
          </div>


    )
}
export default Navbar;