import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  StyleSheet,
  View,
  ScrollView
} from 'react-native';
import { defaultStyles } from '../styles';
import cores from '../styles/cores';
import Cabecalho from './Cabecalho';
import { connect } from 'react-redux';

class TelaRetornoConsultaGuarda extends Component {

    render(){
        return (
            <ScrollView contentContainerStyle={styles.tela}>
                <Cabecalho 
                    titulo={
                    this.props.sessao ?
                        'Consulta Sucesso' :
                        'Consulta Erro'
                    } 
                style={styles.cabecalho} />
                <Text style={[styles.title, { color: this.props.sessao ? cores.verde : cores.vermelho} ]}>
                    {
                        this.props.sessao ?
                        'Pagamento registrado' :
                        'Pagamento não registrado'
                    }
                </Text>
                {
                    this.props.sessao ?
                        <Text style={styles.text}>
                            O pagamento do veículo com placa {(this.props.placa || "").toUpperCase()} foi registrado no parquímetro localizado em Av. Paulo de Frontin - Aterrado - Volta Redonda.
                        </Text>
                    :
                        <Text style={styles.text}>
                            O pagamento do veículo com placa {(this.props.placa || "").toUpperCase()} não foi registrado.
                        </Text>
                }
                
                <TouchableHighlight
                    onPress={() => this.props.navigation.navigate('TelaConsultaGuarda')}
                    style={styles.botaoVerde}
                    underlayColor="rgba(0, 0, 0, 0.05)"
                >
                    <Text style={styles.botaoVerdeText}>
                        Fazer nova busca
                    </Text>
                    
                </TouchableHighlight>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    tela: {
        ...defaultStyles.telaFull,
        ...defaultStyles.telaCentralizada,
        ...defaultStyles.telaPaddingHorizontalGrande,
    },
    telaCentralizada: {
        ...defaultStyles.telaFull,
        ...defaultStyles.telaCentralizada,
    },
    cabecalho: {
        marginBottom: 40,
    },
    title: {
        ...defaultStyles.textTitle,
        color: cores.azul,
        marginVertical: 40,
    },
    text: {
        ...defaultStyles.text,
        marginBottom: 40,
    },
    input: {
        ...defaultStyles.input,
        marginBottom: 40,
    },
    botaoVerde: {
        ...defaultStyles.botaoVerde,
        marginBottom: 40,
    },
    botaoVerdeText: {
        ...defaultStyles.botaoVerdeText,
    },
});

const mapStateToProps = state => {
    return {
        placa: state.ConsultaReducer.placa,
        sessao: state.ConsultaReducer.sessao,
        carregandoSessao: state.ConsultaReducer.carregandoSessao,
        erro: state.ConsultaReducer.erro,
    }
};

export default connect(mapStateToProps, {  })(TelaRetornoConsultaGuarda);