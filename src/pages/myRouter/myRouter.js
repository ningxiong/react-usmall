import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'


 class MyRouter extends React.Component{


    render(){
        const isLogin = sessionStorage.getItem('islogin')
        return (
            <div>
                {
                    isLogin?<Route {...this.props}></Route>:<Redirect to="/login"></Redirect>
                }
            </div>
        )
    }
} 

export default withRouter(MyRouter)