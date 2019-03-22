import React from 'react'
import {Countdown} from '../../Time/Countdown'
import {WorkoutExerciseItem} from '../../Workout/View/ExerciseItem'

export const SessionExerciseRest = ({nextExercise, finishAt, onExerciseRestCompleted}) => (
  <>
    <span>Coming up: <WorkoutExerciseItem {...nextExercise}/></span>
    <Countdown
      finishAt={finishAt}
      onCountdownCompleted={onExerciseRestCompleted}/>
  </>
)