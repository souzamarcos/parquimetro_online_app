import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  StyleSheet,
  ScrollView
} from 'react-native';
import { defaultStyles } from '../styles';
import cores from '../styles/cores';

export default class TelaInicial extends Component {

    render(){
        return (
            <ScrollView style={{ width: '100%' }} contentContainerStyle={styles.tela}>
                <Text style={styles.title}>
                    Bem Vindo!
                </Text>
                <Text style={styles.text}>
                    Esperamos que você tenha uma boa experiência ao usar o aplicativo. Pague o estacionamento rotativo de uma maneira rápida e fácil. Tudo sem nenhuma complicação.
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
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    tela: {
        ...defaultStyles.telaPaddingHorizontalGrande,
        backgroundColor: cores.branco,
        flexGrow: 1,
        justifyContent: 'center',
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