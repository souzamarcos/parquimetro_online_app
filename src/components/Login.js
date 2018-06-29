import React, { Component } from 'react';
import {
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  View,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { defaultStyles } from 'parquimetro-styles';
import { cores } from 'parquimetro-styles/cores';

export default class Cadastro extends Component {

    constructor(props){
        super(props);

        this.state = {
            nome: '',
            email: '',
            senha: '',
        };
    }

    componentDidMount() {
        Keyboard.dismiss();
    }

    render(){
        return (
            <KeyboardAwareScrollView
                resetScrollToCoords={{ x: 0, y: 0 }}
                contentContainerStyle={styles.tela}
                scrollEnabled={false}              
            >
                <View style={{ width: '100%' }}>
                    <Text style={styles.title}>
                        Bem vindo de volta!
                    </Text>
                    <View>
                        <TextInput
                            placeholder="E-mail"
                            textContentType="username"
                            style={styles.input}
                            onChangeText={(email) => this.setState({email})}
                            value={this.state.email}
                            underlineColorAndroid={cores.cinza}
                        />
                        <TextInput
                            placeholder="Senha"
                            textContentType="password"
                            style={styles.input}
                            onChangeText={(senha) => this.setState({senha})}
                            value={this.state.senha}
                            underlineColorAndroid={cores.cinza}
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Text style={styles.text}>
                                Esqueceu sua senha?
                            </Text>
                        </View>
                    </View>
                    <TouchableHighlight
                        onPress={() => this.props.navigation.navigate('Perfil')}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>
                            Entrar
                        </Text>
                    </TouchableHighlight>
                    <View style={styles.buttonTransparentGroup}>
                        <TouchableHighlight
                            onPress={() => this.props.navigation.navigate('Perfil')}
                            style={styles.buttonTransparentLeft}
                            underlayColor="rgba(0, 0, 0, 0.05)"
                        >
                            <Text style={styles.buttonTransparentText}>
                                Google
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => this.props.navigation.navigate('Perfil')}
                            style={styles.buttonTransparentRight}
                            underlayColor="rgba(0, 0, 0, 0.05)"
                        >
                            <Text style={styles.buttonTransparentText}>
                                Facebook
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </KeyboardAwareScrollView>
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
    input: {
        ...defaultStyles.input,
    },
    button: {
        ...defaultStyles.button,
        marginTop: 30
    },
    buttonText: {
        ...defaultStyles.buttonText,
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