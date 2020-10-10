import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from '../Views/Home'
import Result from '../Views/Result'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} initial = {true} hideNavBar={true} />
         <Scene key = "result" component = {Result} title = "Result" />
      </Scene>
   </Router>
)
export default Routes