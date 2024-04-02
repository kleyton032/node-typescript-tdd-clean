import { validate as uuidValidate} from 'uuid'
import { Entity } from '../../entity'


type StubProps = {
  prop1: string,
  prop2: number,

}

class StubEntity extends Entity<StubProps> {}

describe('Abstract Class Entity unit tests', () => {
  it('Should set props and id', () => {
    const props = {prop1: 'value1', prop2: 10}
    const entity = new StubEntity(props)

    expect(entity.props).toStrictEqual(props)
    expect(entity._id).not.toBeNull()
    expect(uuidValidate(entity._id)).toBeTruthy()
  })

  it('Should accept a valid uuid', () => {
    const props = {prop1: 'value1', prop2: 10}
    const id = 'efe5a502-85fa-4e01-8929-a5b862d85867'
    const entity = new StubEntity(props, id)

    expect(uuidValidate(entity._id)).toBeTruthy()
    expect(entity._id).toBe(id)
  })


  it('Should convert a entity to a Javascript Object', () => {
    const props = {prop1: 'value1', prop2: 10}
    const id = 'efe5a502-85fa-4e01-8929-a5b862d85867'
    const entity = new StubEntity(props, id)

    expect(entity.toJSON()).toStrictEqual({
      id,
      ...props
    })
  })


})
