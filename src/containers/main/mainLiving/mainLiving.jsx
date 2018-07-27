import React, {Component} from 'react'
import {connect} from "react-redux";
import {getHeadCates} from "../../../redux/actions";

import './mainLiving.less'
import PubSub from "pubsub-js";

class MainLiving extends Component {
  state = {
    ContentIndex: 0,
    headerList:this.props.header
  };
  componentWillReceiveProps(props){
    this.setState({headerList:props.header})
  }
  componentDidMount () {
    this.props.getHeadCates();

    PubSub.subscribe('setIndex', (msg, index) => {
      console.log(index);
      this.setState({ContentIndex: index})
    })
  }
  
  render () {
    const {header} = this.props
    console.log(this.state.ContentIndex,this.state.headerList[this.state.ContentIndex]);
    return (
      <div className="living">
      {
        this.state.headerList[this.state.ContentIndex]?(
          <img className="top-image"
               src={this.state.headerList[this.state.ContentIndex].imgUrl}
          />
        ):null
      }
      </div>
    )
  }
}

export default connect(
  state => ({header: state.header}),
  {getHeadCates}
)(MainLiving)