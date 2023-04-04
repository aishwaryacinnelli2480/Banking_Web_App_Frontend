import axios from 'axios';
import { getToken } from '../authentication';

export const BASE_URL='http://localhost:9090';
export const myAxios=axios.create({
    baseURL:BASE_URL
});

export const privateAxios=axios.create({
    baseURL:BASE_URL
})
privateAxios.interceptors.request.use(config=>{
  const token =  getToken()
console.log(token)
  if(token){
    config.headers.common.Authorization=`Bearer ${token}`
    return config
  }
}, error=>Promise.reject(error))