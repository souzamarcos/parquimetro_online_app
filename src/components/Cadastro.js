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
                contentContainerStyle={styles.viewScreen}
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
                            placeholder="Senha"
                            style={styles.input}
                            onChangeText={(senha) => this.setState({senha})}
                            value={this.state.senha}
                            underlineColorAndroid="#5d5d5d"
                        />
                    </View>
                    <TouchableHighlight
                        onPress={() => this.props.navigation.navigate('TabScreen')}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>
                            Cadastrar
                        </Text>
                    </TouchableHighlight>
                    <View style={styles.buttonTransparentGroup}>
                        <TouchableHighlight
                            onPress={() => this.props.navigation.navigate('TabScreen')}
                            style={styles.buttonTransparentLeft}
                            underlayColor="rgba(0, 0, 0, 0.05)"
                        >
                            <Text style={styles.buttonTransparentText}>
                                Google
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => this.props.navigation.navigate('TabScreen')}
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
    viewScreen: {
        ...defaultStyles.viewFull,
        ...defaultStyles.viewCenter,
        ...defaultStyles.viewPaddingBig,
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