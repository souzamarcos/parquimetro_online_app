import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableHighlight,
} from 'react-native';
import { defaultStyles } from '../styles';
import cores from '../styles/cores';
import { withNavigationFocus } from 'react-navigation';

import { connect } from 'react-redux';
import { alteraTitulo } from '../actions/AppActions';

class PerfilPessoal extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            nome: '',
            email: '',
            senha: '',
            cpf: '',
        };
    }

    componentWillMount(){
        if(this.props.isFocused){
            this.props.alteraTitulo('Pessoal');
        }
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.isFocused){
            this.props.alteraTitulo('Pessoal');
        }
    }

    render() {
        return (
            <ScrollView  style={styles.tela}>
                <View>
                    <TextInput
                        placeholder="Nome"
                        style={styles.input}
                        onChangeText={(nome) => this.setState({nome})}
                        value={this.state.nome}
                        underlineColorAndroid={cores.cinza}
                    />
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
                        style={styles.input}
                        onChangeText={(senha) => this.setState({senha})}
                        value={this.state.senha}
                        underlineColorAndroid={cores.cinza}
                    />
                    <TextInput
                        placeholder="CPF"
                        style={styles.input}
                        onChangeText={(cpf) => this.setState({cpf})}
                        value={this.state.cpf}
                        underlineColorAndroid={cores.cinza}
                    />
                </View>
                <View style={styles.botoesContainer}>
                    <TouchableHighlight
                        onPress={() => false}
                        style={styles.botaoVerde}
                        underlayColor="rgba(0, 0, 0, 0.05)"
                    >
                        <Text style={styles.botaoVerdeText}>
                            Salvar
                        </Text>
                    </TouchableHighlight>
                </View>
            </ScrollView >
        );
    }
  }
  
const styles = StyleSheet.create({
    tela: {
        ...defaultStyles.telaFull,
        ...defaultStyles.telaPaddingPequeno,
    },
    input: {
        ...defaultStyles.input,
    },
    botoesContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoVerde: {
        ...defaultStyles.botaoVerde,
        marginVertical: 25,
    },
    botaoVerdeText: {
        ...defaultStyles.botaoVerdeText,
    },
});

export default connect(null, {alteraTitulo})(withNavigationFocus(PerfilPessoal));
