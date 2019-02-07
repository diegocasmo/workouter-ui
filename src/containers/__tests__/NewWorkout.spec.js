import React from 'react'
import {Factory} from 'rosie'
import sinon from 'sinon'
import {expect} from 'chai'
import {mount} from 'enzyme'
import {act} from 'react-dom/test-utils'
import {BrowserRouter as Router} from 'react-router-dom'
import {NewWorkout} from '../NewWorkout'
import {WorkoutForm} from '../../components/WorkoutForm'

describe('<NewWorkout/>', () => {

  let wrapper
  let props
  beforeEach(() => {
    props = {
      exercises: Factory.buildList('exercise', 2),
      isLoading: false,
      history: {
        push: sinon.spy()
      },
      createWorkout: sinon.spy(() => Promise.resolve()),
      fetchExercises: sinon.spy(),
    }
  })

  it('renders', () => {
    act(() => { wrapper = mount(<Router><NewWorkout {...props}/></Router>) })
    expect(props.fetchExercises.calledOnce).to.be.true
    expect(wrapper.find(NewWorkout).length).to.be.equal(1)
    expect(wrapper.find(WorkoutForm)).to.have.lengthOf(1)
  })

  it('can submit a valid form', async () => {
    act(() => { wrapper = mount(<Router><NewWorkout {...props}/></Router>) })

    // Set a valid workout name
    wrapper.find("input[name='name']").simulate('change', {target: {id: 'name', value: 'foo'}})
    wrapper.find('form').simulate('submit')

    wrapper.find('form').simulate('submit')
    await tick()
    wrapper.update()

    // Submit valid workout
    wrapper.find('form').simulate('submit')
    await tick()

    // Expect to be called with the exercise attributes in form
    expect(props.createWorkout.calledOnce).to.be.true
    expect(props.createWorkout.calledWith({
      name: 'foo',
      rounds: 4,
      restTimePerRound: 60,
      restTimePerExercise: 20,
      exercises: [{
        name: props.exercises[0].name,
        quantity: 10,
        quantityUnit: 'reps',
        weight: 0,
        weightUnit: 'Kg'
      }]
    })).to.be.true

    // Expect redirect
    expect(props.history.push.calledOnce).to.be.true
    expect(props.history.push.calledWith('/workouts')).to.be.true
  })
})

function tick() {
  return new Promise(resolve => {
    setTimeout(resolve, 0)
  })
}
