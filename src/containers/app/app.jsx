/*
入口js
 */
import React, {Component} from 'react';
// 路由
import {Route, Switch, withRouter} from 'react-router-dom'

import FooterGuide from '../../components/FooterGuide/FooterGuide'

import Main from '../main/main'
import Topic from '../topic/topic'
import Item from '../item/item'
import Cart from '../cart/cart'
import Login from '../login/login'
import List from '../list/list'
import Phone from '../phone/phone'
class App extends Component {
  render () {
    return (
      <div className='wrap'>
        <Switch>
          <Route path='/topic' component={Topic}/>
          <Route path='/item' component={Item}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/login' component={Login}/>
          <Route path='/list' component={List}/>
          <Route path='/phone' component={Phone}/>
          <Route path='/main' component={Main}/>
          <Route component={Main}/>
        </Switch>
        <FooterGuide/>
      </div>
    )
  }
}
export default withRouter(App)
