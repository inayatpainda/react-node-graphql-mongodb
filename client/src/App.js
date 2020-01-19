import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/main"
import Edit from './components/Edit';
import Create from './components/Create';
 import Show from './components/Show';
const App = () => {
    return (
        <Router>
            <div>
                <Route exact path='/' component={Main}/>
                <Route path='/edit/:id' component={Edit} />
                <Route path='/create' component={Create} />
                <Route path='/show/:id' component={Show} />
            </div>
        </Router>
    );

}


export default App;
