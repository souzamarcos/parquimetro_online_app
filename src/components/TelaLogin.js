import React, { Component } from 'react';
import {
    Text,
    TextInput,
    TouchableHighlight,
    StyleSheet,
    View,
    Keyboard,
    BackHandler,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { defaultStyles } from '../styles';
import cores from '../styles/cores';

import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoActions';

class TelaLogin extends Component {

    _autenticarUsuario() {
        const { email, senha } = this.props;

        this.props.autenticarUsuario({ email, senha });
    }
    
    componentDidMount() {
        Keyboard.dismiss();
        //this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => true);
    }

    // componentWillUnmount() {
    //     this.backHandler.remove();
    // }

    // handleBackButton() {
    //     return true;
    // }

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
                        <Text style={styles.mensagemErro}>{this.props.erroLogin}</Text>
                        <TextInput
                            placeholder="E-mail"
                            textContentType="username"
                            style={styles.input}
                            onChangeText={(email) => this.props.modificaEmail(email)}
                            value={this.props.email}
                            underlineColorAndroid={cores.cinza}
                        />
                        <TextInput
                            placeholder="Senha"
                            secureTextEntry={true}
                            style={styles.input}
                            onChangeText={(senha) => this.props.modificaSenha(senha)}
                            value={this.props.senha}
                            underlineColorAndroid={cores.cinza}
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 20 }}>
                            <Text style={styles.text}>
                                Esqueceu sua senha?
                            </Text>
                        </View>
                    </View>
                    <TouchableHighlight
                        onPress={() => this._autenticarUsuario()}
                        style={styles.botaoVerde}
                        underlayColor="rgba(0, 0, 0, 0.05)"
                    >
                        <Text style={styles.botaoVerdeText}>
                            Entrar
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => this.props.navigation.push('FormVeiculo')}
                        style={styles.botaoAzul}
                        underlayColor="rgba(0, 0, 0, 0.05)"
                    >
                        <Text style={styles.botaoAzulText}>
                            Facebook
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => this.props.navigation.navigate('Perfil')}
                        style={styles.botaoVermelho}
                        underlayColor="rgba(0, 0, 0, 0.05)"
                    >
                        <Text style={styles.botaoVermelhoText}>
                            Google
                        </Text>
                    </TouchableHighlight>
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
        color: cores.azul,
        marginBottom: 30,
    },
    input: {
        ...defaultStyles.input,
    },
    botaoVerde: {
        ...defaultStyles.botaoVerde,
        marginBottom: 20,
    },
    mensagemErro: {
        color: 'red',
        fontSize: 14,
        marginBottom: 10
    },
    botaoVerdeText: {
        ...defaultStyles.botaoVerdeText,
    },
    botaoAzul: {
        ...defaultStyles.botaoAzul,
        marginBottom: 20,
    },
    botaoAzulText: {
        ...defaultStyles.botaoAzulText,
    },
    botaoVermelho: {
        ...defaultStyles.botaoVermelho,
        marginBottom: 20,
    },
    botaoVermelhoText: {
        ...defaultStyles.botaoVermelhoText,
    },
});


const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin,
        loadingLogin: state.AutenticacaoReducer.loadingLogin
    }
)

export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticarUsuario })(TelaLogin);