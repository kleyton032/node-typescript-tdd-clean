import { ClassValidatorFields } from "../../class-validator-fields";
import * as libClassValidator from 'class-validator'


class stubClassValidatorFields extends ClassValidatorFields<{ field: string }>{ }


describe('ClassValidatorFields unit tests', () => {

  it("Should initialize erros and validatedData variables with null", () => {
    const sut = new stubClassValidatorFields()
    expect(sut.errors).toBeNull()
    expect(sut.validatedData).toBeNull()
  })

  it("Should validate with erros", () => {
    const spyValidateSync = jest.spyOn(libClassValidator, 'validateSync')
    spyValidateSync.mockReturnValue([
      { property: 'field', constraints: { isRequired: 'test error' } }
    ])
    const sut = new stubClassValidatorFields()
    expect(sut.validate(null)).toBeFalsy()
    expect(spyValidateSync).toHaveBeenCalled()
    expect(sut.validatedData).toBeNull()
    expect(sut.errors).toStrictEqual({ field: ['test error'] })
  })

})
