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

export default class TelaCadastroUsuario extends Component {

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
                        Cadastro
                    </Text>
                    <View>
                        <TextInput
                            placeholder="Nome"
                            style={styles.input}
                            onChangeText={(nome) => this.setState({nome})}
                            value={this.state.nome}
                            underlineColorAndroid="#5d5d5d"
                        />
                        <TextInput
                            placeholder="E-mail"
                            style={styles.input}
                            onChangeText={(email) => this.setState({email})}
                            value={this.state.email}
                            underlineColorAndroid="#5d5d5d"
                        />
                        <TextInput
                            placeholder="CPF"
                            style={styles.input}
                            onChangeText={(email) => false }
                            //value={this.state.email}
                            underlineColorAndroid="#5d5d5d"
                        />
                        <TextInput
                            placeholder="Senha"
                            style={styles.input}
                            onChangeText={(senha) => this.setState({senha})}
                            value={this.state.senha}
                            underlineColorAndroid="#5d5d5d"
                        />
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