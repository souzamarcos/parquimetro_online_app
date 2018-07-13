import React, { Component } from 'react';
import { AsyncStorage } from "react-native";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from 'parquimetro-reducers';


import Navigation from './Navigation';
import NavigationService from 'parquimetro/NavigationService';

class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Navigation ref={navigatorRef => {
                        NavigationService.setTopLevelNavigator(navigatorRef);
                    }}
                />
            </Provider>
        );
    }
};

export default App;
