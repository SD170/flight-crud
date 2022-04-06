import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import ListFlights from "./components/ListFlights";

const FlightRoutes = (): JSX.Element => {
  return (
    <React.Fragment>
      <Router>
        <div className="ui menu">
          <Link to="/" className="active item">
            Home
          </Link>
          {/* <a className="item">Messages</a>
            <a className="item">Friends</a>
            <div className="right menu">
            <a className="ui item">Logout</a>
            </div> */}
        </div>
        <div>
          <Routes>
            <Route path="/" element={<ListFlights />} />
            <Route path="/home" element={<ListFlights />} />
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route
              path="/dashboard"
              element={<Dashboard toggleRouter={toggleRouter} />}
            /> */}
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  );
};

export default FlightRoutes;
