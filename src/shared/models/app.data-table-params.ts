type columns = 'id'
type dirs = 'desc' | 'asc'

export interface AppIOrderBy {
   column: columns
   dir: dirs
}

export interface AppIDataTableParams {
   orderBy: AppIOrderBy[]
  skip: number
  take: number
  search?: string
}
