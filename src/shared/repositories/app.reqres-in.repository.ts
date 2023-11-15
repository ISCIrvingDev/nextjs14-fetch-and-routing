import axios from 'axios'
import { AppInterceptors } from './app.interceptors'

// const jwt = sessionStorage.getItem('r-token') ? sessionStorage.getItem('r-token') : '"r-token" was not found'
// const jwt = 'Un token de prueba'

export const AppReqResInRepository = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DYNAMIC_REQ_RES_IN_REPOSITORY,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
    // Authorization: `Bearer ${jwt}`
  },
  timeout: 10000
})

AppReqResInRepository.interceptors.request.use(
  AppInterceptors.req,
  AppInterceptors.reqErr
)

AppReqResInRepository.interceptors.response.use(
  AppInterceptors.res,
  AppInterceptors.resErr
)
