import React, { Component } from 'react';
import { 
    View, 
    Image,
    Text, 
    StyleSheet,
    TextInput,
    TouchableHighlight,
    ActivityIndicator,
} from 'react-native';
import { renderErro } from '../utils/Erro';
import { defaultStyles } from '../styles';
import cores from '../styles/cores';
import { connect } from 'react-redux';
import { salvarVeiculo, modificaId, modificaPlaca, modificaDescricao } from '../actions/FormVeiculoActions';
import { TextInputMask } from 'react-native-masked-text';

class TelaFormVeiculo  extends Component {
    
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('titulo', 'Adicionar Veículo'),
        };
    };

    _salvarVeiculo(){
        this.props.salvarVeiculo(this.props.veiculo);
    }
    

    render(){
        console.log(this.props.veiculo);
        return (
            <View style={styles.tela}>
                <View style={styles.imagemContainer}>
                    <Image 
                        style={styles.imagem}
                        source={require('../imgs/icone_placa.png')} 
                    />
                </View>
                <View style={styles.formContainer}>
                    <TextInputMask
                        placeholder="Placa"
                        type="custom"
                        style={styles.input}
                        onChangeText={ (placa)=> this.props.modificaPlaca(placa) }
                        value={this.props.veiculo.placa}
                        underlineColorAndroid={cores.cinza}
                        editable={this.props.veiculo.id === 0}
                        options={{
                            mask: 'AAA-9999',
                        }}
                    />
                    { renderErro(this.props.erro, 'placa')}
                    <TextInput
                        placeholder="Descrição"
                        style={styles.input}
                        onChangeText={ (descricao)=> this.props.modificaDescricao(descricao) }
                        value={this.props.veiculo.descricao}
                        underlineColorAndroid={cores.cinza}
                    />
                    { renderErro(this.props.erro, 'descricao')}
                </View>
                <View style={styles.botoesContainer}>
                {
                    this.props.salvandoVeiculo ? 
                    (
                        <ActivityIndicator style={styles.activityIndicator} size="large" color={cores.verde} />
                    ) :
                    (
                        <TouchableHighlight
                            onPress={() => this._salvarVeiculo() }
                            style={styles.botaoVerde}
                            underlayColor="rgba(0, 0, 0, 0.05)"
                        >
                            <Text style={styles.botaoVerdeText}>
                                Salvar
                            </Text>
                        </TouchableHighlight>
                    )
                }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tela: {
        ...defaultStyles.telaFull,
        ...defaultStyles.telaPaddingHorizontalPequeno,
    },
    imagem: {
        width: 100,
        height: 100,
    },
    input: {
        ...defaultStyles.input,
    },
    imagemContainer: {
        paddingVertical: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        //flex: 1
    },
    botoesContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 25,
    },
    activityIndicator: {
        paddingVertical: 10,
    }
    ,botaoVerde: {
        ...defaultStyles.botaoVerde,
    },
    botaoVerdeText: {
        ...defaultStyles.botaoVerdeText,
    },
});

const mapStateToProps = state => {
    return {
        veiculo: state.FormVeiculoReducer.veiculo,
        salvandoVeiculo: state.FormVeiculoReducer.salvandoVeiculo,
        erro: state.FormVeiculoReducer.erro,
    }
};

export default connect(mapStateToProps, { salvarVeiculo, modificaId, modificaPlaca, modificaDescricao })(TelaFormVeiculo);