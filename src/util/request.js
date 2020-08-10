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

export const requestBanner = ()=>{
    return axios({
        url:'/api/getbanner',
        method:'get',
    })
}

export const requestGoods = ()=>{
    return axios({
        url:'/api/getindexgoods',
        method:'get',
    })
}

export const requestDetail = (params)=>{
    return axios({
        url:'/api/getgoodsinfo',
        method:'get',
        params
    })
}

export const requestFenlei = ()=>{
    return axios({
        url:'/api/getcatetree',
        method:'get',
    })
}


export const requestFenleiDetail = (params)=>{
    return axios({
        url:'/api/getgoods',
        method:'get',
        params
    })
}


export const requestShopCar = (params)=>{
    return axios({
        url:'/api/cartlist',
        method:'get',
        params
    })
}

export const requestShopCarAdd = (data)=>{
    return axios({
        url:'/api/cartadd',
        method:'post',
        data:qs.stringify(data)
    })
}

export const requestShopCarEdit = (data)=>{
    return axios({
        url:'/api/cartedit',
        method:'post',
        data:qs.stringify(data)
    })
}
