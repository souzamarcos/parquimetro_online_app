import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  StyleSheet,
  View,
} from 'react-native';
import { defaultStyles } from 'parquimetro-styles';

export default class TelaInicial extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={styles.tela}>
                <Text style={styles.title}>
                    Bem Vindo!
                </Text>
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <View style={styles.buttonTransparentGroup}>
                    <TouchableHighlight
                        onPress={() => this.props.navigation.navigate('Cadastro')}
                        style={styles.buttonTransparentLeft}
                        underlayColor="rgba(0, 0, 0, 0.05)"
                    >
                        <Text style={styles.buttonTransparentText}>
                            Cadastro
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => this.props.navigation.navigate('Login')}
                        style={styles.buttonTransparentRight}
                        underlayColor="rgba(0, 0, 0, 0.05)"
                    >
                        <Text style={styles.buttonTransparentText}>
                            Login
                        </Text>
                    </TouchableHighlight>
                </View>
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
        marginBottom: 30,
    },
    text: {
        ...defaultStyles.text,
        marginBottom: 30,
    },
    buttonTransparentLeft: {
        ...defaultStyles.buttonTransparentLeft,
    },
    buttonTransparentRight: {
        ...defaultStyles.buttonTransparentRight,
    },
    buttonTransparentGroup: {
        ...defaultStyles.buttonTransparentGroup,
        marginTop: 30,
    },
    buttonTransparentText: {
        ...defaultStyles.buttonTransparentText,
    },
});