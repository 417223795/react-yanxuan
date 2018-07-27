import Mock from 'mockjs'
import msite from './msite'
import shiwu from './shiwu.json'
import category from './category.json'

// 这里是使用的mock模拟的后台数据进行的获取数据的操作，一般这里我们都会设置一个code来确定数据接收成功
Mock.mock('/focusList', {code: 0, data: msite.focusList})
Mock.mock('/headCates', {code: 0, data: msite.headCateList})
Mock.mock('/tagList', {code: 0, data: msite.tagList})
Mock.mock('/newItemList', {code: 0, data: msite.newItemList})
Mock.mock('/popularItemList', {code: 0, data: msite.popularItemList})
Mock.mock('/flashSaleIndexVO', {code: 0, data: msite.flashSaleIndexVO})
Mock.mock('/topicList', {code: 0, data: msite.topicList})
Mock.mock('/cateList', {code: 0, data: msite.cateList})
Mock.mock('/newItemNewUserList', {code: 0, data: msite.newItemNewUserList})
Mock.mock('/newItemOldUserList', {code: 0, data: msite.newItemOldUserList})
Mock.mock('/policyDescList', {code: 0, data: msite.policyDescList})
Mock.mock('/popularItemNewUserList', {code: 0, data: msite.popularItemNewUserList})
Mock.mock('/popularItemOldUserList', {code: 0, data: msite.popularItemOldUserList})

Mock.mock('/banner', {code: 0, data: shiwu.banner})
Mock.mock('/column', {code: 0, data: shiwu.column})
Mock.mock('/recommend', {code: 0, data: shiwu.recommend})
Mock.mock('/tenfifteen', {code: 0, data: shiwu.tenfifteen})
Mock.mock('/zhenpin', {code: 0, data: shiwu.zhenpin})
Mock.mock('/yxLook', {code: 0, data: shiwu.yxLook})
Mock.mock('/findMore', {code: 0, data: shiwu.findMore})

Mock.mock('/categoryData', {code: 0, data: category})
