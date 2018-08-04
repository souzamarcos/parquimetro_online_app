import React, { Component } from 'react';
import { 
    View, 
    Image,
    Text, 
    StyleSheet,
    TextInput,
    TouchableHighlight,
    ActivityIndicator
} from 'react-native';
import { renderErro } from '../utils/Erro';
import { defaultStyles } from '../styles';
import cores from '../styles/cores';
import { connect } from 'react-redux';
import { adicionarCartao, modificaId, modificaNumero, modificaBandeira, modificaValidade } from '../actions/FormCartaoActions';
import { TextInputMask } from 'react-native-masked-text';

class TelaFormCartao  extends Component {

    _salvarCartao(){
        const {id, numero, bandeira, validade} = this.props;

        this.props.adicionarCartao(id, numero, bandeira, validade);
    }

    render(){
        return (
            <View style={styles.tela}>
                <View style={styles.imagemContainer}>
                    <Image 
                        style={styles.imagem}
                        source={require('../imgs/icone_cartao.png')} 
                    />
                </View>
                <View style={styles.formContainer}>
                    <TextInputMask
                        placeholder="Número"
                        type="credit-card"
                        style={styles.input}
                        onChangeText={ (numero)=> this.props.modificaNumero(numero) }
                        value={this.props.numero}
                        underlineColorAndroid={cores.cinza}
                    />
                    { renderErro(this.props.erro, 'numero_cartao')}
                    <TextInput
                        placeholder="Apelido"
                        style={styles.input}
                        onChangeText={ (bandeira)=> this.props.modificaBandeira(bandeira) }
                        value={this.props.bandeira}
                        underlineColorAndroid={cores.cinza}
                    />
                    { renderErro(this.props.erro, 'bandeira')}
                    <TextInput
                        placeholder="Validade"
                        style={styles.input}
                        onChangeText={ (validade)=> this.props.modificaValidade(validade) }
                        value={this.props.validade}
                        underlineColorAndroid={cores.cinza}
                    />
                    { renderErro(this.props.erro, 'validade')}
                </View>
                <View style={styles.botoesContainer}>
                    {
                        this.props.salvandoCartao ? 
                        (
                            <ActivityIndicator style={styles.activityIndicator} size="large" color={cores.verde} />
                        ) :
                        (
                            <TouchableHighlight
                                onPress={() => this._salvarCartao() }
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
    },
    botaoVerde: {
        ...defaultStyles.botaoVerde,
    },
    botaoVerdeText: {
        ...defaultStyles.botaoVerdeText,
    },
});

const mapStateToProps = state => {
    return {
        id: state.FormCartaoReducer.id,
        numero: state.FormCartaoReducer.numero,
        bandeira: state.FormCartaoReducer.bandeira,
        validade: state.FormCartaoReducer.validade,
        salvandoCartao: state.FormCartaoReducer.salvandoCartao,
        erro: state.FormCartaoReducer.erro,
    }
};

export default connect(mapStateToProps, { adicionarCartao, modificaId, modificaNumero, modificaBandeira, modificaValidade  })(TelaFormCartao);