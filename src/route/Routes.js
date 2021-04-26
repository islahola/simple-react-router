import React from 'react'
import Home from '../views/Home';
import {Route} from 'react-router-dom'
import About from '../views/About';
import Contact from '../views/Contact';
import Detail from '../views/Detail'
const Routes = () => {
  return (
    <React.Fragment> 
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About}/>
      <Route path="/contact" exact component={Contact}/>
      <Route path="/detail/:id" exact component={Detail}/>
    </React.Fragment>
  )
}
export default Routes
