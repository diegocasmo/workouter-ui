import React from 'react'
import {Factory} from 'rosie'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import {ExerciseList} from '../List'
import {ExerciseItem} from '../Item'

describe('<ExerciseList/>', () => {

  let props = null
  beforeEach(() => {
    props = {
      exercises: Factory.buildList('exercise', 2),
      handleDeleteExercise: () => {}
    }
  })

  it('renders', () => {
    const wrapper = shallow(<ExerciseList {...props}/>)
    expect(wrapper.find(ExerciseItem)).to.have.lengthOf(props.exercises.length)
  })

  it('renders a message when there are no exercises', () => {
    props.exercises = []
    const wrapper = shallow(<ExerciseList {...props}/>)
    expect(wrapper.find(ExerciseItem)).to.have.lengthOf(0)
    expect(wrapper.find('p').text()).to.be.equal('There are no exercises to show')
  })
})