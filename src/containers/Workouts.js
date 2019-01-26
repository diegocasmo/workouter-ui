import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchWorkouts, deleteWorkout} from '../state/workout/workout-action-creators'
import {getWorkouts, isLoading} from '../state/workout/workout-selectors'
import {Loading} from '../components/Loading'
import {WorkoutList} from '../components/WorkoutList/WorkoutList'

export class Workouts extends Component {
  componentDidMount() {
    this.props.handleFetchWorkouts()
  }

  render() {
    return (
      <div>
        <h1>Workouts</h1>
        {this.props.isLoading ?
          <Loading/> :
          <WorkoutList
            handleDeleteWorkout={this.props.handleDeleteWorkout}
            workouts={this.props.workouts}/>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  workouts: getWorkouts(state),
  isLoading: isLoading(state),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleFetchWorkouts() {
    dispatch(fetchWorkouts())
  },
  handleDeleteWorkout(id) {
    dispatch(deleteWorkout(id))
  },
})

export const WorkoutsFromStore = connect(
  mapStateToProps, mapDispatchToProps
)(Workouts)
