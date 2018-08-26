import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

//telas
import TelaInicial from './components/TelaInicial';
import TelaCadastroUsuario from './components/TelaCadastroUsuario';
import TelaLogin from './components/TelaLogin';
import TelaCompletarCadastroUsuario from './components/TelaCompletarCadastroUsuario';
import TelaConsultaGuarda from './components/TelaConsultaGuarda';
import TelaHistorico from './components/TelaHistorico';
import TelaHistoricoGuarda from './components/TelaHistoricoGuarda';
import TelaParquimetro from './components/TelaParquimetro';
import TelaMinhaConta from './components/TelaMinhaConta';
import TelaVeiculos from './components/TelaVeiculos';
import TelaCartoes from './components/TelaCartoes';
import TelaConfiguracao from './components/TelaConfiguracao';
import TelaPerguntasFrequentes from './components/TelaPerguntas';
import TelaFormVeiculo from './components/TelaFormVeiculo';
import TelaFormCartao from './components/TelaFormCartao';
import TelaRetornoConsultaGuarda from './components/TelaRetornoConsultaGuarda';
import TelaSobre from './components/TelaSobre';

import Ionicons from 'react-native-vector-icons/Ionicons';
  
const TelaPrincipal = createBottomTabNavigator(
    {
        TelaParquimetro: TelaParquimetro,
        TelaHistorico: TelaHistorico,
        TelaCartoes: TelaCartoes,
        TelaVeiculos: TelaVeiculos,
        TelaConfiguracao: TelaConfiguracao,
    },
    {
        initialRouteName : 'TelaParquimetro',
        tabBarOptions: {
            showLabel: false,
            style: {
                backgroundColor: '#fff',
            },
        },
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                switch(routeName){
                    case 'TelaParquimetro':
                        iconName = `md-time`;
                        break;
                    case 'TelaHistorico':
                        iconName = `md-list`;
                        break;
                    case 'TelaCartoes':
                        iconName = `md-card`;
                        break;
                    case 'TelaVeiculos':
                        iconName = `md-car`;
                        break;
                    case 'TelaConfiguracao':
                        iconName = `md-settings`;
                        break;
                    default:
                        iconName = `md-settings`;
                        break;
                }

                return <Ionicons name={iconName} size={25} color={tintColor} />;
              },
        })
    }
);
const TelaPrincipalGuarda = createBottomTabNavigator(
    {
        TelaConsultaGuarda: TelaConsultaGuarda,
        TelaHistoricoGuarda: TelaHistoricoGuarda,
        TelaConfiguracao: TelaConfiguracao,
    },
    {
        initialRouteName : 'TelaConsultaGuarda',
        tabBarOptions: {
            showLabel: false,
            style: {
                backgroundColor: '#fff',
            },
        },
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                switch(routeName){
                    case 'TelaConsultaGuarda':
                        iconName = `md-search`;
                        break;
                    case 'TelaHistoricoGuarda':
                        iconName = `md-list`;
                        break;
                    case 'TelaConfiguracao':
                        iconName = `md-settings`;
                        break;
                    default:
                        iconName = `md-settings`;
                        break;
                }

                return <Ionicons name={iconName} size={25} color={tintColor} />;
              },
        })
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
    TelaCadastroUsuario: {
        screen: TelaCadastroUsuario,
        navigationOptions: {
            tabBarVisible: false,
            swipeEnabled: false,
            header: null
        }
    },
    TelaLogin: {
        screen: TelaLogin,
        navigationOptions: {
            tabBarVisible: false,
            swipeEnabled: false,
            header: null
        }
    },
    TelaCompletarCadastroUsuario: {
        screen: TelaCompletarCadastroUsuario,
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
    TelaPrincipalGuarda: { 
        screen: TelaPrincipalGuarda,
        navigationOptions: {
            swipeEnabled: false,
            header: null
        }
    },
    TelaRetornoConsultaGuarda: {
        screen: TelaRetornoConsultaGuarda,
        navigationOptions: {
            swipeEnabled: false,
            header: null
        }
    },
    TelaFormVeiculo: {
        screen: TelaFormVeiculo,
    },
    TelaFormCartao: {
        screen: TelaFormCartao,
        navigationOptions: {
            title: 'Cartão',
            swipeEnabled: false,
            tabBarVisible: true,
        }
    },
    TelaMinhaConta: {
        screen: TelaMinhaConta,
        navigationOptions: {
            title: 'Minha conta',
        }
    },
    TelaPerguntasFrequentes: {
        screen: TelaPerguntasFrequentes,
        navigationOptions: {
            title: 'Perguntas frequentes',
        }
    },
    TelaSobre: {
        screen: TelaSobre,
        navigationOptions: {
            title: 'Sobre',
        }
    }
},{
    initialRouteName : 'TelaLogin',
    navigationOptions: {
        
    }
});



export default Navigation;