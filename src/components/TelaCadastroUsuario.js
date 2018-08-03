import React, { Component } from 'react';
import {
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  View,
  Keyboard,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { defaultStyles } from '../styles';
import cores from '../styles/cores';
import { connect } from 'react-redux';
import { modificaNome, modificaEmail, modificaCpf, modificaSenha, cadastrarUsuario } from '../actions/CadastroUsuarioActions'
import { renderErro } from '../utils/Erro';
import { TextInputMask } from 'react-native-masked-text';

class TelaCadastroUsuario extends Component {

    componentDidMount() {
        Keyboard.dismiss();
    }

    render(){
        return (
            <KeyboardAwareScrollView
                resetScrollToCoords={{ x: 0, y: 0 }}
                contentContainerStyle={styles.tela}
                scrollEnabled={true}              
            >
                <View style={{ width: '100%' }}>
                    <Text style={styles.title}>
                        Cadastro
                    </Text>
                    <View>
                        <TextInput
                            placeholder="Nome"
                            style={styles.input}
                            onChangeText={(nome) => this.props.modificaNome(nome)}
                            value={this.props.nome}
                            underlineColorAndroid="#5d5d5d"
                        />
                        { renderErro(this.props.erro, 'nome')}
                        <TextInput
                            placeholder="E-mail"
                            style={styles.input}
                            onChangeText={(email) => this.props.modificaEmail(email)}
                            value={this.props.email}
                            underlineColorAndroid="#5d5d5d"
                        />
                        { renderErro(this.props.erro, 'email')}
                        <TextInputMask
                            placeholder="CPF"
                            type="cpf"
                            style={styles.input}
                            onChangeText={(cpf) => this.props.modificaCpf(cpf) }
                            value={this.props.cpf}
                            underlineColorAndroid="#5d5d5d"
                        />
                        { renderErro(this.props.erro, 'cpf')}
                        <TextInput
                            placeholder="Senha"
                            secureTextEntry={true}
                            style={styles.input}
                            onChangeText={(senha) => this.props.modificaSenha(senha)}
                            value={this.props.senha}
                            underlineColorAndroid="#5d5d5d"
                        />
                        { renderErro(this.props.erro, 'senha')}
                    </View>
                    <TouchableHighlight
                        onPress={() => this.props.navigation.push('TelaPrincipal')}
                        style={styles.botaoVerde}
                        underlayColor="rgba(0, 0, 0, 0.05)"
                    >
                        <Text style={styles.botaoVerdeText}>
                            Cadastrar
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => this.props.navigation.push('TelaPrincipal')}
                        style={styles.botaoAzul}
                        underlayColor="rgba(0, 0, 0, 0.05)"
                    >
                        <Text style={styles.botaoAzulText}>
                            Facebook
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => this.props.navigation.navigate('TelaPrincipal')}
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
        marginTop: 20,
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

const mapStateToProps = state => {
    return {
        nome: state.CadastroUsuarioReducer.nome,
        email: state.CadastroUsuarioReducer.email,
        cpf: state.CadastroUsuarioReducer.cpf,
        senha: state.CadastroUsuarioReducer.senha
    }
}

export default connect(mapStateToProps, { modificaNome, modificaEmail, modificaCpf, modificaSenha, cadastrarUsuario })(TelaCadastroUsuario);