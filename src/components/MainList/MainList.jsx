import React, {Component} from 'react'
import {connect} from "react-redux";
import CutOff from '../../components/CutOff/CutOff'
import PropType from 'prop-types'

import {
  getNewItemList
} from '../../redux/actions'

import './MainList.less'
import BScroll from 'better-scroll'

class MainList extends Component {

  static propTypes = {
    item:PropType.array.isRequired
  }

  componentDidMount () {
    this.props.getNewItemList();
    new BScroll('.goods-scroll-wrap', {
      scrollX: true,
      click: true
    })
  }

  render () {
    const {newItem} = this.props
    console.log(this.props.item);
    return (
      <div>
        <div className="new-goods-wrap">
          <a className="new-goods" href="/">
            <div>新品发售</div>
            <div>查看全部></div>
          </a>
        </div>

        <div className="goods-scroll-wrap">
          <ul className="goods-scroll">
            {
              newItem.map((item,index) => {
                return (
                  <li key={index}>
                    <img src={item.primaryPicUrl}/>
                    <div className="goods-scroll-title">{item.name}</div>
                    <div className="goods-scroll-content">{item.simpleDesc}</div>
                    <div className="goods-scroll-price">￥{item.retailPrice}</div>
                  </li>
                )
              })
            }
          </ul>
        </div>

        <CutOff/>
      </div>
    )
  }
}
export default connect()(MainList)