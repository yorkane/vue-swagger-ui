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

export const apiDocs = (params) => {
  return axios.get('https://petstore.swagger.io/v2/swagger.json', {params: params})
}

export const test = (method, url, params) => {
  return axios({
    method: method,
    url: url,
    data: params
  })
}
