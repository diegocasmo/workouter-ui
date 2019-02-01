import React from 'react'
import {Factory} from 'rosie'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import {WorkoutExerciseList} from '../WorkoutExerciseList'

describe('<WorkoutExerciseList/>', () => {

  let props = null
  beforeEach(() => {
    props = {
      workout: Factory.build('workout')
    }
  })

  it('renders', () => {
    const wrapper = shallow(<WorkoutExerciseList {...props}/>)
    expect(true).to.be.true
  })
})
