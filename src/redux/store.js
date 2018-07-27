/*
redux最核心的store对象模块，这个模块写完之后基本就不用再更改了
 */

import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
//注意这里不需要添加{} 因为模块reducers是默认暴露的
import reducers from './reducers'

export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))
