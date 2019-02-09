import React from 'react'
import {Countdown} from '../Countdown'

export const SessionExerciseRest = ({finishAt, onExerciseRestCompleted}) => (
  <Countdown
    finishAt={finishAt}
    onCountdownComplete={onExerciseRestCompleted}/>
)
