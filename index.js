import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { TabView, TabNavigator, StackNavigator,TabBarBottom,DrawerNavigator } from 'react-navigation';

import App from './src/App';
import TelaInicial from 'parquimetro-components/TelaInicial';
import Cadastro from 'parquimetro-components/Cadastro';
import Login from 'parquimetro-components/Login';
import CompletarCadastro from 'parquimetro-components/CompletarCadastro';
import Historico from 'parquimetro-components/Historico';
import Perfil from 'parquimetro-components/Perfil';

const routesNameVisible = [
    'Parquimetro',
    'Perfil',
    'Historico',
    'Perguntas'
];

const TabScreenNavigator = TabNavigator(
    {
        // Visíveis
        // Parquimetro: {
        //     screen: Historico,
        //     navigationOptions: {
        //         swipeEnabled: false,
        //     }
        // },
        Perfil: {
            screen: Perfil,
            navigationOptions: {
                swipeEnabled: false,
            }
        },
        Historico: {
            screen: Historico,
            navigationOptions: {
                swipeEnabled: false,
            }
        },
        // Perguntas: {
        //     screen: Historico,
        //     navigationOptions: {
        //         swipeEnabled: false,
        //     }
        // },
    },
    {
            
        tabBarOptions: {
            activeTintColor: 'dodgerblue',
        },
        tabBarPosition: 'bottom',
        tabBarComponent: TabBarBottom,
        //initialRouteName: 'Perfil',
    }
);
  
const MainScreenNavigator = StackNavigator({
    
    TelaInicial: {
        screen: TelaInicial,
        navigationOptions: {
            tabBarVisible: false,
            swipeEnabled: false,
            header: null
        }
    },
    Cadastro: {
        screen: Cadastro,
        navigationOptions: {
            tabBarVisible: false,
            swipeEnabled: false,
            header: null
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            tabBarVisible: false,
            swipeEnabled: false,
            header: null
        }
    },
    CompletarCadastro: {
        screen: CompletarCadastro,
        navigationOptions: {
            tabBarVisible: false,
            swipeEnabled: false,
            header: null
        }
    },
    TabScreen: { 
        screen: TabScreenNavigator,
        navigationOptions : {
            header: null
        }
    },
});

AppRegistry.registerComponent('parquimetro_online_app', () => MainScreenNavigator);
