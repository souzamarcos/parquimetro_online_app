import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { TabNavigator,TabBarBottom,DrawerNavigator } from 'react-navigation';

import App from './src/App';
import TelaInicial from './src/components/TelaInicial';
import CompletarCadastro from './src/components/CompletarCadastro';


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
        TelaInicial: {
            screen: TelaInicial,
            navigationOptions: {
                tabBarVisible: false,
                swipeEnabled: false,
            }
        },
        CompletarCadastro: {
            screen: CompletarCadastro,
            navigationOptions: {
                tabBarVisible: false,
                swipeEnabled: false,
            }
        },
        Parquimetro: {
            screen: TelaInicial,
        },
        Perfil: {
            screen: TelaInicial,
        },
        Relatorio: {
            screen: TelaInicial,
        },
        Perguntas: {
            screen: TelaInicial,
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
