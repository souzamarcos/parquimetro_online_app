import React from 'react';
import { createBottomTabNavigator, createStackNavigator, Header, createMaterialTopTabNavigator } from 'react-navigation';
import _ from 'lodash';
import cores from './styles/cores';

//telas
import TelaInicial from './components/TelaInicial';
import Cadastro from './components/Cadastro';
import Login from './components/Login';
import CompletarCadastro from './components/CompletarCadastro';
import Historico from './components/Historico';
import HistoricoGuarda from './components/HistoricoGuarda';
import Parquimetro from './components/Parquimetro';
import PerfilPessoal from './components/PerfilPessoal';
import PerfilVeiculo from './components/PerfilVeiculo';
import PerfilCartao from './components/PerfilCartao';
import Perguntas from './components/Perguntas';
import Cabecalho from './components/Cabecalho';
import FormVeiculo from './components/FormVeiculo';
import FormCartao from './components/FormCartao';
  
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
        initialRouteName : 'Parquimetro',
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
        navigationOptions: (props) => {
            const { navigation } = props;
    
            let tabBarVisible = true;
            let backgroundColor = '#fff';
            let indexAtual = navigation.state.index;
            let telaAtual = navigation.state.routeName;
            let indexParquimetro = _.findIndex(navigation.state.routes, function(r) { return r.key == 'Parquimetro'; });
            let indexPerguntas = _.findIndex(navigation.state.routes, function(r) { return r.key == 'Perguntas'; });
            let indexHistorico = _.findIndex(navigation.state.routes, function(r) { return r.key == 'Historico'; });
            
            if (telaAtual == 'TelaPrincipal')
            {
                if(indexAtual == indexParquimetro) 
                {
                    tabBarVisible = false;
                }
                if(indexAtual == indexPerguntas
                || indexAtual == indexHistorico)
                {
                    backgroundColor = '#e6ebee';
                }
            }
            
            return {
                header: tabBarVisible? <Cabecalho backgroundColor={backgroundColor} />: null,
            };
        }
    },
    FormVeiculo: {
        screen: FormVeiculo,
        navigationOptions: {
            title: 'Veículo',
            swipeEnabled: false,
            tabBarVisible: true,
        }
    },
    FormCartao: {
        screen: FormCartao,
        navigationOptions: {
            title: 'Cartão',
            swipeEnabled: false,
            tabBarVisible: true,
        }
    },
},{
    initialRouteName : 'Login',
    navigationOptions: {
        
    }
});



export default Navigation;