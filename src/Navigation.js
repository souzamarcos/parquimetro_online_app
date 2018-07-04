import React from 'react';
import { createBottomTabNavigator, createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import _ from 'lodash';
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
                color: cores.azul,
            },
            indicatorStyle: {
                backgroundColor: cores.azul,
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
    navigationOptions: ({ navigation }) => {
        let tabBarVisible = true;
        let indexAtual = navigation.state.index;
        let telaAtual = navigation.state.routeName;
        let indexParquimetro = _.findIndex(navigation.state.routes, function(r) { return r.key == 'Parquimetro'; });
        
        if (telaAtual == 'TelaPrincipal'
        &&  indexAtual == indexParquimetro) {
          tabBarVisible = false;
        }
        
        return {
            header: tabBarVisible? <Cabecalho backgroundColor="#fff" />: null,
        };
    }
});



export default Navigation;