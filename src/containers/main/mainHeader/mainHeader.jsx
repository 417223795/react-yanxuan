import React, {Component} from 'react'
import BScroll  from 'better-scroll'
import PubSub from 'pubsub-js'
import {reqHeadCates} from '../../../api'
import './mainHeader.less'

import {withRouter} from "react-router-dom";

class MainHeader extends Component {

  state = {
    liIndex: 0,
    header:''
  }
  componentDidMount () {
    this.getHeadCates()
  }

  async getHeadCates () {
    const result = await reqHeadCates()
    if (result.code === 0) {
      const header = result.data
      this.setState({
        header
      })
    }
  }

  componentDidUpdate(){
    if(!this.tabShopWrap){
      this.tabShopWrap = new BScroll('.tab-shop-wrap', {
        scrollX: true,
        click: true
      })
    }else{
      this.tabShopWrap.refresh()
    }

    // 发送消息
    PubSub.publish('setIndex', (this.state.liIndex))
  }
/*  componentWillUnmount(){

  }*/

  /*clickItem (index) {
    this.setState({liIndex:index})
  }*/

  render () {
    const path = this.props.location.pathname
    console.log(this.state.header);
    return (
      <div className="header-wrap">
        <div className="header-top">
          <div className="top-main"></div>
          <div className="top-search">
            <i className="top-search-icon iconfont icon-search1187938easyiconnet"></i>
            <span>搜索商品, 共10719款好物</span>
          </div>
        </div>

        <div className='tab-shop-wrap'>
          <ul className="tab-shop" >
            <li className={`tab-item ${path==='/main'?'on':''}`}
                onClick={()=>{this.props.history.replace('/main')}}

            >推荐</li>
            {
              this.state.header? (
                this.state.header.map((item, index) => {
                  return (
                    <li className={`tab-item ${path===`/list:${index}`?'on':''}`}
                        key={index}
                        onClick={
                          (event) => {
                            this.setState({
                              liIndex:(index)
                            })
                            this.props.history.replace(`/list:${index}`)
                          }
                          /*  this.clickItem(index)*/
                        }
                    >{item.name}</li>
                  )
                })
                ) : null
            }
          </ul>
        </div>
      </div>
    )
  }
}


export default withRouter(MainHeader)
