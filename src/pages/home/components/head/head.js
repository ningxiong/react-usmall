import React from 'react'
import logo from '../../../../assets/img/img/home/logo.jpg'
import './head.css'
function head(){
    return (
        <div className="head">
            <img src={logo} alt=""/>
            <input type='search' placeholder='寻找商品'/>
        </div>
    )
}
export default head