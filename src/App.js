import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import { Provider } from 'react-redux';

import { Store, Persistor } from './Store';
import { PersistGate } from 'redux-persist/integration/react';

import Navigation from './Navigation';
import NavigationService from './NavigationService';


class App extends Component {
    render() {
        return (
            <Provider store={Store}>
                <PersistGate loading={(<View><Text>Carregando</Text></View>)} persistor={Persistor}>
                    <Navigation ref={navigatorRef => {
                            NavigationService.setTopLevelNavigator(navigatorRef);
                        }}
                    />
                </PersistGate>
            </Provider>
        );
    }
};

export default App;
