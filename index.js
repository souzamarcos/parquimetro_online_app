import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { TabNavigator,TabBarBottom,DrawerNavigator } from 'react-navigation';

import App from './src/App';
import CompletarCadastro from './src/components/CompletarCadastro';
import SecondScreen from './src/SecondScreen';


class reactNavigationSample extends Component {

    render(){
      const { navigation } = this.props;
  
      return (
        <App />
      );
    }
}
  
const SimpleApp = new TabNavigator(
    {
        CompletarCadastro: {
            screen: CompletarCadastro,
            navigationOptions: {
                tabBarVisible: false,
                swipeEnabled: false,
            }
        },
        Parquimetro: {
            screen: SecondScreen,
        },
        Perfil: {
            screen: SecondScreen,
        },
        Relatorio: {
            screen: SecondScreen,
        },
        Perguntas: {
            screen: SecondScreen,
        },
    },
    {
        tabBarOptions: {
            activeTintColor: 'dodgerblue',
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
    }
);

AppRegistry.registerComponent('parquimetro_online_app', () => SimpleApp);
