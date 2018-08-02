import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

//telas
import TelaInicial from './components/TelaInicial';
import TelaCadastroUsuario from './components/TelaCadastroUsuario';
import TelaLogin from './components/TelaLogin';
import TelaCompletarCadastroUsuario from './components/TelaCompletarCadastroUsuario';
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
import TelaSobre from './components/TelaSobre';

import Ionicons from 'react-native-vector-icons/Ionicons';
  
const TelaPrincipal = createBottomTabNavigator(
    {
        Parquimetro: TelaParquimetro,
        Historico: TelaHistorico,
        PerfilCartao: TelaCartoes,
        PerfilVeiculo: TelaVeiculos,
        Configuracao: TelaConfiguracao,
    },
    {
        initialRouteName : 'Parquimetro',
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
                    case 'Parquimetro':
                        iconName = `md-time`;
                        break;
                    case 'Historico':
                        iconName = `md-list`;
                        break;
                    case 'PerfilCartao':
                        iconName = `md-card`;
                        break;
                    case 'PerfilVeiculo':
                        iconName = `md-car`;
                        break;
                    case 'Configuracao':
                        iconName = `md-settings`;
                        break;
                    default:
                        iconName = `md-settings`;
                        break;
                }
        
                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
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
    Cadastro: {
        screen: TelaCadastroUsuario,
        navigationOptions: {
            tabBarVisible: false,
            swipeEnabled: false,
            header: null
        }
    },
    Login: {
        screen: TelaLogin,
        navigationOptions: {
            tabBarVisible: false,
            swipeEnabled: false,
            header: null
        }
    },
    CompletarCadastro: {
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
    FormVeiculo: {
        screen: TelaFormVeiculo,
        navigationOptions: {
            title: 'Veículo',
            swipeEnabled: false,
            tabBarVisible: true,
        }
    },
    FormCartao: {
        screen: TelaFormCartao,
        navigationOptions: {
            title: 'Cartão',
            swipeEnabled: false,
            tabBarVisible: true,
        }
    },
    PerfilPessoal: {
        screen: TelaMinhaConta,
        navigationOptions: {
            title: 'Minha conta',
        }
    },
    Perguntas: {
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
    initialRouteName : 'TelaInicial',
    navigationOptions: {
        
    }
});



export default Navigation;