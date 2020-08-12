import React from 'react'
import MyRouter from '../myRouter/myRouter'

import indexImgAc from '../../assets/img/tab_home_hig.png'
import fenleiImgAc from '../../assets/img/tab_menu_hig.png'
import shopCarImgAc from '../../assets/img/tab_shopping_hig.png'
import mineImgAc from '../../assets/img/tab_me_hig.png'
import indexImg from '../../assets/img/tab_home_nor.png'
import fenleiImg from '../../assets/img/tab_menu_nor.png'
import shopCarImg from '../../assets/img/tab_shopping_nor.png'
import mineImg from '../../assets/img/tab_me_nor.png'
import './index.css'

import { connect } from 'react-redux'
import { changeBannerAc, changeGoodsAc } from '../../store'
import { Switch, Redirect, NavLink } from 'react-router-dom'
import lazy from '../../util/lazy'
class Index extends React.Component {
    constructor() {
        super()
        this.state = {
            num: 0
        }
    }
    componentDidMount() {
        this.props.changeBannerAc()
        this.props.changeGoodsAc()
        if(this.props.location.pathname==='/index/fenlei'){
            this.setState({
                num:1
            })
        }
    }

    sel(num) {
        this.setState({
            num
        })
    }
    render() {
        return (
            <div className="index">

                <Switch>
                    <MyRouter path="/index/home" component={lazy(() => import('../home/home'))} ></MyRouter>
                    <MyRouter path='/index/fenlei' component={lazy(() => import('../fenlei/fenlei'))}></MyRouter>
                    <MyRouter path='/index/shopCar' component={lazy(() => import('../shopCar/shopCar'))}></MyRouter>
                    <MyRouter path='/index/mine' component={lazy(() => import('../mine/mine'))}></MyRouter>
                    <Redirect to='/index/home'></Redirect>
                </Switch>
                <div className="footer">
                    <div onClick={() => this.sel(0)}>
                        <img src={this.state.num === 0 ? indexImgAc : indexImg} alt="" /><br />
                        <NavLink to='/index/home' activeClassName="select">首页</NavLink>
                    </div>
                    <div onClick={() => this.sel(1)}>
                        <img src={this.state.num === 1 ? fenleiImgAc : fenleiImg} alt="" /><br />
                        <NavLink to='/index/fenlei' activeClassName="select">分类</NavLink>
                    </div>
                    <div onClick={() => this.sel(2)}>
                        <img src={this.state.num === 2 ? shopCarImgAc : shopCarImg} alt="" /><br />
                        <NavLink to='/index/shopCar' activeClassName="select">购物车</NavLink>
                    </div>
                    <div onClick={() => this.sel(3)}>
                        <img src={this.state.num === 3 ? mineImgAc : mineImg} alt="" /><br />
                        <NavLink to='/index/mine' activeClassName="select">我的</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeBannerAc: () => dispatch(changeBannerAc()),
        changeGoodsAc: () => dispatch(changeGoodsAc())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)