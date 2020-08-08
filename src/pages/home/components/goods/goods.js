import React from 'react';
import { filterPrice } from '../../../../filter'
import './goods.css'
import { withRouter } from 'react-router-dom';
class Goods extends React.Component {
    toDetail(id){
        this.props.history.push('/goodsDetail?id='+id)
    }
    render() {
        const { goods } = this.props
        return (
            <div className="goods">
                <ul className="goods-list">
                    {
                        goods.map(item => {
                            return (
                                <li key={item.id}>
                                    <img src={item.img} alt="" />
                                    <div className="right">
                                        <p>{item.goodsname}</p>
                                        <p>￥{filterPrice(item.price)}</p>
                                        <button onClick={() => this.toDetail(item.id)}>立即抢购</button>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}


export default withRouter(Goods)

