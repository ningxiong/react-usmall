import React from 'react'
import { connect } from 'react-redux'
import { fenleiDetail, changeFenleiDetailAc } from '../../store'
import { filterPrice } from '../../filter'
import Goback from '../../components/goBack'
import './fenleiDetail.css'
class FenleiDetail extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.id
        this.props.changeFenleiDetailAc(id)
    }
    render() {
        const { fenleiDetail } = this.props
        let name = this.props.match.params.name
        return (
            <div className="fenleiDetail">
                <div className="head">
                    <Goback></Goback>
                    {name}
                </div>
                {
                    fenleiDetail && fenleiDetail.length > 0 ? fenleiDetail.map(item => {
                        return (
                            <div className="box" key={item.id}>
                                <img src={item.img} alt="" />
                                <div className="rig">
                                    <p>{item.goodsname}</p>
                                    <p>￥{filterPrice(item.price)}</p>
                                    <button>立即抢购</button>
                                </div>
                            </div>
                        )
                    }) : null
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        fenleiDetail: fenleiDetail(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFenleiDetailAc: (e) => dispatch(changeFenleiDetailAc(e))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FenleiDetail)

/* goodsname: "海信冰箱"
id: 18
img: "/uploads/adcb70f0-d581-11ea-9a8a-2b73d33dd399.jpg"
market_price: 5999
price: 4999 */