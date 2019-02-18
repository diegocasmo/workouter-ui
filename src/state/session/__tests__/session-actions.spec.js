import {expect} from 'chai'
import {SESSION} from '../session-actions'

describe('SESSION', () => {

  it('correctly defines all actions', () => {
    const actions = {
      'FETCH_INIT'    : 'SESSION__FETCH_INIT',
      'FETCH_SUCCESS' : 'SESSION__FETCH_SUCCESS',
      'FETCH_FAILURE' : 'SESSION__FETCH_FAILURE'
    }
    Object.keys(actions).forEach((k) => expect(SESSION[k]).to.equal(actions[k]))
  })
})
