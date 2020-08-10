import React from 'react';
import './shopCar.css'
import { connect } from 'react-redux';
import { changeShopCarAc, shopCarList } from '../../store';
import storeImg from '../../assets/img/store.png'
import { filterPrice } from '../../filter'
import { requestShopCarEdit } from '../../util/request'
class ShopCar extends React.Component {
    constructor() {
        super()
        this.state = {
            allSel: false,
            sum: 0
        }
    }
    arr = []
    uid = sessionStorage.getItem('uid')
    componentDidMount() {
        this.props.changeShopCarAc(this.uid)
    }

    less(id, i) {
        if (this.props.shopCarList[i].num === 1) {
            return
        }
        requestShopCarEdit({ id: id, type: 1 })
        this.props.changeShopCarAc(this.uid)
        let time = setTimeout(() => {
            let selAc = []
            this.arr.filter((item, index) => {
                if (item) {
                    selAc.push(index)
                }
            })
            let sum = 0
            selAc.forEach(item => {
                sum += this.props.shopCarList[item].num * this.props.shopCarList[item].price
            })
            this.setState({
                ...this.state,
                sum
            })
            clearTimeout(time)
        }, 500)

    }
    add(id) {
        requestShopCarEdit({ id: id, type: 2 })
        this.props.changeShopCarAc(this.uid)
        let time = setTimeout(() => {
            let selAc = []
            this.arr.filter((item, index) => {
                if (item) {
                    selAc.push(index)
                }
            })
            let sum = 0
            selAc.forEach(item => {
                sum += this.props.shopCarList[item].num * this.props.shopCarList[item].price
            })
            this.setState({
                ...this.state,
                sum
            })
            clearTimeout(time)
        }, 500)
    }

    allSel(e) {
        let allCheck = e.target.checked
        this.arr = this.arr.map(item => {
            return item = allCheck
        })
        let selAc = []
        this.arr.filter((item, index) => {
            if (item) {
                selAc.push(index)
            }
        })
        let sum = 0
        selAc.forEach(item => {
            sum += this.props.shopCarList[item].num * this.props.shopCarList[item].price
        })
        this.setState({
            allSel: allCheck,
            sum
        })

    }
    check(i) {
        this.arr[i] = !this.arr[i]
        let selAc = []
        this.arr.filter((item, index) => {
            if (item) {
                selAc.push(index)
            }
        })
        let sum = 0
        selAc.forEach(item => {
            sum += this.props.shopCarList[item].num * this.props.shopCarList[item].price
        })
        this.setState({
            ...this.state,
            sum
        })
    }

    render() {
        const { shopCarList } = this.props
        return (
            <div className="shopCar">
                <div className="head">
                    购物车
                </div>
                <div className="con">
                    <ul>
                        {

                            shopCarList.map((item, index) => {
                                if (this.arr.length < shopCarList.length) {
                                    this.arr.push(false)
                                }
                                return (
                                    <li key={item.id}>
                                        <h3><img src={storeImg} alt="" />杭州保税区仓</h3>
                                        <div className="info">
                                            <input type="checkbox" checked={this.arr[index]} onChange={() => this.check(index)} />
                                            {
                                                shopCarList.length > 0 ? <img src={shopCarList[index].img} alt="" /> : null
                                            }
                                            <div className="des">
                                                <p>{item.goodsname}</p>
                                                <p>
                                                    <i onClick={() => this.less(item.id, index)}>-</i><span>{item.num}</span><i onClick={() => this.add(item.id)}>+</i>
                                                </p>
                                                <p>总价：{filterPrice(item.num * item.price)}</p>
                                            </div>
                                            <p>{filterPrice(item.price)}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
                <div className="foot">
                    <div>
                        <input type="checkbox" checked={this.state.allSel} onChange={(e) => this.allSel(e)} />
                        <p>全选</p>
                    </div>
                    <div className='edit'>
                        <input type="checkbox" />
                        <p>编辑</p>
                    </div>
                    <div className="sum">
                        <p>合计:{filterPrice(this.state.sum)}</p>
                        <span>(不含运费)</span>
                    </div>
                    <button>去结算</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        shopCarList: shopCarList(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeShopCarAc: (e) => dispatch(changeShopCarAc(e))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShopCar)
