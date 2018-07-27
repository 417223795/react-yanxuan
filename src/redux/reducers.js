/*
包含n个reducer函数: 根据老的state和指定的action返回一个新的state
 */
import {combineReducers} from 'redux'

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
  RECEIVE_NEWITEMNEWUSERLIST
} from './action-types'
function focusList(state=[], action) {
  switch (action.type) {
    case RECEIVE_FOCUSLIST:
      return action.data
    default:
      return state
  }
}
function header(state=[], action) {
  switch (action.type) {
    case RECEIVE_HEADCATES:
      return action.data
    default:
      return state
  }
}
function tagList(state=[], action) {
  switch (action.type) {
    case RECEIVE_TAGLIST:
      return action.data
    default:
      return state
  }
}

function newItem(state=[], action) {
  switch (action.type) {
    case RECEIVE_NEWITEMLIST:
      return action.data
    default:
      return state
  }
}
function banner(state=[], action) {
  switch (action.type) {
    case RECEIVE_BANNER:
      return action.data
    default:
      return state
  }
}
function column(state=[], action) {
  switch (action.type) {
    case RECEIVE_COLUMN:
      return action.data
    default:
      return state
  }
}

function recommend(state={}, action) {
  switch (action.type) {
    case RECEIVE_RECOMMEND:
      return action.data
    default:
      return state
  }
}
function tenFifteen(state=[], action) {
  switch (action.type) {
    case RECEIVE_TENFIFTEEN:
      return action.data
    default:
      return state
  }
}
function flashSaleIndexVO(state=[], action) {
  switch (action.type) {
    case RECEIVE_FLASHSALEINDEXVO:
      return action.data
    default:
      return state
  }
}

function topic(state=[], action) {
  switch (action.type) {
    case RECEIVE_TOPICLIST:
      return action.data
    default:
      return state
  }
}

function cateList(state=[], action) {
  switch (action.type) {
    case RECEIVE_CATELIST:
      return action.data
    default:
      return state
  }
}

function popularItem(state=[], action) {
  switch (action.type) {
    case RECEIVE_POPULARITEMLIST:
      return action.data
    default:
      return state
  }
}

function findMore(state=[], action) {
  switch (action.type) {
    case RECEIVE_FINDMORE:
      return action.data
    default:
      return state
  }
}
function categoryData(state=[], action) {
  switch (action.type) {
    case RECEIVE_CATEGORYDATA:
      return action.data
    default:
      return state
  }
}

export default combineReducers({
  focusList,
  header,
  tagList,
  newItem,
  banner,
  column,
  recommend,
  tenFifteen,
  flashSaleIndexVO,
  topic,
  cateList,
  popularItem,
  findMore,
  categoryData,
})

