import axios from 'axios'


const service = axios.create({
    baseURL: '/cm',
    // timeout: 2*6000, 
})
export default service