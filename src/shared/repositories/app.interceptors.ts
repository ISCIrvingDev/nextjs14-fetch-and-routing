import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

export const AppInterceptors = {
  req: (config: InternalAxiosRequestConfig<unknown>) => {
    // console.log('Configuracion del request: ', config)

    return config
  },
  reqErr: (err: unknown) => {
    // console.log('Request error: ', err)

    return Promise.reject(err)
  },
  res: (res: AxiosResponse<unknown, unknown>) => { // Status == 2xx
    // console.log('Respuesta: ', res)

    return res
  },
  resErr: (err: AxiosError) => { // Status != 2xx
    // console.log('Response error: ', err)

    return Promise.reject(err.response)
  }
}
