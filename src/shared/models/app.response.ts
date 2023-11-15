export class AppResponse<T> {
  public message = 'success'
  public response?: T

  constructor (init?: Partial<AppResponse<T>>) {
    Object.assign(this, init)
  }
}

export class AppDataTableResponse<T> extends AppResponse<T> {
  public totalRecords = 0
  public filteredRecords = 0

  constructor (init?: Partial<AppDataTableResponse<T>>) {
    super()

    Object.assign(this, init)
  }
}
