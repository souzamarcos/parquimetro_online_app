import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Store from './Store';

import Navigation from './Navigation';
import NavigationService from './NavigationService';

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
