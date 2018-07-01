import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    TextInput,
    ScrollView,
} from 'react-native';
import { defaultStyles } from 'parquimetro-styles';
import cores from 'parquimetro-styles/cores';
import { withNavigationFocus } from 'react-navigation';
import { connect } from 'react-redux';
import { alteraTitulo } from 'parquimetro-actions/AppActions';

class PerfilCartao extends Component {
  
    constructor(props){
        super(props);
        
        this.state = {
            numero: '',
            bandeira: '',
            validade: '',
        };
    }
    
    componentWillMount(){
        if(this.props.isFocused){
            this.props.alteraTitulo('Cartão');
        }
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.isFocused){
            this.props.alteraTitulo('Cartão');
        }
    }

    render() {
        return (
            <ScrollView style={styles.tela}>
                <View  style={styles.cartao}>
                    <View style={styles.cartaoCabecalho}>
                        <View style={{ flex: 1}}>
                            <Text style={styles.cartaoTextoNumero}>
                                Cartão 1
                            </Text>
                        </View>
                        <View style={{ flex: 1}}>
                            <Text style={styles.cartaoTextoDeletar}>
                                Deletar
                            </Text>
                        </View>
                    </View>
                    <TextInput
                        placeholder="Número"
                        style={styles.input}
                        onChangeText={(numero) => this.setState({numero})}
                        value={this.state.numero}
                        underlineColorAndroid={cores.cinza}
                    />
                    <TextInput
                        placeholder="Bandeira"
                        style={styles.input}
                        onChangeText={(bandeira) => this.setState({bandeira})}
                        value={this.state.bandeira}
                        underlineColorAndroid={cores.cinza}
                    />
                    <TextInput
                        placeholder="Validade"
                        style={styles.input}
                        onChangeText={(validade) => this.setState({validade})}
                        value={this.state.validade}
                        underlineColorAndroid={cores.cinza}
                    />
                </View>
                <View  style={styles.cartao}>
                    <View style={styles.cartaoCabecalho}>
                        <View style={{ flex: 1}}>
                            <Text style={styles.cartaoTextoNumero}>
                                Cartão 2
                            </Text>
                        </View>
                        <View style={{ flex: 1}}>
                            <Text style={styles.cartaoTextoDeletar}>
                                Deletar
                            </Text>
                        </View>
                    </View>
                    <TextInput
                        placeholder="Número"
                        style={styles.input}
                        onChangeText={(numero) => this.setState({numero})}
                        value={this.state.numero}
                        underlineColorAndroid={cores.cinza}
                    />
                    <TextInput
                        placeholder="Bandeira"
                        style={styles.input}
                        onChangeText={(bandeira) => this.setState({bandeira})}
                        value={this.state.bandeira}
                        underlineColorAndroid={cores.cinza}
                    />
                    <TextInput
                        placeholder="Validade"
                        style={styles.input}
                        onChangeText={(validade) => this.setState({validade})}
                        value={this.state.validade}
                        underlineColorAndroid={cores.cinza}
                    />
                </View>
                <View  style={styles.cartao}>
                    <View style={styles.cartaoCabecalho}>
                        <View style={{ flex: 1}}>
                            <Text style={styles.cartaoTextoNumero}>
                                Cartão 3
                            </Text>
                        </View>
                        <View style={{ flex: 1}}>
                            <Text style={styles.cartaoTextoDeletar}>
                                Deletar
                            </Text>
                        </View>
                    </View>
                    <TextInput
                        placeholder="Número"
                        style={styles.input}
                        onChangeText={(numero) => this.setState({numero})}
                        value={this.state.numero}
                        underlineColorAndroid={cores.cinza}
                    />
                    <TextInput
                        placeholder="Bandeira"
                        style={styles.input}
                        onChangeText={(bandeira) => this.setState({bandeira})}
                        value={this.state.bandeira}
                        underlineColorAndroid={cores.cinza}
                    />
                    <TextInput
                        placeholder="Validade"
                        style={styles.input}
                        onChangeText={(validade) => this.setState({validade})}
                        value={this.state.validade}
                        underlineColorAndroid={cores.cinza}
                    />
                </View>
            </ScrollView>
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
    cartao: {
        marginBottom: 20
    },
    cartaoCabecalho: {
        flexDirection: 'row',
        marginBottom: 10,
        paddingHorizontal: 5
    },
    cartaoTextoNumero: {
        fontWeight: 'bold',
        fontSize: 18,
        color: cores.azul
    },
    cartaoTextoDeletar: {
        fontWeight: 'bold',
        fontSize: 18,
        color: cores.azul,
        textAlign: 'right'
    }
});

export default connect(null, {alteraTitulo})(withNavigationFocus(PerfilCartao));