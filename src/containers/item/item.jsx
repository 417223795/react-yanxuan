import React, {Component} from 'react'
import {connect} from "react-redux";
import BScroll from 'better-scroll'
import './item.less'
import {getCategoryData} from "../../redux/actions";

class Item extends Component {
  componentDidMount () {
    this.props.getCategoryData();
    new BScroll('.content-left', {
      scrollX: true,
      click: true
    })
    new BScroll('.content-right-wrap', {
      scrollX: true,
      click: true
    })
  }

  componentWillReceiveProps(props){
    this.setState({liItem:props.categoryData[0]})
  }

  state = {
    liIndex: 0,
    liItem:this.props.categoryData[0]
  };

  //把需要接受的内容，以形参的形式传递进来
 /* handleSelectHeader = (index) => {
    this.setState(this.state.liIndex=index)
  };*/

  render () {
    const {categoryData} = this.props
    console.log(categoryData);

    return (
      <div className="wrap">

        <div className="header">
          <div className="header-inside">
            <i className="top-search-icon iconfont icon-search1187938easyiconnet"></i>
            <span>搜索商品, 共10739款好物</span>
          </div>
        </div>

        <div className="item_content">

          <div className="content-left">
            <ul ref="content">
              {
                categoryData.map((item,index) => (
                    <li key={index}
                        className={this.state.liIndex===index?'on':''}
                        onClick={
                          /*this.handleSelectHeader(index)*/
                          (event) => {
                            this.setState({
                              liIndex:index,
                              liItem:item
                            })
                          }
                        }
                    >{item.name}</li>
                  )
                )
              }
            </ul>
          </div>

          <div className="content-right-wrap">
            <div className="content-right">
              <img className="content-right-images" src={this.state.liItem?this.state.liItem.bannerUrl:null}/>
              <div className="content-right-title">{this.state.liItem?this.state.liItem.name:null}</div>
              <div className="content-right-content">
                <ul>
                  {
                    this.state.liItem?(
                      this.state.liItem.subCateList.map((item,index) => (
                        <li key={index}
                            style={(index % 3===2)?{marginRight:'0'}:{marginRight:'0.6rem'}}
                        >
                          <img src={item.wapBannerUrl}/>
                          <div className="content-right-content-text">{item.name}</div>
                        </li>
                      ))
                    ):null
                  }
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    )
  }
}
export default connect(
  state => ({categoryData: state.categoryData}),
  {getCategoryData}
)(Item)