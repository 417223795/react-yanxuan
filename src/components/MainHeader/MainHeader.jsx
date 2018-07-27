import React, {Component} from 'react'
import {connect} from "react-redux";
import './MainHeader.less'
class CutOff extends Component {
  render () {
    const {header} = this.props
    return (
      <div className='tab-shop-wrap'>
        <ul className="tab-shop" >
          <li className='tab-item'

          >推荐</li>
          {
            header.map((item, index) => {
              return (
                <li className='tab-item'
                    key={index}

                >{item.name}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
export default connect()(CutOff)