import React from 'react'
import {Factory} from 'rosie'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import {WorkoutExerciseItem} from '../WorkoutExerciseItem'

describe('<WorkoutExerciseItem/>', () => {

  let props = null
  beforeEach(() => {
    props = {
      workout: Factory.build('workout')
    }
  })

  it('renders', () => {
    const wrapper = shallow(<WorkoutExerciseItem {...props}/>)
    expect(true).to.be.true
  })
})
