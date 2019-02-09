import React from 'react'
import {act} from 'react-dom/test-utils'
import sinon from 'sinon'
import {expect} from 'chai'
import {shallow, mount} from 'enzyme'
import {SessionRoundRest} from '../SessionRoundRest'
import {Countdown} from '../../Countdown'
const moment = require('moment')

describe('<SessionRoundRest/>', () => {

  let clock
  let props = null
  beforeEach(() => {
    const now = moment()
    props = {
      finishAt: moment(now).add(5, 'seconds').valueOf(),
      onRoundRestCompleted: sinon.spy()
    }
    clock = sinon.useFakeTimers({now: now.valueOf()})
  })

  afterEach(() => {
    clock.restore()
    props = null
  })

  it('renders', () => {
    const wrapper = shallow(<SessionRoundRest {...props}/>)
    expect(wrapper.find(Countdown)).to.have.lengthOf(1)
  })

  it('calls onRoundRestCompleted() when countdown is finished', () => {
    const wrapper = mount(<SessionRoundRest {...props}/>)
    expect(props.onRoundRestCompleted.called).to.be.false

    // Assume 7 seconds have passed
    act(() => { clock.tick(7 * 1000) })
    expect(props.onRoundRestCompleted.calledOnce).to.be.true
  })
})
