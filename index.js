import React, { Component } from 'react';
import {
    View, Text, Image, AppRegistry, StyleSheet, Header,
} from 'react-native';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from 'parquimetro-reducers';

import { createBottomTabNavigator, createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import colors from 'parquimetro-styles/colors';

//telas
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
        PerfilPlaca: {
            screen: PerfilPlaca,
            navigationOptions: {
                title: 'Placa'
            }
        },
    },
    {
        swipeEnabled: false,
        animationEnabled: false,
        tabBarOptions: {
            labelStyle: {
                color: colors.principal,
            },
            indicatorStyle: {
                backgroundColor: colors.principal,
            },
            style: {
              backgroundColor: colors.telaBackgroundColor,
            },
        }
    }
);

const TelaPrincipal = createBottomTabNavigator(
    {
        Perfil: {
            screen: createStackNavigator(
                {
                    screen: Perfil
                },
                {
                    navigationOptions: ({ navigation, screenProps, navigationOptions  }) => {
                        return {
                            headerTitleStyle: { color: '#fff' },
                            title: 'Historico',
                            header: props => <Cabecalho />,
                        }
                    } 
                }
            ),
        },
        Historico: {
            screen: createStackNavigator(
                {
                    screen: Historico
                },
                {
                    navigationOptions: {
                        headerTitleStyle: { color: '#fff' },
                        title: 'Historico',
                        header: props => <Cabecalho {...props } titulo="Histórico"  />,
                    } 
                }
            ),
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
        navigationOptions: {
            swipeEnabled: false,
            header: null
        }
    },
},{
    initialRouteName : 'TelaPrincipal',
});

class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Telas />
            </Provider>
        );
    }
};

AppRegistry.registerComponent('parquimetro_online_app', () => App);
