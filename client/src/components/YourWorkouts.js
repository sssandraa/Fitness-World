import React, {useState} from "react";
import WorkoutCard from "./WorkoutCard";

function YourWorkouts({workouts, handleClick}) {

    return (
        <div>
            {
            workouts.map(workout => (
              <WorkoutCard key={workout.id} workout={workout} handleClick={handleClick}/>
            ))
            }
        </div>
    )
}

export default YourWorkouts;