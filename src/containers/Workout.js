import React, {useEffect} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getWorkout, deleteWorkout} from '../state/workout/workout-action-creators'
import {getWorkout as getWorkoutSelector, isLoading} from '../state/workout/workout-selectors'
import {Loading} from '../components/Loading'
import {WorkoutSetup} from '../components/WorkoutDetail/WorkoutSetup'
import {WorkoutExerciseList} from '../components/WorkoutDetail/WorkoutExerciseList'
import {WorkoutActions} from '../components/WorkoutActions'

export const Workout = ({workoutId, workout, isLoading, getWorkout, deleteWorkout}) => {
  useEffect(() => { getWorkout(workoutId) }, [])

  return (
    <>
      <h1>Workout Details</h1>
      {isLoading
        ? <Loading/>
        : workout && <div>
            <WorkoutSetup {...workout}/>
            <WorkoutExerciseList {...workout}/>
            <WorkoutActions
              workout={workout}
              handleDeleteWorkout={deleteWorkout}/>
          </div>}
    </>
  )
}

const mapStateToProps = (state, {match}) => {
  const workoutId = Number(match.params.workoutId)
  return {
    workoutId,
    workout: getWorkoutSelector(state, workoutId),
    isLoading: isLoading(state)
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({getWorkout, deleteWorkout}, dispatch)
)

export const WorkoutFromStore = connect(
  mapStateToProps, mapDispatchToProps
)(Workout)
