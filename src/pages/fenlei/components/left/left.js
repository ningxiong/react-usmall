import React from 'react'
import './left.css'
export default class Left extends React.Component {
    
    
    render() {
        const { fenlei,num} = this.props
        return (
            <div className="left">
                <ul>
                    {
                        fenlei.map((item,index) => {
                            return <li key={item.id} className={num===index?'sel':''} onClick={()=>this.props.changeNum(index)}>{item.catename}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}