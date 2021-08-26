import React from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router,} from 'react-router-dom';


function NavBar() {
   
  return (
    <nav>
    <Router>
      <Link to="/yourworkouts">Your Workouts</Link>
      <Link to="/workoutslist">Workouts </Link>
    </Router>
    </nav>
  );
}

export default NavBar;