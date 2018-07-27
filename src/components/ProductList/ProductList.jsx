import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import PropType from 'prop-types'
import './ProductList.less'
class ProductList extends Component {

  static propTypes = {
    item:PropType.object.isRequired
  }

  render () {
    return (
      <div className="product-list">
        <div className="product-list-title">{this.props.item.name}</div>
        <div className="product-list-content-wrap">
          <ul className="product-list-content">
            {
              this.props.item.itemList.map((list,index) => {
                return (
                  <li key={index}>
                    <img src={list.listPicUrl}/>
                    <div className="product-list-content-text-top">{list.name}</div>
                    <div className="product-list-content-text-middle">{list.simpleDesc}</div>
                    <div className="product-list-content-text-bottom">￥{list.couponPrice}</div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
export default withRouter(ProductList)