import React from 'react'

export const WorkoutSetup = ({
  name,
  rounds,
  restTimePerRound,
  restTimePerExercise
}) => (
  <div className="wkr-workout-setup">
    <p className="wrk-workout-setup__name">Workout: {name}</p>
    <p className="wrk-workout-setup__rounds">Rounds: {rounds}</p>
    <p className="wrk-workout-setup__rest-time-per-round">
      Rest time per round: {restTimePerRound} second(s)
    </p>
    <p className="wrk-workout-setup__rest-time-per-exercise">
      Rest time per exercise: {restTimePerExercise} second(s)
    </p>
  </div>
)
