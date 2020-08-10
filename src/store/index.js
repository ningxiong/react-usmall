import { createStore, applyMiddleware } from 'redux'
import { requestBanner, requestGoods, requestDetail, requestFenlei, requestFenleiDetail, requestShopCar } from '../util/request'
import thunk from "redux-thunk"

let initState = {
    banner: [],
    goods: [],
    detail: {},
    fenlei: [],
    fenleiDetail: [],
    shopCarList: []
}


const changeBanner = (arr) => {
    return {
        type: "changeBanner",
        payload: arr
    }
}
//轮播图请求
export const changeBannerAc = () => {
    return (dispatch, getState) => {
        if (getState().banner.length > 0) {
            return
        }
        requestBanner().then(res => {
            dispatch(changeBanner(res.data.list))
        })
    }

}


//商品列表请求
const changeGoods = (arr) => {
    return {
        type: "changeGoods",
        payload: arr
    }
}


export const changeGoodsAc = () => {
    return (dispatch, getState) => {
        if (getState().goods.length > 0) {
            return
        }
        requestGoods().then(res => {

            dispatch(changeGoods(res.data.list[0].content))
        })
    }

}


//商品详情
const changeDetail = (json) => {
    return {
        type: "changeDetail",
        payload: json
    }
}

export const changeDetailAc = (id) => {
    return (dispatch, getState) => {
        if (Number(id) === getState().detail.id) {
            return
        }
        requestDetail({ id: id }).then(res => {
            dispatch(changeDetail(res.data.list[0]))
        })
    }

}

//商品分类
const changeFenlei = (arr) => {
    return {
        type: "changeFenlei",
        payload: arr
    }
}

export const changeFenleiAc = () => {
    return (dispatch, getState) => {
        if (getState().fenlei.length > 0) {
            return
        }
        requestFenlei().then(res => {
            dispatch(changeFenlei(res.data.list))
        })
    }

}

//商品分类详情
const changeFenleiDetail = (json) => {
    return {
        type: "changeFenleiDetail",
        payload: json
    }
}

export const changeFenleiDetailAc = (id) => {
    return (dispatch, getState) => {
        //多次请求问题
        requestFenleiDetail({ fid: id }).then(res => {
            dispatch(changeFenleiDetail(res.data.list))
        })
    }

}


//购物车
const changeShopCar = (arr) => {
    return {
        type: "changeShopCar",
        payload: arr
    }
}

export const changeShopCarAc = (id) => {
    return (dispatch, getState) => {
        requestShopCar({uid:id}).then(res => {
            dispatch(changeShopCar(res.data.list))
        })
    }
}


function Reducer(state = initState, action) {
    switch (action.type) {
        case 'changeBanner':
            return {
                ...state,
                banner: action.payload
            }
        case "changeGoods":
            return {
                ...state,
                goods: action.payload
            }
        case "changeDetail":
            return {
                ...state,
                detail: action.payload
            }
        case "changeFenlei":
            return {
                ...state,
                fenlei: action.payload
            }
        case "changeFenleiDetail":
            return {
                ...state,
                fenleiDetail: action.payload
            }
        case "changeShopCar":
            return {
                ...state,
                shopCarList: action.payload
            }
        default: return state
    }
}

let store = createStore(Reducer, applyMiddleware(thunk))


export const banner = (state) => state.banner
export const goods = (state) => state.goods
export const detail = (state) => state.detail
export const fenlei = (state) => state.fenlei
export const fenleiDetail = (state) => state.fenleiDetail
export const shopCarList = (state) => state.shopCarList
export default store