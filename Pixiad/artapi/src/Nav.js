import React from "react";
import {BrowserRouter as Router, Link,  Routes, Route} from 'react-router-dom';
import Hom from "./Hom";
import Sing from "./Sing";
import Searc from "./Searc";
import Arthome from "./ArtHome";
//import './Nav.css'

function Nav(){

return (
        <>
        
        <Router>
        <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" href="#ArtMuseum" to="/">ArtMuseum</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
   
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Hom">Hom</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Searc">Searc</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Sing">Sing</Link>
                                </li>
                                <li className="nav-item">
                                
                                </li>

                            </ul>
                            
                            <button className="btn btn-success" type="submit">Search</button>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Arthome />} />
                    <Route path="/Hom" element={<Hom></Hom>}></Route>
                    <Route path="/Sing" element={<Sing></Sing>}></Route>
                    <Route path="/Searc" element={<Searc></Searc>}></Route>
                    
                </Routes>
            </Router>
           
        </>

)
}
export default Nav;