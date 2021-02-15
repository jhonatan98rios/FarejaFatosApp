import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from '../Views/Home'
import Search from '../Views/Search'
import Result from '../Views/Result'
import HotNews from '../Views/HotNews'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} initial = {true} hideNavBar={true} />
         <Scene key = "search" component = {Search} title = "Verificação" />
         <Scene key = "result" component = {Result} title = "Resultado" />
         <Scene key = "hotNews" component = {HotNews} title = "Em Alta" />
      </Scene>
   </Router>
)
export default Routes