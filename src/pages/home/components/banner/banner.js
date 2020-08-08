import React from 'react'
import { Carousel } from 'antd-mobile';
import './banner.css'

function Banner(props) {
    const {list} = props
    return (
        <div>
            <Carousel dotStyle={{background:'#ccc'}} dotActiveStyle={{'background':'orange',}}>
                {
                    list.map(item=>{
                        return <img src={item.img} alt="" key={item.id}/>
                    })
                }
            </Carousel>
        </div>
    )
}


export default Banner