import React, {Component} from 'react'
import './phone.less'
import {withRouter} from "react-router-dom";
class Phone extends Component {
  
  state = {
    phoneNumber:'',
    code:''
  }

  phoneNumberChange =()=> {
    const value=this.refs.inputNumber.value
    const code=this.refs.code.value
    this.setState({phoneNumber:value,code:code})
  }




  /*componentDidUpdate () {
    this.setState({phoneNumber:this.refs.value()})
  }*/
  
  render () {
    console.log(this.state.phoneNumber,this.state.code);
    return (
      <div className="wrap">
        <header>
          <i className="iconfont icon-shouye1 header-icon"
             onClick={() => {this.props.history.replace('/main')}}
          ></i>
          网易严选
          <i className="iconfont icon-gouwuche header-icon"></i>
          <i className="iconfont icon-sousuo header-icon"></i>
        </header>
        <div className="content">
          <div className="main-logo">
            <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"/>
          </div>
          <div className="login-content">
            <form>
              <section>
                <div className="message-wrap">
                  <input className="message-code"
                         maxLength="11"
                         placeholder="请输入手机号"
                         onChange={()=>this.phoneNumberChange()}
                         ref="inputNumber"
                  />
                    <button className="get_verification">
                      获取验证码
                    </button>
                </div>
                {
                  this.state.phoneNumber.length===11?(
                    this.state.phoneNumber.match(/^1\d{10}$/)?null:(
                    <div className="enter-phone-number">
                      请输入正确手机号!
                    </div>
                  )):null
                }

              </section>
              <section>
                <input type="tel"
                       maxLength="8"
                       placeholder="请输入短信验证码"
                       onChange={()=>this.phoneNumberChange()}
                       ref="code"
                />
                  {/*<div className="enter-code">
                    请输入正确短信验证码!
                  </div>*/}
              </section>
              <div className="hint-text">
                <span className="account">遇到问题？</span>
                <span className="password">使用密码验证登陆</span>
              </div>
              <div className="phone-login">
                <button className="phone-login-wrap">
                  <span>登陆</span>
                </button>
              </div>
            </form>
            <div className="others">
              <button className="others-wrap">
                <span>其他方式登陆</span>
              </button>
            </div>
            <div className="register">
              注册账号>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
export default withRouter(Phone)