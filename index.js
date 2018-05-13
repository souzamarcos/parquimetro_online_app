import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { TabView, TabNavigator,TabBarBottom,DrawerNavigator } from 'react-navigation';

import App from './src/App';
import TelaInicial from 'parquimetro-components/TelaInicial';
import Cadastro from 'parquimetro-components/Cadastro';
import Login from 'parquimetro-components/Login';
import CompletarCadastro from 'parquimetro-components/CompletarCadastro';
import Historico from 'parquimetro-components/Historico';

const routesNameVisible = [
    'Parquimetro',
    'Perfil',
    'Historico',
    'Perguntas'
];

const SimpleApp = TabNavigator(
    {
        Historico: {
            screen: Historico,
            navigationOptions: {
                swipeEnabled: false,
            }
        },
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
        /////
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
        tabBarPosition: 'bottom',
        tabBarComponent: ({ navigation, ...props }) => (
            <TabBarBottom 
                {...props}
                navigation={{
                    ...navigation,
                    state: { ...navigation.state, routes: navigation.state.routes.filter(r => routesNameVisible.indexOf(r.routeName) > -1 )}
                }}
            />
        ),
    }
);

AppRegistry.registerComponent('parquimetro_online_app', () => SimpleApp);
