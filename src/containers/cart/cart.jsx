import React, {Component} from 'react'
import {connect} from "react-redux";

import './cart.less'
class Cart extends Component {
  render () {
    return (
      <div className="wrap">
        <header>
          购物车
          <span>领券</span>
        </header>
        <div className="title">
          <span>30天无忧退货</span>
          <span>48小时快速退款</span>
          <span>满88元免邮费</span>
        </div>
        <div className="main">
          <div className="mian-content">
            <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png"/>
              <div>登陆</div>
          </div>
        </div>
      </div>
    )
  }
}
export default connect()(Cart)