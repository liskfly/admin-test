import axios from 'axios'


const service = axios.create({
    baseURL: '/mjs',
 // request timeout
    // headers: { 
    //     'Content-type':'application/json'
	// }
  
})
export default service