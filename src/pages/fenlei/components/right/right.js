import React from 'react'
import './right.css'
export default class Right extends React.Component {
    toDetail(id,name){
        this.props.history.push('/fenleiDetail/'+id+"/"+name)
    }
    render() {
        const { fenlei,num } = this.props
        return (

            <div className="right">
                {
                    fenlei.length > 0 ? fenlei[num].children.map(item => {
                        return (
                            <div key={item.id} >
                                <img src={item.img} alt="" onClick={()=>this.toDetail(item.id,item.catename)}/>
                                <span onClick={()=>this.toDetail(item.id,item.catename)}>{item.catename}</span>
                            </div>
                        )
                    }) : null
                }

            </div>
        )
    }
}