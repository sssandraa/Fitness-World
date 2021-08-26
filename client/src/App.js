import React, {useEffect, useState} from 'react';
import WorkoutsList from './WorkoutsList';
import YourWorkouts from './YourWorkouts';
import Header from './Header';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
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
return(
  
  <div>
    <NavBar />
    <Header />
    <Router>
      <Switch>
        <Route exact path="/yourworkouts" component={
          () => <YourWorkouts workouts={myWorkouts} handleClick={removeWorkout}/>}/>
      <Route exact path="/workoutslist" component={
          () => <WorkoutsList workouts={workouts} handleClick={selectWorkout} />}/>
      </Switch>
    </Router>
  </div>
)
}
export default App;
