import React, {Component} from 'react'
import {connect} from "react-redux";
import Swiper from 'swiper'
import BScroll from 'better-scroll'
import CutOff from '../../components/CutOff/CutOff'
import Topiclist from '../../components/topicList/topicList'

import './topic.less'

import {
  getBanner,
  getColumn,
  getTenFifteen,
  getFindMore,
  getRecommend
} from '../../redux/actions'

class Topic extends Component {

  componentDidMount () {
    this.props.getBanner();
    this.props.getColumn();
    this.props.getTenFifteen();
    this.props.getFindMore();
    this.props.getRecommend();
 /*   this.swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: true
    })*/


  }

  componentWillUpdate(){
    if(this.topSwiper){
      this.topSwiper.destroy()
    }
    this.topSwiper = null
  }

  componentDidUpdate () {

    this.topSwiper = new Swiper('.swiper-container', {
      pagination: { // 圆点指示器的容器div
        el: '.swiper-pagination'

      },
      loop: true, // 可以循环轮播
      // autoplay: true
    })

    if (!this.sss) {
      this.sss = new BScroll('.content-wrap-main', {
        scrollX: true,
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
    } else {
      this.sss.refresh()
    }

    if (!this.xxx) {
      this.xxx = new BScroll('.header-goods-wrap', {
        scrollX: true,
        click: true
      })
    } else {
      this.xxx.refresh()
    }

    if (!this.qqq) {
      this.qqq = new BScroll('.swiper-contend', {
        scrollX: true,
        click: true
      })
    } else {
      this.qqq.refresh()
    }


  }

  state = {
    recommend:this.props.recommend
  }

  componentWillReceiveProps (props) {
    this.setState({recommend:props.recommend})
  }

  render () {
    const {banner,column,tenFifteen,findMore,recommend} = this.props
    console.log('tenFifteen',tenFifteen);
    return (
      <div className='wrap'>
        <div className="header-topic-wrap">
          <i className="iconfont icon-shouye1 header-icon"></i>
          网易严选
          <i className="iconfont icon-gouwuche header-icon"></i>
          <i className="iconfont icon-sousuo header-icon"></i>
        </div>

        <div className='content-wrap-main'>
          <div className="content-wrap">

            <div className="swiper-container">
              <div className="swiper-wrapper">
                {
                  banner.map((item,index)=>{
                    return (
                        <div className="swiper-slide" key={index}>
                          <img src={item.picUrl}/>
                        </div>
                      )
                  })
                }
              </div>
            </div>

            <div className="header-goods-wrap">
              <div className="header-goods-container">
                {
                  column.map((item,index) => {
                    return (
                      <div className="header-goods" key={index}>
                        <img src={item.picUrl}/>
                        <div>{item.title}</div>
                      </div>
                    )
                  })
                }
              </div>
            </div>

            <CutOff/>

            {
              recommend?<Topiclist recommend={recommend}/>:null
            }

            {
              recommend?<Topiclist recommend={recommend}/>:null
            }

            <CutOff/>

            <div className="swiper-contend-wrap">
              <div className="header-text">十点一刻</div>
              <div className="swiper-contend">
                <ul>
                  {
                    tenFifteen.map((item,index) => {
                      return (
                        <li key={index}>
                          <div className="swiper-contend-title">— 今日话题 —</div>
                          <div className="swiper-contend-main">{item.title}</div>
                          <div className="swiper-contend-content">{item.desc}</div>
                          <div className="swiper-contend-annotation">{item.participantNum}人参与话题</div>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>

            <CutOff/>



            <CutOff/>

            <div className="topic-video-wrap">
              <div className="topic-video-title">严选LOOK</div>
              <video className="topic-video"
                     controls
                     poster="http://yanxuan.nosdn.127.net/yx-topic-1531997741819r9mv9q0g.jpg"
              >
                <source src="https://yanxuan.nosdn.127.net/1bb7149aa982ca48d141499e18239170.mp4"
                        type="video/mp4"
                />
              </video>
              <div className="topic-video-avatar">
                <img src="http://yanxuan.nosdn.127.net/be23f31e86d9db771072eb33f60fb067.png"/>选妹
              </div>
              <div className="topic-video-annotation">唤自然系列</div>
            </div>

            <div className="click-more">
              <span className="line-left"></span>
              <span className="click-more-text">更多精彩</span>
              <span className="line-right"></span>
            </div>

            <div className="topic-bottom-list-wrap">
              {
                findMore.map((item,index) => {
                  return (
                    <div className="topic-bottom-list" key={index}>
                      <img src={item.itemPicUrl}/>
                      <div className="topic-bottom-list-text">{item.subTitle}</div>
                    </div>
                  )
                })
              }

            </div>

          </div>
        </div>


      </div>
    )
  }
}
export default connect(
  state => ({
    banner: state.banner,
    column:state.column,
    tenFifteen:state.tenFifteen,
    findMore:state.findMore,
    recommend:state.recommend,
  }),
  {
    getBanner,
    getColumn,
    getTenFifteen,
    getFindMore,
    getRecommend
  }
)(Topic)