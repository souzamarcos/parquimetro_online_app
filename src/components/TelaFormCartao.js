import React, { Component } from 'react';
import { 
    View, 
    Image,
    Text, 
    StyleSheet,
    TextInput,
    TouchableHighlight,
    ActivityIndicator,
    Picker
} from 'react-native';
import { renderErro } from '../utils/Erro';
import { defaultStyles } from '../styles';
import cores from '../styles/cores';
import { connect } from 'react-redux';
import {
    adicionarCartao, 
    modificaId, 
    modificaNumero, 
    modificaBandeira, 
    modificaMesValidade, 
    modificaAnoValidade, 
    modificaCvv,
} from '../actions/FormCartaoActions';
import { TextInputMask } from 'react-native-masked-text';

class TelaFormCartao  extends Component {  

    constructor(props){
        super(props)
    }
    
    _salvarCartao(){
        this.props.adicionarCartao(this.props.cartao);
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
                        value={this.props.cartao.numero}
                        underlineColorAndroid={cores.cinza}
                    />
                    { renderErro(this.props.erro, 'numero_cartao')}
                    <TextInput
                        placeholder="CVV"
                        secureTextEntry={true}
                        style={styles.input}
                        onChangeText={ (cvv)=> this.props.modificaCvv(cvv) }
                        value={this.props.cartao.cvv}
                        underlineColorAndroid={cores.cinza}
                    />
                    { renderErro(this.props.erro, 'token')}
                    <Picker
                        selectedValue={this.props.cartao.bandeira}
                        style={{ height: 50, width: '100%' }}
                        onValueChange={(bandeira)=> this.props.modificaBandeira(bandeira)}>
                            <Picker.Item label="Bandeira" value="" />
                            <Picker.Item label="Visa" value="Visa" />
                            <Picker.Item label="Master Card" value="Master Card" />
                            <Picker.Item label="Elo" value="Elo" />
                    </Picker>
                    { renderErro(this.props.erro, 'bandeira')}
                    <Picker
                        selectedValue={this.props.cartao.mes_validade}
                        style={{ height: 50, width: '100%' }}
                        onValueChange={(mes_validade) => this.props.modificaMesValidade(mes_validade)}>
                            <Picker.Item label="Mês de Validade" value="" />
                            <Picker.Item label="Janeiro" value="1" />
                            <Picker.Item label="Fevereiro" value="2" />
                            <Picker.Item label="Março" value="3" />
                            <Picker.Item label="Abril" value="4" />
                            <Picker.Item label="Maio" value="5" />
                            <Picker.Item label="Junho" value="6" />
                            <Picker.Item label="Julho" value="7" />
                            <Picker.Item label="Agosto" value="8" />
                            <Picker.Item label="Setembro" value="9" />
                            <Picker.Item label="Outubro" value="10" />
                            <Picker.Item label="Novembro" value="11" />
                            <Picker.Item label="Dezembro" value="12" />
                    </Picker>
                    { renderErro(this.props.erro, 'mes_validade')}
                    <Picker
                        selectedValue={this.props.cartao.ano_validade}
                        style={{ height: 50, width: '100%' }}
                        onValueChange={(ano_validade) => this.props.modificaAnoValidade(ano_validade)}>
                            <Picker.Item label="Ano de Validade" value="" />
                            <Picker.Item label="2018" value="2018" />
                            <Picker.Item label="2019" value="2019" />
                            <Picker.Item label="2020" value="2020" />
                            <Picker.Item label="2021" value="2021" />
                            <Picker.Item label="2022" value="2022" />
                            <Picker.Item label="2023" value="2023" />
                            <Picker.Item label="2024" value="2024" />
                            <Picker.Item label="2025" value="2025" />
                            <Picker.Item label="2026" value="2026" />
                            <Picker.Item label="2027" value="2027" />
                            <Picker.Item label="2028" value="2028" />
                            <Picker.Item label="2029" value="2029" />
                            <Picker.Item label="2030" value="2030" />
                            <Picker.Item label="2031" value="2031" />
                            <Picker.Item label="2032" value="2032" />
                            <Picker.Item label="2033" value="2033" />
                            <Picker.Item label="2034" value="2034" />
                    </Picker>
                    { renderErro(this.props.erro, 'ano_validade')}
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
        cartao: state.FormCartaoReducer.cartao,
        salvandoCartao: state.FormCartaoReducer.salvandoCartao,
        erro: state.FormCartaoReducer.erro,
    }
};

export default connect(mapStateToProps, { 
    adicionarCartao, 
    modificaId, 
    modificaNumero, 
    modificaBandeira, 
    modificaMesValidade, 
    modificaAnoValidade, 
    modificaCvv,
})(TelaFormCartao);