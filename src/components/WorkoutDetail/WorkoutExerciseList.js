import React from 'react'
import {WorkoutExerciseItem} from './WorkoutExerciseItem'

export const WorkoutExerciseList = ({workout={}}) => (
  <div>
    <h3 className="wkr-workout-exercise-list__title">Exercises:</h3>
    <ul>
      {workout.exercises && workout.exercises.length > 0 &&
        workout.exercises.map((x, i) => <WorkoutExerciseItem key={i} {...x}/>)}
    </ul>
  </div>
)
