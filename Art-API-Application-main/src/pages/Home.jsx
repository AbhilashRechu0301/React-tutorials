import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="Welcome">
      <style>
        {`
          .Welcome {
            font-size: 24px;
            text-align: center;
            margin-top: 100px;
          }

          .Welcome h1 {
            margin-bottom: 20px;
          }

          .Welcome ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
          }

          .Welcome li {
            margin-right: 20px;
          }

          .Welcome li:last-child {
            margin-right: 0;
          }

          .Welcome a {
            color: #333;
            text-decoration: none;
            font-size: 18px;
            padding: 14px 16px;
            display: block;
            border: 1px solid #333;
            border-radius: 5px;
          }

          .Welcome a:hover {
            background-color: #333;
            color: white;
          }
        `}
      </style>
      <h1>Welcome to the Homepage of ART API</h1>
      <ul>
        <li>
          <Link to="/home1">Home</Link>
        </li>
        <li>
          <Link to="/single">Single</Link>
        </li>
        <li>
          <Link to="/searchresults">SearchResults</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
