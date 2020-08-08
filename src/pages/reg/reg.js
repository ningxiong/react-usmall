import React from 'react'
import Goback from '../../components/goBack'
import './reg.css'
import { requestReg } from '../../util/request'
export default class Reg extends React.Component {
    constructor() {
        super()
        this.state = {
            user: {
                phone: '',
                nickname: '',
                password: '',
            }
        }
    }
    toLogin() {
        requestReg(this.state.user).then(res => {
            if (res.data.code === 200) {
                alert(res.data.msg)
                this.props.history.push('/login')
            } else {
                alert(res.data.msg)
            }
        })
    }
    changeUser(e, key) {
        this.setState({
            user: {
                ...this.state.user,
                [key]: e.target.value
            }
        })
    }
    render() {
        const { user } = this.state
        return (
            <div className="reg">
                <div className="head">
                    <Goback></Goback>
                    注册
                </div>
                <div className="body">
                    <ul>
                        <li>
                            手机号：<input type="text" value={user.phone} onChange={(e) => this.changeUser(e, 'phone')} />
                        </li>
                        <li>
                            昵称：<input type="text" value={user.nickname} onChange={(e) => this.changeUser(e, 'nickname')} />
                        </li>
                        <li>
                            密码：<input type="password" value={user.password} onChange={(e) => this.changeUser(e, 'password')} />
                        </li>
                        <li><button onClick={() => this.toLogin()}>注册</button></li>
                    </ul>
                </div>
            </div>
        )
    }
} 