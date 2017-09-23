import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './HomePage';
import DetailsPage from './DetailsPage';

const App = () => {
    return (
        <BrowserRouter>
            <div className="main">
                <Route exact path="/" component={ HomePage } />
                <Route path="/details" component={ DetailsPage } />
            </div>
        </BrowserRouter>
    );
}

export default App;
