import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    TextInput,
    TouchableHighlight,
} from 'react-native';
import { defaultStyles } from 'parquimetro-styles';
import cores from 'parquimetro-styles/cores';

class Cartao  extends Component {

    render(){
        return (
            <TouchableHighlight
                onPress={() => false}
                style={styles.cartao}
                underlayColor="rgba(0, 0, 0, 0.05)"
            >
                <View>
                    <View style={styles.cartaoCabecalho}>
                        <View style={{ flex: 1}}>
                            <Text style={styles.cartaoTextoNumero}>
                                Cartão {this.props.cartao.index}
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
                        value={this.props.cartao.numero}
                        underlineColorAndroid={cores.cinza}
                    />
                    <TextInput
                        placeholder="Bandeira"
                        style={styles.input}
                        value={this.props.cartao.bandeira}
                        underlineColorAndroid={cores.cinza}
                    />
                    {/* <TextInput
                        placeholder="Validade"
                        style={styles.input}
                        onChangeText={(validade) => this.setState({validade})}
                        value={this.state.validade}
                        underlineColorAndroid={cores.cinza}
                    /> */}
                </View>
            </TouchableHighlight>
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

export default Cartao;