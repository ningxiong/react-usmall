import React from 'react'
import './login.css'
import {requestLogin} from '../../util/request'
export default class Login extends React.Component{
    constructor(){
        super()
        this.state={
            user:{
                phone:'',
                password:''
            }
        }
    }
    toIndex(){
        requestLogin(this.state.user).then(res=>{
            if(res.data.code===200){
                alert(res.data.msg)
                this.props.history.push('/index')
            }else{
                alert(res.data.msg)
            }
        })
    }
    changeUser(e,key){
        this.setState({
            user:{
                ...this.state.user,
                [key]:e.target.value
            }
        })
    }
    toReg(){
        this.props.history.push('/reg')
    }
    render(){
        const {user} = this.state
        return (
            <div className="login">
                <div className="head">
                    登录
                    <span onClick={()=>this.toReg()}>注册</span>
                </div>

                <div className="body">
                    <ul>
                        <li>
                            账号：<input type="text" value={user.phone} onChange={(e)=>this.changeUser(e,'phone')}/>
                        </li>
                        <li>
                            密码：<input type="password" value={user.password} onChange={(e)=>this.changeUser(e,'password')}/>
                        </li>
                        <li>忘记密码</li>
                        <li><button onClick={()=>this.toIndex()}>登录</button></li>
                    </ul>
                </div>
            </div>
        )
    }
} 