import axios from 'axios'
import config from './config'
class API {
  getList (param) {
    console.log(config)
    config.Method = 'get'
    config.Data = param
    return axios.get('/topics', config)
  }
  getCurrency (param) {
    console.log(config)
    config.Method = 'get'
    config.Data = param
    return axios.get('/Router', config)
  }
}

export default API
