import React from 'react'
import {Countdown} from '../Countdown'
import {WorkoutExerciseItem} from '../WorkoutDetail/WorkoutExerciseItem'

export const SessionExerciseRest = ({nextExercise, finishAt, onExerciseRestCompleted}) => (
  <>
    <span>Coming up: <WorkoutExerciseItem {...nextExercise}/></span>
    <Countdown
      finishAt={finishAt}
      onCountdownCompleted={onExerciseRestCompleted}/>
  </>
)
