/*
应用中所有接口的请求函数模块
根据接口编写
函数的返回值是promise
 */
import ajax from './ajax'

export const reqFocusList = () => ajax('/focusList')
export const reqHeadCates = () => ajax('/headCates')
export const reqTagList = () => ajax('/tagList')
export const reqNewItemList = () => ajax('/newItemList')
export const reqPopularItemList = () => ajax('/popularItemList')
export const reqFlashSaleIndexVO = () => ajax('/flashSaleIndexVO')
export const reqTopicList = () => ajax('/topicList')
export const reqCateList = () => ajax('/cateList')
export const reqNewItemNewUserList = () => ajax('/newItemNewUserList')

export const reqBanner = () => ajax('/banner')
export const reqColumn = () => ajax('/column')
export const reqRecommend = () => ajax('/recommend')
export const reqTenfifteen = () => ajax('/tenfifteen')
export const reqZhenpin = () => ajax('/zhenpin')
export const reqYxLook = () => ajax('/yxLook')
export const reqFindMore = () => ajax('/findMore')

export const reqCategoryData = () => ajax('/categoryData')