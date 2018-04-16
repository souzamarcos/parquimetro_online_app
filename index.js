import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { TabNavigator,TabBarBottom,DrawerNavigator } from 'react-navigation';

import App from './src/App';
import TelaInicial from './src/components/TelaInicial';
import Cadastro from './src/components/Cadastro';
import Login from './src/components/Login';
import CompletarCadastro from './src/components/CompletarCadastro';

const SimpleApp = new TabNavigator(
    {
        TelaInicial: {
            screen: TelaInicial,
            navigationOptions: {
                tabBarVisible: false,
                swipeEnabled: false,
            }
        },
        Cadastro: {
            screen: Cadastro,
            navigationOptions: {
                tabBarVisible: false,
                swipeEnabled: false,
            }
        },
        Login: {
            screen: Login,
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
