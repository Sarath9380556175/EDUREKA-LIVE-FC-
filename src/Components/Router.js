import React from 'react';
import {Route , BrowserRouter } from 'react-router-dom';
import Filter from './Filter';
import Details from './Details';
import Home from './Home';
import Thankyou from './thankyou';
class Router extends React.Component{
  
    render()
    {
        
    
        return(
            <BrowserRouter>
            <Route exact path ='/'  component = {Home} />
            <Route exact path ='/filter'  component = {Filter} />
            <Route path='/details'  component= {Details}/>
            <Route path='/thankyou'  component= {Thankyou}/>
            </BrowserRouter>
        
            
        )
    }
    
}

export default Router;