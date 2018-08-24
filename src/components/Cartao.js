import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    TextInput,
    TouchableHighlight,
    Alert,
} from 'react-native';
import { defaultStyles } from '../styles';
import cores from '../styles/cores';
import { connect } from 'react-redux';
import { excluirCartao } from '../actions/FormCartaoActions';

class Cartao  extends Component {

    excluirCartao() {
        Alert.alert(
            'Aviso',
            'Deseja realmente excluir o cartão? Esta ação não pode ser desfeita',
            [
                {text: 'Não' },
                {text: 'Sim', onPress: () => this.props.excluirCartao(this.props.cartao) }
            ],
            { cancelable: true }
        );
        return;
    }

    render(){
        return (
            <View>
                <View style={styles.cartaoCabecalho}>
                    <View style={{ flex: 1}}>
                        <Text style={styles.cartaoTextoNumero}>
                            Cartão {this.props.cartao.index}
                        </Text>
                    </View>
                    <TouchableHighlight
                        onPress={() => this.excluirCartao()}
                        style={styles.veiculoDeletar}
                        underlayColor="rgba(0, 0, 0, 0.05)"
                    >
                        <View style={{ flex: 1}}>
                            <Text style={styles.cartaoTextoDeletar}>
                                Deletar
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <TextInput
                    placeholder="Número"
                    style={styles.input}
                    value={"**** **** **** " + this.props.cartao.numero}
                    underlineColorAndroid={cores.cinza}
                    editable={false}
                />
                <TextInput
                    placeholder="Bandeira"
                    style={styles.input}
                    value={this.props.cartao.bandeira}
                    underlineColorAndroid={cores.cinza}
                    editable={false}
                />
                {/* <TextInput
                    placeholder="Validade"
                    style={styles.input}
                    onChangeText={(validade) => this.setState({validade})}
                    value={this.state.validade}
                    underlineColorAndroid={cores.cinza}
                /> */}
            </View>
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

export default connect(null, { excluirCartao })(Cartao);