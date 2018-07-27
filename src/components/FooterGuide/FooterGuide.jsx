import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
// import {browserHistory} from 'react-router';

import './footer.less'

class FooterGuide extends Component {

  render () {

    const path = this.props.location.pathname

    console.log(this.props.location.pathname)

    if (path === '/login' || path === '/phone'){
      return ''
    } else {
      return (

        <div className='footer'>

          <div className={`item ${path==='/main' || path==='/'?'on':''}`}
               onClick={()=>{
                 this.props.history.replace('/main')
                 /*window.location.reload()*/
               }}
          >
            <div className="iconfont icon-shouye1"></div>
            <span className="text-main">首页</span>
          </div>

          <div className={`item ${path==='/topic'?'on':''}`}
               onClick={()=>{this.props.history.replace('/topic')}}
          >
            <div className="iconfont icon-cub"></div>
            <span>识物</span>
          </div>

          <div className={`item ${path==='/item'?'on':''}`}
               onClick={()=>{this.props.history.replace('/item')}}
          >
            <div className="iconfont icon-drawer2chouti"></div>
            <span>分类</span>
          </div>

          <div className={`item ${path==='/cart'?'on':''}`}
               onClick={()=>{this.props.history.replace('/cart')}}
          >
            <div className="iconfont icon-gouwuche"></div>
            <span>购物车</span>
          </div>

          <div className={`item ${path==='/login'?'on':''}`}
               onClick={()=>{this.props.history.replace('/login')}}
          >
            <div className="iconfont icon-geren"></div>
            <span>个人</span>
          </div>

        </div>
      )
    }


  }
}
export default withRouter(FooterGuide)
