import React, {Component} from 'react'
import {connect} from "react-redux";

import './list.less'
class List extends Component {
  render () {
    return (
      <div className="wrap">List</div>
    )
  }
}
export default connect()(List)