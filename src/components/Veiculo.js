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
import { editarVeiculo, excluirVeiculo } from '../actions/FormVeiculoActions';

class Veiculo  extends Component {

    excluirVeiculo() {
        Alert.alert(
            'Aviso',
            'Deseja realmente excluir o veículo? Esta ação não pode ser desfeita',
            [
                {text: 'Não' },
                {text: 'Sim', onPress: () => this.props.excluirVeiculo(this.props.veiculo) }
            ],
            { cancelable: true }
        );
        return;
    }

    render(){
        return (
            <TouchableHighlight
                onPress={() => this.props.editarVeiculo(this.props.veiculo)}
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
                        <TouchableHighlight
                            onPress={() => this.excluirVeiculo()}
                            style={styles.veiculoDeletar}
                            underlayColor="rgba(0, 0, 0, 0.05)"
                        >
                            <View style={{ flex: 1}}>
                                <Text style={styles.veiculoTextoDeletar}>
                                    Deletar
                                </Text>
                            </View>
                        </TouchableHighlight>
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
        paddingTop: 5
    },
    veiculoTextoNumero: {
        fontWeight: 'bold',
        fontSize: 18,
        color: cores.azul
    },
    veiculoDeletar: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    veiculoTextoDeletar: {
        fontWeight: 'bold',
        fontSize: 18,
        color: cores.azul,
        textAlign: 'right'
    }
});

export default connect(null, { editarVeiculo, excluirVeiculo })(Veiculo);