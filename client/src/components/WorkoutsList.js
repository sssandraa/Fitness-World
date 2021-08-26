import WorkoutCard from "./WorkoutCard"

function WorkoutsList({workouts, handleClick}) {
  return (
    <div>
       <h1>Choose Your Workouts</h1>
        {
          workouts.map(workout => (
            <WorkoutCard key={workout.id} workout={workout} handleClick={handleClick}/>
          ))
        }     
    </div>
  );
}

export default WorkoutsList;

