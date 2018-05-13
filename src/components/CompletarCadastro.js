import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  ImageBackground,
  StyleSheet,
  View
} from 'react-native';
import { defaultStyles } from 'parquimetro-styles';

export default class CompletarCadastro extends Component {

    render(){
        return (
            <ImageBackground 
                source={require('../imgs/background_map.png')}
                style={styles.background} 
            >
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>
                        Bem Vindo!
                    </Text>
                    <Text style={styles.cardText}>
                        Fulano, antes de começar precisamos de mais algumas informações
                    </Text>
                    <TouchableHighlight
                        onPress={() => false}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>
                            Completar Cadastro
                        </Text>
                    </TouchableHighlight>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 40,
        width: '80%',
        elevation: 4,
        borderRadius: 5,
    },
    cardTitle: {
        ...defaultStyles.textTitle
    },
    cardText: {
        ...defaultStyles.text
    },
    button: {
        ...defaultStyles.button
    },
    buttonText:{
        ...defaultStyles.buttonText
    },
});