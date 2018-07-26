import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    TextInput,
    TouchableHighlight,
} from 'react-native';
import { defaultStyles } from '../styles';
import cores from '../styles/cores';

class Veiculo  extends Component {

    render(){
        return (
            <TouchableHighlight
                onPress={() => false}
                style={styles.veiculo}
                underlayColor="rgba(0, 0, 0, 0.05)"
            >
                <View>
                    <View style={styles.veiculoCabecalho}>
                        <View style={{ flex: 1}}>
                            <Text style={styles.veiculoTextoNumero}>
                                Veículo {this.props.veiculo.index}
                            </Text>
                        </View>
                        <View style={{ flex: 1}}>
                            <Text style={styles.veiculoTextoDeletar}>
                                Deletar
                            </Text>
                        </View>
                    </View>
                    <TextInput
                        placeholder="Placa"
                        style={styles.input}
                        value={this.props.veiculo.placa.toUpperCase()}
                        underlineColorAndroid={cores.cinza}
                        editable={false}
                    />
                    <TextInput
                        placeholder="Apelido"
                        style={styles.input}
                        value={this.props.veiculo.descricao}
                        underlineColorAndroid={cores.cinza}
                        editable={false}
                    />
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        ...defaultStyles.input,
    },
    veiculo: {
        marginBottom: 20
    },
    veiculoCabecalho: {
        flexDirection: 'row',
        marginBottom: 10,
        paddingHorizontal: 5
    },
    veiculoTextoNumero: {
        fontWeight: 'bold',
        fontSize: 18,
        color: cores.azul
    },
    veiculoTextoDeletar: {
        fontWeight: 'bold',
        fontSize: 18,
        color: cores.azul,
        textAlign: 'right'
    }
});

export default Veiculo;