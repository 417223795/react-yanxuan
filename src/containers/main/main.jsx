import React, {Component} from 'react'

import MainHeader from './mainHeader/mainHeader'
import MainContent from './mainContent/mainContent'
import MainLiving from './mainLiving/mainLiving'

import './main.less'
import {Route, Switch, withRouter} from 'react-router-dom'

class Main extends Component {




  render () {
    return (
      <div className='main-wrap'>

        <div className="main-wrap-container">

          <MainHeader/>

         {/* <Switch>
            <Route path='/topic' component={Topic}/>
            <Route path='/item' component={Item}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/login' component={Login}/>
            <Route path='/list' component={List}/>
            <Route component={Main}/>
          </Switch>
          <FooterGuide/>*/}

          <Switch>
            <Route path='/main' component={MainContent}/>
            <Route path='/list:index' component={MainLiving}/>
          </Switch>


        </div>
      </div>
    )
  }
}
export default withRouter(Main)