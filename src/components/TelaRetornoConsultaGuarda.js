import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  StyleSheet,
  View,
  ScrollView
} from 'react-native';
import { defaultStyles } from '../styles';
import cores from '../styles/cores';
import Cabecalho from './Cabecalho';
import { TextInputMask } from 'react-native-masked-text';

export default class TelaRetornoConsultaGuarda extends Component {

    state = {
        // sessao: {
        //     id: 10
        //     //mais propriedades
        // },
        sessao: null
    }

    render(){
        return (
            <ScrollView contentContainerStyle={styles.tela}>
                <Cabecalho 
                    titulo={
                    this.state.sessao ?
                        'Consulta Sucesso' :
                        'Consulta Erro'
                    } 
                style={styles.cabecalho} />
                <Text style={[styles.title, { color: this.state.sessao ? cores.verde : cores.vermelho} ]}>
                    {
                        this.state.sessao ?
                        'Veículo cadastrado' :
                        'Veículo não registrado'
                    }
                </Text>
                {
                    this.state.sessao ?
                        <Text style={styles.text}>
                            O veículo com placa KPO-5359 foi registrado no parquímetro localizado em Av. Paulo de Frontin - Aterrado - Volta Redonda.
                        </Text>
                    :
                        <Text style={styles.text}>
                            O veículo com placa KPO-5359 não foi registrado.
                        </Text>
                }
                
                <TouchableHighlight
                    onPress={() => this.props.navigation.navigate('TelaConsultaGuarda')}
                    style={styles.botaoVerde}
                    underlayColor="rgba(0, 0, 0, 0.05)"
                >
                    <Text style={styles.botaoVerdeText}>
                        Fazer nova busca
                    </Text>
                    
                </TouchableHighlight>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    tela: {
        ...defaultStyles.telaFull,
        ...defaultStyles.telaCentralizada,
        ...defaultStyles.telaPaddingHorizontalGrande,
    },
    telaCentralizada: {
        ...defaultStyles.telaFull,
        ...defaultStyles.telaCentralizada,
    },
    cabecalho: {
        marginBottom: 40,
    },
    title: {
        ...defaultStyles.textTitle,
        color: cores.azul,
        marginVertical: 40,
    },
    text: {
        ...defaultStyles.text,
        marginBottom: 40,
    },
    input: {
        ...defaultStyles.input,
        marginBottom: 40,
    },
    botaoVerde: {
        ...defaultStyles.botaoVerde,
        marginBottom: 40,
    },
    botaoVerdeText: {
        ...defaultStyles.botaoVerdeText,
    },
});