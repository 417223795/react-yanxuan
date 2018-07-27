import {
  RECEIVE_FOCUSLIST,
  RECEIVE_HEADCATES,
  RECEIVE_TAGLIST,
  RECEIVE_NEWITEMLIST,
  RECEIVE_POPULARITEMLIST,
  RECEIVE_FLASHSALEINDEXVO,
  RECEIVE_TOPICLIST,
  RECEIVE_CATELIST,
  RECEIVE_BANNER,
  RECEIVE_COLUMN,
  RECEIVE_RECOMMEND,
  RECEIVE_TENFIFTEEN,
  RECEIVE_ZHENPIN,
  RECEIVE_FINDMORE,
  RECEIVE_CATEGORYDATA,
  RECEIVE_USER,
  RECEIVE_NEWITEMNEWUSERLIST
} from './action-types'

import {
  reqFocusList,
  reqHeadCates,
  reqTagList,
  reqNewItemList,
  reqPopularItemList,
  reqFlashSaleIndexVO,
  reqTopicList,
  reqCateList,
  reqBanner,
  reqColumn,
  reqRecommend,
  reqTenfifteen,
  reqZhenpin,
  reqFindMore,
  reqCategoryData,
  reqUser,
  reqNewItemNewUserList
} from '../api'

// 第一页信息

// 同步
const headerList = (header) => ({type:RECEIVE_HEADCATES,data: header})
const focusListList = (focusList) => ({type:RECEIVE_FOCUSLIST,data: focusList})
const tagListList = (tagList) => ({type:RECEIVE_TAGLIST,data: tagList})
const newItemList = (newItem) => ({type:RECEIVE_NEWITEMLIST,data: newItem})
const flashSaleIndexVOList = (flashSaleIndexVO) => ({type:RECEIVE_FLASHSALEINDEXVO,data: flashSaleIndexVO})
const topicList = (topic) => ({type:RECEIVE_TOPICLIST,data: topic})
const cateListList = (cateList) => ({type:RECEIVE_CATELIST,data: cateList})
const popularItemList = (popularItem) => ({type:RECEIVE_POPULARITEMLIST,data: popularItem})

//异步

// 异步获取头部导航列表
export const getHeadCates = () => {
  return async dispatch => {
    const result = await reqHeadCates()
    if (result.code === 0) {
      const header = result.data
      dispatch(headerList(header))
    }
  }
}
//首页轮播
export const getFocusList = () => {
  return async dispatch => {
    const result = await reqFocusList()
    if (result.code === 0) {
      const focusList = result.data
      dispatch(focusListList(focusList))
    }
  }
}
export const getTagList = () => {
  return async dispatch => {
    const result = await reqTagList()
    if (result.code === 0) {
      const tagList = result.data
      dispatch(tagListList(tagList))
    }
  }
}

export const getNewItemList = () => {
  return async dispatch => {
    const result = await reqNewItemList()
    if (result.code === 0) {
      const newItem = result.data
      dispatch(newItemList(newItem))
    }
  }
}
export const getPopularItemList = () => {
  return async dispatch => {
    const result = await reqPopularItemList()
    if (result.code === 0) {
      const popularItem = result.data
      dispatch(popularItemList(popularItem))
    }
  }
}

export const getFlashSaleIndexVO = () => {
  return async dispatch => {
    const result = await reqFlashSaleIndexVO()
    if (result.code === 0) {
      const flashSaleIndexVO = result.data
      dispatch(flashSaleIndexVOList(flashSaleIndexVO))
    }
  }
}

export const getTopicList = () => {
  return async dispatch => {
    const result = await reqTopicList()
    if (result.code === 0) {
      const topic = result.data
      dispatch(topicList(topic))
    }
  }
}

export const getCateList = () => {
  return async dispatch => {
    const result = await reqCateList()
    if (result.code === 0) {
      const cateList = result.data
      dispatch(cateListList(cateList))
    }
  }
}

// 获取第二页信息

// 同步
const bannerList = (banner) => ({type:RECEIVE_BANNER,data: banner})
const columnList = (column) => ({type:RECEIVE_COLUMN,data: column})
const tenFifteenList = (tenFifteen) => ({type:RECEIVE_TENFIFTEEN,data: tenFifteen})
const findMoreList = (findMore) => ({type:RECEIVE_FINDMORE,data: findMore})
const recommendList = (recommend) => ({type:RECEIVE_RECOMMEND,data: recommend})

// 异步

// reqBanner  reqColumn  reqTenfifteen reqRecommend
export const getBanner = () => {
  return async dispatch => {
    const result = await reqBanner()
    if (result.code === 0) {
      const banner = result.data
      dispatch(bannerList(banner))
    }
  }
}
export const getColumn = () => {
  return async dispatch => {
    const result = await reqColumn()
    if (result.code === 0) {
      const column = result.data
      dispatch(columnList(column))
    }
  }
}
export const getTenFifteen = () => {
  return async dispatch => {
    const result = await reqTenfifteen()
    if (result.code === 0) {
      const tenFifteen = result.data
      dispatch(tenFifteenList(tenFifteen))
    }
  }
}

export const getFindMore = () => {
  return async dispatch => {
    const result = await reqFindMore()
    if (result.code === 0) {
      const findMore = result.data
      dispatch(findMoreList(findMore))
    }
  }
}

export const getRecommend = () => {
  console.log(1111);
  return async dispatch => {
    const result = await reqRecommend()
    if (result.code === 0) {
      const recommend = result.data
      dispatch(recommendList(recommend))
    }
  }
}

// 第三页

// 同步
const categoryDataList = (categoryData) => ({type:RECEIVE_CATEGORYDATA,data: categoryData})

// 异步
// reqBanner
export const getCategoryData = () => {
  return async dispatch => {
    const result = await reqCategoryData()
    if (result.code === 0) {
      const categoryData = result.data
      dispatch(categoryDataList(categoryData))
    }
  }
}