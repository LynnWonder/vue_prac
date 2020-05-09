import axios from 'axios'

const _initialOptions = {
  baseURL: process.env.VUE_APP_HOST,
  withCredentials: true,
}

export const instance = axios.create(_initialOptions)

instance.interceptors.response.use(
  function({ data }) {
    return Promise.resolve(data.data)
  },
  function(error) {
    if (error.response) {
      if (error.response.status === 401) {
        console.info('login error')
      } else {
        console.info('globalError')
      }
      return Promise.reject(error.response.data)
    } else {
      let message = (typeof error === 'object' ? error.message : error) || ''
      if (message.startsWith('timeout of ')) {
        message = '请求超时'
      }

      if (message.startsWith('Network Error')) {
        message = '网络错误'
      }
      return Promise.reject(message)
    }
  }
)
