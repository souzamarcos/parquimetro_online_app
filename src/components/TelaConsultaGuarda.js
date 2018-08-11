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

export default class TelaConsultaGuarda extends Component {

    render(){
        return (
            <ScrollView contentContainerStyle={styles.tela}>
                <Cabecalho titulo="Consulta" style={styles.cabecalho} />
                <Text style={styles.title}>
                    Consultar Veículo
                </Text>
                <TextInputMask
                    placeholder="Placa"
                    type="custom"
                    style={styles.input}
                    onChangeText={ (placa)=> false }
                    underlineColorAndroid={cores.cinza}
                    options={{
                        mask: 'AAA-9999',
                    }}
                />
                <TouchableHighlight
                    onPress={() => this.props.navigation.navigate('TelaRetornoConsultaGuarda')}
                    style={styles.botaoVerde}
                    underlayColor="rgba(0, 0, 0, 0.05)"
                >
                    <Text style={styles.botaoVerdeText}>
                        Buscar
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