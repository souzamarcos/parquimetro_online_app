import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  StyleSheet,
  View,
} from 'react-native';
import { defaultStyles } from '../styles';
import cores from '../styles/cores';

export default class TelaInicial extends Component {

    render(){
        return (
            <View style={styles.tela}>
                <Text style={styles.title}>
                    Bem Vindo!
                </Text>
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <TouchableHighlight
                    onPress={() => this.props.navigation.navigate('TelaLogin')}
                    style={styles.botaoVerde}
                    underlayColor="rgba(0, 0, 0, 0.05)"
                >
                    <Text style={styles.botaoVerdeText}>
                        Login
                    </Text>
                    
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => this.props.navigation.navigate('TelaCadastroUsuario')}
                    style={styles.botaoAzul}
                    underlayColor="rgba(0, 0, 0, 0.05)"
                >
                    <Text style={styles.botaoAzulText}>
                        Cadastro
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tela: {
        ...defaultStyles.telaFull,
        ...defaultStyles.telaCentralizada,
        ...defaultStyles.telaPaddingHorizontalGrande,
    },
    title: {
        ...defaultStyles.textTitle,
        color: cores.azul,
        marginBottom: 30,
    },
    text: {
        ...defaultStyles.text,
        marginBottom: 30,
    },
    botaoVerde: {
        ...defaultStyles.botaoVerde,
        marginBottom: 20,
    },
    botaoVerdeText: {
        ...defaultStyles.botaoVerdeText,
    },
    botaoAzul: {
        ...defaultStyles.botaoAzul,
    },
    botaoAzulText: {
        ...defaultStyles.botaoAzulText,
    },
});