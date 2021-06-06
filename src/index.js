import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(

    <BrowserRouter>

        <Route path="/webfeed/:postId" component={App}></Route>

    </BrowserRouter>, document.getElementById('root'));
