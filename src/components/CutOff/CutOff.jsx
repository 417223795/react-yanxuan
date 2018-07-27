import React, {Component} from 'react'
import {connect} from "react-redux";
import './CutOff.less'
class CutOff extends Component {
  render () {
    return (
      <div className="cut-off"></div>
    )
  }
}
export default connect()(CutOff)