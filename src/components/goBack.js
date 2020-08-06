import React from 'react'
import { withRouter } from 'react-router-dom'
import './goback.css'
class Goback extends React.Component{
    goBack(){
        this.props.history.goBack()
    }
    render(){
        return (
            <span className='btn' onClick={()=>this.goBack()}>返回</span>
        )
    }
}

export default withRouter(Goback)