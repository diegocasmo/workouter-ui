import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {WorkoutsFromStore} from '../containers/Workouts'
import {WorkoutFromStore} from '../containers/Workout'
import {NewWorkoutFromStore} from '../containers/NewWorkout'
import {UpdateWorkoutFromStore} from '../containers/UpdateWorkout'
import {ExercisesFromStore} from '../containers/Exercises'
import {NewExerciseFromStore} from '../containers/NewExercise'
import {UpdateExerciseFromStore} from '../containers/UpdateExercise'
import {NewSessionFromStore} from '../containers/NewSession'

export const Routes = () => (
  <Switch>
    <Route exact path="/(|workouts)" component={WorkoutsFromStore}/>
    <Route exact path="/workouts/new" component={NewWorkoutFromStore}/>
    <Route exact path="/workouts/update/:workoutId" component={UpdateWorkoutFromStore}/>
    <Route exact path="/workouts/:workoutId" component={WorkoutFromStore}/>
    <Route exact path="/exercises" component={ExercisesFromStore}/>
    <Route exact path="/exercises/new" component={NewExerciseFromStore}/>
    <Route exact path="/exercises/update/:exerciseId" component={UpdateExerciseFromStore}/>
    <Route exact path="/sessions/new/:workoutId" component={NewSessionFromStore}/>
  </Switch>
)
