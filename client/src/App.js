import React, {useEffect, useState} from 'react';

import WorkoutsList from './components/WorkoutsList';
import YourWorkouts from './components/YourWorkouts';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Login from './components/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);

  const [workouts, setWorkouts] = useState([])
  const [myWorkouts, setMyWorkouts] = useState([])

  const selectWorkout = (workout) => {
    if(myWorkouts.includes(workout)){
      alert('Already Signed Up for This Workout!')
    }else{
    const myWorkoutsList = [...myWorkouts, workout]
    setMyWorkouts(myWorkoutsList)
  }}

  const removeWorkout = (workout) => {
    const myWorkoutsList = [...myWorkouts].filter((myWorkout) => myWorkout.id !== workout.id)
    setMyWorkouts(myWorkoutsList)
  }

  useEffect(() => {
    fetch("http://localhost:3000/workouts")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        setWorkouts(data);
      });
}, []);

useEffect(() => {
  // auto-login
  fetch("/me").then((r) => {
    if (r.ok) {
      r.json().then((user) => setUser(user));
    }
  });
}, []);

if (!user) return <Login onLogin={setUser} />;

return(
  
  <div>
    <NavBar user={user} setUser={setUser}/>
    <Header />
    <Router>
      <Switch>
        <Route exact path="/yourworkouts" component={
          () => <YourWorkouts workouts={myWorkouts} handleClick={removeWorkout}/>}/>
      <Route exact path="/workoutslist" component={
          () => <WorkoutsList workouts={workouts} handleClick={selectWorkout} />}/>
          <Route exact path="/login" component={ () => <Login onLogin={setUser}/> }/>
      </Switch>
    </Router>
  </div>
)
}
export default App;
