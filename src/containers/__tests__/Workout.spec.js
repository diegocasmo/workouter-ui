import React from 'react'
import {act} from 'react-dom/test-utils'
import {Factory} from 'rosie'
import sinon from 'sinon'
import {mount} from 'enzyme'
import {expect} from 'chai'
import {BrowserRouter as Router} from 'react-router-dom'
import {Workout} from '../Workout'
import {Loading} from '../../components/Loading'
import {WorkoutSetup} from '../../components/WorkoutDetail/WorkoutSetup'
import {WorkoutExerciseList} from '../../components/WorkoutDetail/WorkoutExerciseList'
import {WorkoutActions} from '../../components/WorkoutActions'

describe('<Workout>', () => {

  let props
  beforeEach(() => {
    props = {
      workoutId: 6,
      workout: Factory.build('workout', {id: 6}),
      isLoading: false,
      getWorkout: sinon.spy(),
      deleteWorkout: sinon.spy()
    }
  })

  it('renders', () => {
    const wrapper = mount(<Router><Workout {...props}/></Router>)
    expect(wrapper.find(Loading)).to.have.lengthOf(0)
    expect(wrapper.find(WorkoutSetup)).to.have.lengthOf(1)
    expect(wrapper.find(WorkoutExerciseList)).to.have.lengthOf(1)
    expect(wrapper.find(WorkoutActions)).to.have.lengthOf(1)
  })

  it("calls 'getWorkout()'", () => {
    expect(props.getWorkout.calledOnce).to.be.false
    let wrapper
    act(() => { wrapper = mount(<Router><Workout {...props}/></Router>) })
    expect(props.getWorkout.calledOnce).to.be.true
    expect(props.getWorkout.calledWith(props.workoutId)).to.be.true
  })

  describe('deleteWorkout()', () => {

    afterEach(() => {
      window.confirm.restore()
    })

    it("calls 'deleteWorkout()' when a user attempts to delete a workout", () => {
      const wrapper = mount(<Router><Workout {...props}/></Router>)
      expect(props.deleteWorkout.calledOnce).to.be.false

      // Click on delete item and confirm
      sinon.stub(window, 'confirm').returns(true)
      wrapper.find('.wkr-workout-actions__delete').first().simulate('click', {preventDefault: () => {}})

      // Expect 'deleteWorkout()' to be called with workout id
      expect(props.deleteWorkout.calledOnce).to.be.true
      expect(props.deleteWorkout.calledWith(props.workout.id)).to.be.true
    })
  })

  it('renders <Loading/> when fetching workout', () => {
    props.isLoading = true
    const wrapper = mount(<Router><Workout {...props}/></Router>)
    expect(wrapper.find(Loading)).to.have.lengthOf(1)
    expect(wrapper.find(WorkoutSetup)).to.have.lengthOf(0)
    expect(wrapper.find(WorkoutExerciseList)).to.have.lengthOf(0)
    expect(wrapper.find(WorkoutActions)).to.have.lengthOf(0)
  })
})
