import React, {Component} from 'react'
import './topicList.less'
import PropType from 'prop-types'
import {withRouter} from "react-router-dom";
export default class TopicList extends Component {

  static propTypes = {
    recommend:PropType.object.isRequired
  }
  componentWillReceiveProps(props){
    this.setState({recommendList:props.recommend.recommendBanner})
    this.setState({recommendItem:props.recommend.recommends})
  }
  state = {
    recommendList:this.props.recommend.recommendBanner,
    recommendItem:this.props.recommend.recommends
    // recommendList:recommend.recommends
  };

  render () {
    const recommend = this.props.recommend;
    console.log(recommend);
    return (
      <div className="topic-list-wrap">
        {
          this.state.recommendList?(
            <div className="topic-list-header">
              {this.state.recommendList.nickname}
            </div>
          ):null
        }
        {/*<div className="header">{recommend.recommendBanner?recommend.recommendBanner.nickname:''}</div>*/}
        <div>
          {
            this.state.recommendItem?(
              <div className="topic-list-wrap">
                <img src={this.state.recommendList.picUrl}/>
                <div className="topic-list-title">{this.state.recommendList.title}</div>
                <div className="topic-list-text">{this.state.recommendList.subtitle}</div>
              </div>
            ):null
          }

          <div>
            {
              this.state.recommendItem?(
                this.state.recommendItem.map((item,index) => (
                  <div className="topic-small-wrap" key={index}>
                    <div className="topic-small-left">
                      <div className="topic-small-left-title">
                        <img src={item.picUrl}/>
                        <span>{item.nickname}</span>
                      </div>
                      <div className="topic-small-left-content">{item.title}</div>
                      <div className="topic-small-left-annotation">{item.subtitle}</div>
                    </div>
                    <img src={item.picUrl}/>
                  </div>
                ))
              ):null
            }
           {/* {
              recommend.recommends.map((item,index) => {
                return (
                  <div className="topic-small-wrap" key={index}>
                    <div className="topic-small-left">
                      <div className="topic-small-left-title">
                        <img src={item.picUrl}/>
                        <span>{item.nickname}</span>
                      </div>
                      <div className="topic-small-left-content">{item.title}</div>
                      <div className="topic-small-left-annotation">{item.subtitle}</div>
                    </div>
                    <img src={item.picUrl}/>
                  </div>
                )
              })
            }*/}

          </div>
        </div>
      </div>
    )
  }
}
/*
export default withRouter(TopicList)*/
