import React from 'react'
import './index.css'
import Navbar from './Navbar';
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

const App = () => {

  return (
    <Router>
      <div className= 'w-full App max-w-[1000px] my-10 mx-auto p-4"' >
          <Navbar/>
      <div className="content max-w-[1000px] my-10 mx-auto p-4" >  
        <Switch>
          <Route exact path='/'>
          <Home />
          </Route>
          <Route path='/create'>
          <Create />
          </Route>
          <Route path='/blogs/:id'>
          <BlogDetails />
          </Route>
          <Route path='*'>
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router> 
  )
    
}
 
export default App
