import axios from 'axios'
import { METHOD } from './constant'

export const apiGetNonAuth = (URL, params) =>
  axios({
    url: URL,
    method: METHOD.GET,
    params
  })
export const apiGetAuth = (URL, params) =>
  axios({
    url: URL,
    method: METHOD.GET,
    params,
    headers: {
      Authorization: ''
    }
  })

export const apiPostNonAuth = (URL, data) =>
  axios({
    url: URL,
    method: METHOD.POST,
    data
  })
export const apiPostAuth = (URL, data) =>
  axios({
    url: URL,
    method: METHOD.POST,
    data,
    headers: {
      Authorization: ''
    }
  })

export const apiPutNonAuth = (URL, data) =>
  axios({
    url: URL,
    method: METHOD.PUT,
    data
  })

export const apiDeleteNonAuth = (URL, params) =>
  axios({
    url: URL,
    method: METHOD.DELETE,
    params
  })
