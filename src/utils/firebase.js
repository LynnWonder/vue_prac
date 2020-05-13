/// sdk 调用方式
// import firebase from 'firebase'
//
// firebase.initializeApp({
//   apiKey: 'AIzaSyDn8PqsiK_H0gWK37y933UXfdmbw5ukHYQ',
//   authDomain: 'vue-prac-1b976.firebaseapp.com',
//   databaseURL: 'https://vue-prac-1b976.firebaseio.com',
//   projectId: 'vue-prac-1b976',
//   storageBucket: 'vue-prac-1b976.appspot.com',
//   messagingSenderId: '256901750557',
//   appId: '1:256901750557:web:b7671c9708a8e86adf0bf4',
//   measurementId: 'G-HF4PJPEEYR',
// })
//
// export default firebase.functions()
import axios from 'axios'

const _initialOptions = {
  baseURL: 'https://us-central1-vue-prac-1b976.cloudfunctions.net/helloWorld',
  // withCredentials: true,
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
