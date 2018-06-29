import React, { Component } from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from 'parquimetro-reducers';

import Navigation from './Navigation';

class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Navigation />
            </Provider>
        );
    }
};

export default App;
