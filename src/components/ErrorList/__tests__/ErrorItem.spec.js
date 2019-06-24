import React from 'react'
import sinon from 'sinon'
import faker from 'faker'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import {ErrorItem} from '../ErrorItem'

describe('<ErrorItem/>', () => {

  let props = null
  beforeEach(() => {
    props = {
      index: 1,
      error: faker.lorem.words(),
      removeError: sinon.spy()
    }
  })

  it('renders', () => {
    const wrapper = shallow(<ErrorItem {...props}/>)
    expect(wrapper.find('p').text()).to.be.equal(`${props.error} X`)
    expect(wrapper.find("button[type='button']").text()).to.be.equal('X')
  })

  it('calls removeError() when clicked on the remove button', () => {
    const wrapper = shallow(<ErrorItem {...props}/>)
    expect(props.removeError.called).to.be.false
    wrapper.find("button[type='button']").simulate('click', {preventDefault: () => {}})
    expect(props.removeError.calledOnce).to.be.true
    expect(props.removeError.calledWith(props.index)).to.be.true
  })
})
