import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchExercises, deleteExercise, resetDeleteExercise} from '../state/exercise/exercise-action-creators'
import {getExercises, areExercisesLoading, hasExercisesError} from '../state/exercise/exercise-selectors'
import {Loading} from '../components/Loading'
import {ErrorMsg} from '../components/ErrorMsg'
import {ExerciseList} from '../components/ExerciseList/ExerciseList'

export class Exercises extends Component {
  componentDidMount() {
    this.props.handleFetchExercises()
  }

  componentWillUnmount() {
    this.props.handleResetDeleteExercise()
  }

  renderExercises() {
    if(this.props.areExercisesLoading) {
      return (<Loading/>)
    } else {
      return (
        <ExerciseList
          handleDeleteExercise={this.props.handleDeleteExercise}
          exercises={this.props.exercises}/>
      )
    }
  }

  render() {
    return (
      <div>
        <h1>Exercise</h1>
        {this.props.hasExercisesError ?
          <ErrorMsg msg='Unable to fetch exercises'/> :
          this.renderExercises()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  exercises: getExercises(state),
  areExercisesLoading: areExercisesLoading(state),
  hasExercisesError: hasExercisesError(state)
})

const mapDispatchToProps = dispatch => {
  return {
    handleFetchExercises() {
      dispatch(fetchExercises())
    },
    handleDeleteExercise(id) {
      dispatch(deleteExercise(id))
    },
    handleResetDeleteExercise() {
      dispatch(resetDeleteExercise())
    }
  }
}

export const ExercisesFromStore = connect(
  mapStateToProps, mapDispatchToProps
)(Exercises)
