import { UserDataBuilder } from "@/users/domain/testing/helpers/user-data-builder"
import { UserValidator, UserValidatorFactory } from "../../user.validator"
import { UserProps } from "@/users/domain/entities/user.entity"

let sut: UserValidator
let props: UserProps

describe('UserValidator unit tests', () => {
  beforeEach(() => {
    sut = UserValidatorFactory.create()
    props = UserDataBuilder({})
  })
  describe('Name field', () => {
    it("Invalidation cases for name field", () => {
      let isValid = sut.validate(null as any)
      expect(isValid).toBeFalsy()
      expect(sut.errors['name']).toStrictEqual(
        [
          'name should not be empty',
          'name must be a string',
          'name must be shorter than or equal to 255 characters'
        ])

      isValid = sut.validate({ ...props, name: '' })
      expect(isValid).toBeFalsy()
      expect(sut.errors['name']).toStrictEqual(['name should not be empty'])

      isValid = sut.validate({ ...props, name: 10 as any })
      expect(isValid).toBeFalsy()
      expect(sut.errors['name']).toStrictEqual([
        'name must be a string',
        'name must be shorter than or equal to 255 characters',
      ])

      isValid = sut.validate({ ...props, name: 'a'.repeat(256) })
      expect(isValid).toBeFalsy()
      expect(sut.errors['name']).toStrictEqual([
        'name must be shorter than or equal to 255 characters',
      ])
    })
  })
})
