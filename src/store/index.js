import { createStore, applyMiddleware } from 'redux'
import { requestBanner, requestGoods, requestDetail } from '../util/request'
import thunk from "redux-thunk"

let initState = {
    banner: [],
    goods: [],
    detail: {}
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
        if(Number(id)===getState().detail.id){
            return
        }
        requestDetail({ id: id }).then(res => {
            dispatch(changeDetail(res.data.list[0]))
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
        default: return state
    }
}

let store = createStore(Reducer, applyMiddleware(thunk))


export const banner = (state) => state.banner
export const goods = (state) => state.goods
export const detail = (state) => state.detail
export default store