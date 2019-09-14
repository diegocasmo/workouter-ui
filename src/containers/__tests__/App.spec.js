import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import { reducers } from '../../test-utils/store-mock'
import { App } from '../App'
import { Factory } from 'rosie'
import { UnauthenticatedApp } from '../UnauthenticatedApp'
import { AuthenticatedApp } from '../AuthenticatedApp'

const mockStore = configureMockStore([])

describe('<App/>', () => {
  it('renders authenticated app', () => {
    const wrapper = mount(
      <Provider store={mockStore(reducers)}>
        <App user={Factory.build('user')} />
      </Provider>
    )

    expect(wrapper.find(UnauthenticatedApp)).to.have.lengthOf(0)
    expect(wrapper.find(AuthenticatedApp)).to.have.lengthOf(1)
  })

  it('renders unauthenticated app', () => {
    const wrapper = mount(
      <Provider store={mockStore(reducers)}>
        <App />
      </Provider>
    )

    expect(wrapper.find(UnauthenticatedApp)).to.have.lengthOf(1)
    expect(wrapper.find(AuthenticatedApp)).to.have.lengthOf(0)
  })
})
