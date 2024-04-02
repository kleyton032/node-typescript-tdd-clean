export type FieldsError = {
  [fields: string]: string[]
}

export interface ValidatorFieldsInterface<PropsValidated> {
  errors: FieldsError
  validatedData: PropsValidated
  ValidationError(data: any): boolean
}
