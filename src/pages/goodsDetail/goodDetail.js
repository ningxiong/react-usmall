import React from 'react';
import './goodDetail.css'
import { connect } from 'react-redux'
import { detail, changeDetailAc } from '../../store';
import Goback from '../../components/goBack'
import { filterPrice } from '../../filter';
class GoodsDetail extends React.Component {
    componentDidMount() {
        let arr = this.props.location.search.slice(1).split('&')
        let id = {}
        arr.forEach(item => {
            let arr = item.split('=')
            id[arr[0]] = arr[1]
        })
        //请求
        this.props.changeDetailAc(id.id)
    }
    render() {
        const { detail } = this.props
        return (
            <div className="goodsDetail">
                <div className="top">
                    <Goback></Goback>
                    商品详情
                </div>
                <div className="logo">
                    <img src={detail.img} alt="" />
                </div>

                <div className="des">
                    <ul>
                        <li>
                            <span>{detail.goodsname}</span>
                            <p>收藏</p>
                        </li>
                        <li>
                            <span style={{ color: "orangered" }}>￥{filterPrice(detail.price)}</span>
                            {
                                detail.ishot === 1 ? <i className="hot">热卖</i> : null
                            }
                            {
                                detail.isnew === 1 ? <i>新品</i> : null
                            }
                        </li>
                        <li><del>￥{filterPrice(detail.market_price)}</del></li>
                    </ul>
                </div>

                <div className="biglogo" >
                        <div dangerouslySetInnerHTML={{ __html: detail.description}} />
                </div>
                <div className="footer">
                    <span>加入购物车</span>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        detail: detail(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeDetailAc: (id) => dispatch(changeDetailAc(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodsDetail)

