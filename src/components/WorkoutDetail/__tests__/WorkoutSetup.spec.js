import React from 'react'
import {Factory} from 'rosie'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import {WorkoutSetup} from '../WorkoutSetup'

describe('<WorkoutSetup/>', () => {

  let props = null
  beforeEach(() => {
    props = Factory.build('workout')
  })

  it('renders', () => {
    const wrapper = shallow(<WorkoutSetup {...props}/>)
    expect(wrapper.find('.wrk-workout-setup__name').text()).to.be.equal(`Workout: ${props.name}`)
    expect(wrapper.find('.wrk-workout-setup__rounds').text()).to.be.equal(`Rounds: ${props.rounds}`)
    expect(wrapper.find('.wrk-workout-setup__rest-time-per-round').text())
      .to.be.equal(`Rest time per round: ${props.restTimePerRound} second(s)`)
    expect(wrapper.find('.wrk-workout-setup__rest-time-per-exercise').text())
      .to.be.equal(`Rest time per exercise: ${props.restTimePerExercise} second(s)`)
  })
})
