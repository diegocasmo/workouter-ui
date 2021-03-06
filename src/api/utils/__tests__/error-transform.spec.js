import { expect } from 'chai'
import { transformYupToFormikError } from '../error-transform'
import { string, object } from 'yup'

it('transformYupToFormikError()', () => {
  const errorMsg = 'Name is required'
  const Schema = object().shape({
    name: string().required(errorMsg),
  })

  return Schema.validate({})
    .then(() => expect(true).to.be.false) // force catch to always be executed
    .catch(err => {
      expect(err.name).to.be.equal('ValidationError')
      expect(transformYupToFormikError(err).name).to.be.equal(errorMsg)
    })
})
