import React from 'react'
import Home from './components/Home'
import {BrowserRouter as Router, Switch, Route, HashRouter} from "react-router-dom";
import Project1 from './components/single-project/Project1';
import Project2 from './components/single-project/Project2';
import Project3 from './components/single-project/Project3';
import Project4 from './components/single-project/Project4';
import Project5 from './components/single-project/Project5';
import Project6 from './components/single-project/Project6';
import Project7 from './components/single-project/Project7';
import Project8 from './components/single-project/Project8';
import Project9 from './components/single-project/Project9';





const Routes = (props)=>{


    return(
        <HashRouter>
            <Switch>
                <Route path = '/' exact component={Home}/>
                <Route path='/project1' component={Project1}/>
                <Route path='/project2' component={Project2}/>
                <Route path='/project3' component={Project3}/>
                <Route path='/project4' component={Project4}/>
                <Route path='/project5' component={Project5}/>
                <Route path='/project6' component={Project6}/>
                <Route path='/project7' component={Project7}/>
                <Route path='/project8' component={Project8}/>
                <Route path='/project9' component={Project9}/>
            </Switch>
        </HashRouter>
    )
}

export default Routes