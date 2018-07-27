import React, {Component} from 'react'
import './login.less'
import {withRouter} from "react-router-dom";
class Login extends Component {
  render () {
    return (
      <div className="wrap">
        <header>
          <i className="iconfont icon-shouye1 header-icon"
             onClick={() => {this.props.history.replace('/mian')}}
          ></i>
          网易严选
          <i className="iconfont icon-gouwuche header-icon"></i>
          <i className="iconfont icon-sousuo header-icon"></i>
        </header>
        <div className="main-logo">
          <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"/>
        </div>
        <div className="login">
          <div className="phone-login"
               onClick={() => {this.props.history.replace('/phone')}}
          >
            <div className="phone-login-wrap">
              <i className="iconfont icon-shouji"></i>
              <span>手机号码登陆</span>
            </div>
          </div>
          <div className="e-mail">
            <div className="e-mail-wrap">
              <i className="iconfont icon-youjian"></i>
              <span>邮箱账号登陆</span>
            </div>
          </div>
          <div className="phone-register">手机号快速注册></div>
        </div>
      </div>
    )
  }
}
export default withRouter(Login)