import React, { Component } from 'react';

import { createBottomTabNavigator, createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import cores from 'parquimetro-styles/cores';

//telas
import TelaInicial from 'parquimetro-components/TelaInicial';
import Cadastro from 'parquimetro-components/Cadastro';
import Login from 'parquimetro-components/Login';
import CompletarCadastro from 'parquimetro-components/CompletarCadastro';
import Historico from 'parquimetro-components/Historico';
import Parquimetro from 'parquimetro-components/Parquimetro';
import PerfilPessoal from 'parquimetro-components/PerfilPessoal';
import PerfilVeiculo from 'parquimetro-components/PerfilVeiculo';
import PerfilCartao from 'parquimetro-components/PerfilCartao';
import Perguntas from 'parquimetro-components/Perguntas';
import Cabecalho from 'parquimetro-components/Cabecalho';
  
const Perfil = createMaterialTopTabNavigator(
    {
        PerfilPessoal: {
            screen: PerfilPessoal,
            navigationOptions: {
                title: 'Pessoal',
            }
        },
        PerfilVeiculo: {
            screen: PerfilVeiculo,
            navigationOptions: {
                title: 'Veículo'
            }
        },
        PerfilCartao: {
            screen: PerfilCartao,
            navigationOptions: {
                title: 'Cartão'
            }
        },
    },
    {
        swipeEnabled: false,
        animationEnabled: false,
        tabBarOptions: {
            labelStyle: {
                color: cores.principal,
            },
            indicatorStyle: {
                backgroundColor: cores.principal,
            },
            style: {
              backgroundColor: cores.telaBackgroundColor,
            },
        }
    }
);

const TelaPrincipal = createBottomTabNavigator(
    {
        Parquimetro: Parquimetro,
        Perfil: Perfil,
        Historico: Historico,
        Perguntas: Perguntas,
    },
    {
    }
);
  
const Navigation = createStackNavigator({
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
        navigationOptions: {
            swipeEnabled: false,
        }
    },
},{
    initialRouteName : 'TelaPrincipal',
    navigationOptions: {
        header: <Cabecalho />,
    }
});

export default Navigation;