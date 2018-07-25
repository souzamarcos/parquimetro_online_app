import React, { Component } from 'react';
import { AsyncStorage } from "react-native";
import { Provider } from 'react-redux';

import Store from 'parquimetro/Store';

import Navigation from './Navigation';
import NavigationService from 'parquimetro/NavigationService';

class App extends Component {
    render() {
        return (
            <Provider store={Store}>
                <Navigation ref={navigatorRef => {
                        NavigationService.setTopLevelNavigator(navigatorRef);
                    }}
                />
            </Provider>
        );
    }
};

export default App;
