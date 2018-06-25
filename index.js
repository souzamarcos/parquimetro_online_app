import React, { Component } from 'react';
import {
    View, Text, Image, AppRegistry, StyleSheet, Header,
} from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import TelaInicial from 'parquimetro-components/TelaInicial';
import Cadastro from 'parquimetro-components/Cadastro';
import Login from 'parquimetro-components/Login';
import CompletarCadastro from 'parquimetro-components/CompletarCadastro';
import Historico from 'parquimetro-components/Historico';
import PerfilCadastro from 'parquimetro-components/PerfilCadastro';
import PerfilVeiculo from 'parquimetro-components/PerfilVeiculo';
import PerfilPlaca from 'parquimetro-components/PerfilPlaca';
import Cabecalho from 'parquimetro-components/Cabecalho';
  
const Perfil = createMaterialTopTabNavigator(
    {
        PerfilCadastro: {
            screen: PerfilCadastro,
        },
        PerfilVeiculo: {
            screen: PerfilVeiculo,
        },
        PerfilPlaca: {
            screen: PerfilPlaca,
        },
    },
    {
        swipeEnabled: false,
        animationEnabled: false,
    }
);

const TelaPrincipal = createBottomTabNavigator(
    {
        Perfil: {
            screen: Perfil,
        },
        Historico: {
            screen: Historico,
        },
    },
    {
    }
);
  
const Telas = createStackNavigator({
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
    TelaPrincipal: { 
        screen: TelaPrincipal,
    },
},{
    initialRouteName : 'TelaInicial',
    navigationOptions: {
        headerTitleStyle: { color: '#fff' },
        header: (props) => <Cabecalho {...props} />,
    }
});

AppRegistry.registerComponent('parquimetro_online_app', () => Telas);
