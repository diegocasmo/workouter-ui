import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getWorkout} from '../state/workout/workout-action-creators'
import {getWorkout as getWorkoutSelector, isLoading} from '../state/workout/workout-selectors'
import {Loading} from '../components/Loading'
import {WorkoutSetup} from '../components/WorkoutDetail/WorkoutSetup'

export class Workout extends Component {

  componentDidMount() {
    this.props.handleGetWorkout(this.props.workoutId)
  }

  render() {
    return (
      <div>
        <h1>Workout Details</h1>
        {this.props.isLoading
          ? <Loading/>
          : <WorkoutSetup {...this.props.workout}/>}
      </div>
    )
  }
}

const mapStateToProps = (state, {match}) => {
  const workoutId = Number(match.params.workoutId)
  return {
    workoutId,
    workout: getWorkoutSelector(state, workoutId),
    isLoading: isLoading(state)
  }
}

const mapDispatchToProps = dispatch => ({
  handleGetWorkout(id) {
    dispatch(getWorkout(id))
  }
})

export const WorkoutFromStore = connect(
  mapStateToProps, mapDispatchToProps
)(Workout)
