import React from 'react'
import {Factory} from 'rosie'
import sinon from 'sinon'
import {mount} from 'enzyme'
import {expect} from 'chai'
import {Workout} from '../Workout'
import {Loading} from '../../components/Loading'
import {WorkoutSetup} from '../../components/WorkoutDetail/WorkoutSetup'

describe('<Workout>', () => {

  let props
  beforeEach(() => {
    props = {
      workoutId: 6,
      workout: Factory.build('workout', {id: 6}),
      isLoading: false,
      handleGetWorkout: sinon.spy()
    }
  })

  it('renders', () => {
    const wrapper = mount(<Workout {...props}/>)
    expect(wrapper.find(Loading)).to.have.lengthOf(0)
    expect(wrapper.find(WorkoutSetup)).to.have.lengthOf(1)
  })

  it("calls 'handleGetWorkout()' on 'componentDidMount()'", () => {
    expect(props.handleGetWorkout.calledOnce).to.be.false
    const wrapper = mount(<Workout {...props}/>)
    expect(props.handleGetWorkout.calledOnce).to.be.true
    expect(props.handleGetWorkout.calledWith(props.workoutId)).to.be.true
  })

  it('renders <Loading/> when fetching workout', () => {
    props.isLoading = true
    const wrapper = mount(<Workout {...props}/>)
    expect(wrapper.find(Loading)).to.have.lengthOf(1)
    expect(wrapper.find(WorkoutSetup)).to.have.lengthOf(0)
  })
})
