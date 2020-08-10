import React from 'react';
import { connect } from 'react-redux';
import { changeFenleiAc, fenlei } from '../../store';
import './fenlei.css'
import Right from './components/right/right';
import Left from './components/left/left';
class Fenlei extends React.Component {
    constructor(){
        super()
        this.state={
            num:0
        }
    }
    componentDidMount() {
        this.props.changeFenleiAc()
    }

    changeNum(i){
        this.setState({
            num:i
        })
    }
    render() {
        return (
            <div className="fenlei">
                <div className="head">
                    分类
                </div>
                <div className="con">
                    <Left {...this.props} num={this.state.num} changeNum={(e)=>this.changeNum(e)}></Left>
                    <Right {...this.props} num={this.state.num}></Right>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        fenlei:fenlei(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFenleiAc:()=>dispatch(changeFenleiAc())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fenlei)

