import React, {Component} from 'react'
import {connect} from "react-redux";
import BScroll  from 'better-scroll'
import Swiper from 'swiper'
import PubSub from "pubsub-js";

import CutOff from '../../../components/CutOff/CutOff'
import ProductList from '../../../components/ProductList/ProductList'

import './mainContent.less'
import {
  getFocusList,
  getTagList,
  getFlashSaleIndexVO,
  getTopicList,
  getCateList,
  getPopularItemList, 
  getNewItemList
} from '../../../redux/actions'


class Main extends Component {
  state = {
    ContentIndex: 0
  };
  componentDidMount () {
    PubSub.subscribe('setIndex', (msg, index) => {
      console.log(index);
      this.setState({ContentIndex: index})
    })
    this.props.getFocusList();
    this.props.getTagList();
    this.props.getFlashSaleIndexVO();
    this.props.getTopicList();
    this.props.getCateList();
    this.props.getPopularItemList();
    this.props.getNewItemList();
  }
  componentWillUpdate(){
    if(this.topSwiper){
      this.topSwiper.destroy()
    }
    this.topSwiper = null
  }

  componentDidUpdate(){

    this.topSwiper = new Swiper('.swiper-container', {
        pagination: { // 圆点指示器的容器div
          el: '.swiper-pagination'

        },
        loop: true, // 可以循环轮播
        // autoplay: true
      })

    if(!this.main){
      this.main = new BScroll('.content-wrap', {
        scrollY: true,
        click: true,
        scrollbar:{
          interactive:false,
        },
        mouseWheel: {
          speed: 20,
          invert: false,
          easeTime: 300
        }
      })
    }else{
      this.main.refresh()
    }

    if(!this.project){
      this.project = new BScroll('.project-selection-content-wrap', {
        scrollX: true,
        click: true
      })
    }else{
      this.project.refresh()
    }


  }

  render () {
    const {
      focusList,
      tagList,
      flashSaleIndexVO,
      topic,
      cateList,
    } = this.props
    return (
      <div className='main-wrap'>

        <div className="main-wrap-container">

          <div className="content-wrap">
            <div className='recommend-wrap'>
              <div>
                <div className="swiper-container">
                  <div className="swiper-wrapper">
                    {
                      focusList.map((item,index)=> {
                        return (
                          <div className="swiper-slide" key={index}>
                            <img src={item.picUrl}/>
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>

              <div className="content-text-title">
                <div className="content-text-title-item">
                  <i className="iconfont icon-Shapecopy"></i>
                  <span>网易自营品牌</span>
                </div>
                <div className="content-text-title-item">
                  <i className="iconfont icon-Shapecopy"></i>
                  <span>30天无忧退货</span>
                </div>
                <div className="content-text-title-item">
                  <i className="iconfont icon-Shapecopy"></i>
                  <span>48小时快速退款</span>
                </div>
              </div>

              <CutOff/>

              <div className="recommend-wrap-title">
                <div className="recommend-wrap-title-text">
                  <span>品牌制造商直供</span>
                  <i className="iconfont icon-right-circle"></i>
                </div>
              </div>

              <ul className="recommend-wrap-list">
                {
                  tagList.map((item,index)=>{
                    return (
                      <li className="recommend-wrap-list-first"
                          key={index}
                          style={{backgroundImage:`url(${item.picUrl})`}}
                      >
                        <div>
                          <div>{item.name}</div>
                          <div>{item.floorPrice}元起</div>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>

              {/*{
              swiperList.map((item,index) => {
                {
                  console.log(item);
                }
                return (
                    <MainList key={index} item={item}/>
                  )
              })
            }*/}

              <CutOff/>

              <div className="flash-sale">
                <div className="flash-sale-left">
                  <div>严选限时购</div>
                  <div className="flash-sale-time">
                    <span>01</span>:
                    <span>54</span>:
                    <span>02</span>
                  </div>
                  <div>
                    <span>下一场</span>
                    <span>22:00</span>
                    <span>开始</span>
                  </div>
                </div>
                <img className="flash-sale-left"
                     src={flashSaleIndexVO.primaryPicUrl}
                />
              </div>

              <CutOff/>

              <div className="project-selection-wrap">
                <div className="project-selection-title-wrap">
                  <div className="project-selection-title">
                    <span>专题精选</span>
                    <i className="iconfont icon-right-circle"></i>
                  </div>
                </div>
                <div className="project-selection-content-wrap">
                  <ul className="project-selection">
                    {
                      topic.map((item,index) => {
                        return (
                          <li className="project-selection-content" key={index}>
                            <img src={item.itemPicUrl}/>
                            <div></div>
                            <div></div>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
              {
                cateList.map((item,index) => {
                  return (
                    <div key={index}>
                      <ProductList item={item}/>
                      <CutOff/>
                    </div>
                  )
                })
              }
              <div className="recommend-footer">
                <div className="recommend-footer-button">
                  <div>下载APP</div>
                  <div>电脑板</div>
                </div>
                <div className="recommend-footer-text">
                  <div className="recommend-footer-text-copyright">
                    <span>网易公司版权所有 © 1997-</span>
                    <span>2018</span>
                  </div>
                  <div>食品经营许可证：JY13301080111719</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    )
  }
}
export default connect(
  state => ({
    focusList: state.focusList,
    tagList: state.tagList,
    flashSaleIndexVO: state.flashSaleIndexVO,
    topic: state.topic,
    cateList: state.cateList,
    popularItem: state.popularItem,
    newItem: state.newItem,
  }),
  {
    getFocusList,
    getTagList,
    getFlashSaleIndexVO,
    getTopicList,
    getCateList,
    getPopularItemList,
    getNewItemList
  }
)(Main)