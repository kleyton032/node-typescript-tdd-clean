export type FieldsError = {
  [fields: string]: string[]
}

export interface ValidatorFieldsInterface<PropsValidated> {
  errors: FieldsError
  validatedData: PropsValidated
  validate(data: any): boolean
}
