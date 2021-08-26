import React from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router,} from 'react-router-dom';

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
   
  return (
    <nav>
  
      <Link to="/yourworkouts">Your Workouts</Link>
      <Link to="/workoutslist">Workouts </Link>
      <Link to="/reviews">Reviews</Link>

    </nav>
  );
  }
export default NavBar;