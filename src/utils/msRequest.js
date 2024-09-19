import axios from 'axios'


const service = axios.create({
    baseURL: '/ms',
  
})
export default service