import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const SearchResults = React.lazy(() => import("pages/SearchResults"));
const Single = React.lazy(() => import("pages/Single"));
const Home1 = React.lazy(() => import("pages/Home1"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <style>
          {`
            nav {
              background-color: #333;
              overflow: hidden;
            }

            nav ul {
              list-style-type: none;
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: center;
            }

            nav li {
              margin-right: 20px;
            }

            nav li:last-child {
              margin-right: 0;
            }

            nav a {
              color: white;
              text-decoration: none;
              font-size: 18px;
              padding: 14px 16px;
              display: block;
            }

            nav a:hover {
              background-color: #ddd;
              color: black;
            }
          `}
        </style>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/single">Single</Link>
            </li>
            <li>
              <Link to="/searchresults">Search Results</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/single" element={<Single />} />
          <Route path="/searchresults" element={<SearchResults />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
