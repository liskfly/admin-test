import axios from 'axios'


const service = axios.create({
    baseURL: '/cp',
  
})
export default service