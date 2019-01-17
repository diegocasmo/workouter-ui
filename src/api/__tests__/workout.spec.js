import db, {clearDb} from '../../db-mock'
import {Factory} from 'rosie'
import faker from 'faker'
import {expect} from 'chai'
import {fetchWorkouts, validateWorkout, createWorkout} from '../workout'

describe('Workout', () => {

  beforeEach(() => (db.workouts.bulkAdd(Factory.buildList('workout', 3))))

  afterEach(() => (clearDb(db)))

  it('fetchWorkouts()', () => {
    return fetchWorkouts(db)
      .then((res) => expect(res.length).to.be.equal(3))
  })

  describe('validateWorkout()', () => {

    // Each of the following attributes are required for a workout
    [
      'name',
      'rounds',
      'restTimePerRound',
      'restTimePerExercise',
      'exercises',
      'exercises[0].name',
      'exercises[0].quantity',
      'exercises[0].unit'
    ].forEach((x) => {
      it(`does not allow to create a workout without '${x}'`, () => {
        const attrs = Factory.build('workout', {}, {except: ['id', x]})
        return validateWorkout(attrs)
          .then(() => expect(true).to.be.false) // force catch to always be executed
          .catch((errors) => expect(errors[x]).to.be.a('string'))
      })
    })

    it("supports a null 'weight'", () => {
      // Create a workout which contains exercises weight set to null
      let withNullWeight = Factory.build('workout', {}, {except: ['id']})
      withNullWeight.exercises.forEach((x) => x.weight = null)
      return validateWorkout(withNullWeight)
        .then((res) => expect(res).to.be.eql(withNullWeight))
    })

    it("supports a 'number' weight", () => {
      // Create a workout which contains exercises weight set to a number
      let withNumberWeight = Factory.build('workout', {}, {except: ['id']})
      withNumberWeight.exercises.forEach((x) => x.weight = faker.random.number())
      return validateWorkout(withNumberWeight)
        .then((res) => expect(res).to.be.eql(withNumberWeight))
    })

    it('returns the workout if valid', () => {
      const attrs = Factory.build('workout', {}, {except: ['id']})
      return validateWorkout(attrs)
        .then((res) => expect(res).to.be.eql(attrs))
    })
  })

  describe('createWorkout()', () => {

    it('creates a valid workout in DB', () => {
      const attrs = Factory.build('workout', {}, {except: ['id']})
      return createWorkout(attrs, db)
        .then((res) => expect(attrs).to.be.eql(res))
    })

    it('doesn\'t allow to create an workout with invalid attrs', () => {
      const invalidAttrs = Factory.build('workout', {}, {except: ['id', 'name']})
      return createWorkout(invalidAttrs, db)
        .then(() => expect(true).to.be.false) // force catch to always be executed
        .catch((errors) => expect(errors.name).to.be.equal('Name is required'))
    })
  })
})