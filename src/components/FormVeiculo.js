import React, { Component } from 'react';
import { 
    View, 
    Image,
    Text, 
    StyleSheet,
    TextInput,
    TouchableHighlight,
} from 'react-native';
import { renderErro } from '../utils/Erro';
import { defaultStyles } from '../styles';
import cores from '../styles/cores';
import { connect } from 'react-redux';
import { adicionarVeiculo, modificaId, modificaPlaca, modificaApelido } from '../actions/FormVeiculoActions';

class FormVeiculo  extends Component {

    _salvarVeiculo(){
        const {id, placa, apelido} = this.props;

        this.props.adicionarVeiculo(id, placa, apelido);
    }

    render(){
        return (
            <View style={styles.tela}>
                <View style={styles.imagemContainer}>
                    <Image 
                        style={styles.imagem}
                        source={require('../imgs/icone_placa.png')} 
                    />
                </View>
                <View style={styles.formContainer}>
                    <TextInput
                        placeholder="Placa"
                        style={styles.input}
                        onChangeText={ (placa)=> this.props.modificaPlaca(placa) }
                        value={this.props.placa}
                        underlineColorAndroid={cores.cinza}
                    />
                    { renderErro(this.props.erro, 'placa')}
                    
                    <TextInput
                        placeholder="Apelido"
                        style={styles.input}
                        onChangeText={ (apelido)=> this.props.modificaApelido(apelido) }
                        value={this.props.apelido}
                        underlineColorAndroid={cores.cinza}
                    />
                    { renderErro(this.props.erro, 'descricao')}
                </View>
                <View style={styles.botoesContainer}>
                    <TouchableHighlight
                        onPress={() => this._salvarVeiculo() }
                        style={styles.botaoVerde}
                        underlayColor="rgba(0, 0, 0, 0.05)"
                    >
                        <Text style={styles.botaoVerdeText}>
                            Salvar
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tela: {
        ...defaultStyles.telaFull,
        ...defaultStyles.telaPaddingHorizontalGrande,
    },
    imagem: {
        width: 100,
        height: 100,
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
    },
    botaoVerde: {
        ...defaultStyles.botaoVerde,
        marginVertical: 25,
    },
    botaoVerdeText: {
        ...defaultStyles.botaoVerdeText,
    },
});

const mapStateToProps = state => {
    return {
        id: state.FormVeiculoReducer.id,
        placa: state.FormVeiculoReducer.placa,
        apelido: state.FormVeiculoReducer.apelido,
        salvandoVeiculo: state.FormVeiculoReducer.salvandoVeiculo,
        erro: state.FormVeiculoReducer.erro,
    }
};

export default connect(mapStateToProps, { adicionarVeiculo, modificaId, modificaPlaca, modificaApelido })(FormVeiculo);