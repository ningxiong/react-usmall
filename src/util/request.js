import axios from 'axios'
import qs from 'qs'
axios.interceptors.response.use(res => {
    return res
})
axios.interceptors.request.use(config => {
    if (config.url === '/login') {
        return config
    }else if(sessionStorage.getItem('islogin')){
        let token = sessionStorage.getItem('token')
        config.headers.authorization = token
        return config
    }else{
        return config
    }
})

export const requestLogin = (data) => {
    return axios({
        url: '/api/login',
        method: 'POST',
        data: qs.stringify(data)
    })
}


export const requestReg = (data) => {
    return axios({
        url: '/api/register',
        method: 'POST',
        data: qs.stringify(data)
    })
}

export const requestBanner = () => {
    return axios({
        url: '/api/getbanner',
        method: 'get',
    })
}

export const requestGoods = () => {
    return axios({
        url: '/api/getindexgoods',
        method: 'get',
    })
}

export const requestDetail = (params) => {
    return axios({
        url: '/api/getgoodsinfo',
        method: 'get',
        params
    })
}

export const requestFenlei = () => {
    return axios({
        url: '/api/getcatetree',
        method: 'get',
    })
}


export const requestFenleiDetail = (params) => {
    return axios({
        url: '/api/getgoods',
        method: 'get',
        params
    })
}


export const requestShopCar = (params) => {
    return axios({
        url: '/api/cartlist',
        method: 'get',
        params
    })
}

export const requestShopCarAdd = (data) => {
    return axios({
        url: '/api/cartadd',
        method: 'post',
        data: qs.stringify(data)
    })
}

export const requestShopCarEdit = (data) => {
    return axios({
        url: '/api/cartedit',
        method: 'post',
        data: qs.stringify(data)
    })
}

export const requestShopCarDel = (data) => {
    return axios({
        url: '/api/cartdelete',
        method: 'post',
        data: qs.stringify(data)
    })
}
