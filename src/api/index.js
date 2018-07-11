import axios from '../axios'

export const resources = () => {
  return axios.get('/swagger-resources', {params: {}})
}

export const securityConfiguration = () => {
  return axios.get('/swagger-resources/configuration/security', {params: {}})
}

export const uiConfiguration = () => {
  return axios.get('/swagger-resources/configuration/ui', {params: {}})
}

export const apiDocs = (params, url) => {
  return axios.get(url || 'http://192.168.56.100/app/v1/api/approot.model.sys_organization', {params: params})
}

export const test = (method, url, params) => {
  return axios({
    method: method,
    url: url,
    data: params
  })
}
