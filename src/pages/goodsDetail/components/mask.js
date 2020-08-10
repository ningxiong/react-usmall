import React from 'react'
import './mask.css'
import { requestShopCarAdd } from '../../../util/request'





class Mask extends React.Component {
    constructor() {
        super()
        this.state = {
            num: 0,
            show:false
        }
    }

    sel(i) {
        this.setState({
            ...this.state,
            num: i
        })
    }
    hidd(e) {
        if (e.target.className === "box") {
            this.setState({
                ...this.state,
                show:!this.state.show
            })
        }
    }

    add(){
        let uid = sessionStorage.getItem('uid')
        requestShopCarAdd({uid:uid,goodsid:this.props.detail.id,num:1}).then(res=>{
            if(res.data.code===200){
                alert("添加成功")
                this.setState({
                    ...this.state,
                    show:false
                })
            }
        })
    }

    render() {
        const { detail } = this.props
        if (JSON.stringify(detail) !== "{}") {
            var a = JSON.parse(detail.specsattr)
        }
        return (
            <div className="mask">
                {
                    this.state.show ? <div className="box" onClick={(e) => this.hidd(e)}>
                        <div className="con">
                            <ul>
                                <li>
                                    <img src={detail.img} alt="" />
                                    {detail.goodsname}
                                </li>
                                <li>商品规格</li>
                                <li>
                                    {
                                        a ? a.map((item, index) => {
                                            return <span key={item} className={this.state.num === index ? 'select' : ""} onClick={() => this.sel(index)}>{item}</span>
                                        }) : null
                                    }
                                </li>
                                <li>
                                    <button onClick={()=>this.add()}>加入购物车</button>
                                </li>
                            </ul>

                        </div>
                    </div> : null
                }
            </div>
        )
    }
}

export default Mask