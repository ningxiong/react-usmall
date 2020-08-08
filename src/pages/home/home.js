import Head from './components/head/head'
import React from 'react'
import Banner from './components/banner/banner'
import Goods from './components/goods/goods'
import timeList from '../../assets/img/img/home/1.jpg'

import { connect } from 'react-redux'
import { banner,  goods, } from '../../store'


class Home extends React.Component {
    render() {
        const { banner, goods } = this.props
        return (
            <div className="home">
                <Head></Head>
                <Banner list={banner}></Banner>
                <div className="time-list">

                    <ul>
                        <li>
                            <img src={timeList} alt="" />
                            <p>限时抢购</p>
                        </li>
                        <li>
                            <img src={timeList} alt="" />
                            <p>积分商城</p>
                        </li>
                        <li>
                            <img src={timeList} alt="" />
                            <p>联系我们</p>
                        </li>
                        <li>
                            <img src={timeList} alt="" />
                            <p>商品分类</p>
                        </li>
                    </ul>
                </div>
                <Goods goods={goods}></Goods>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        banner: banner(state),
        goods: goods(state)
    }
}


export default connect(mapStateToProps)(Home)