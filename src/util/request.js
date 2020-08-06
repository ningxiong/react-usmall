import axios from 'axios'
import qs from 'qs'
axios.interceptors.response.use(res=>{
    console.log(res)
    return res
})


export const requestLogin = (data)=>{
    return axios({
        url:'/api/login',
        method:'POST',
        data:qs.stringify(data)
    })
}


export const requestReg = (data)=>{
    return axios({
        url:'/api/register',
        method:'POST',
        data:qs.stringify(data)
    })
}