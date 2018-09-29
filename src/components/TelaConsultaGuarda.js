import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  StyleSheet,
  Alert,
  View,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { defaultStyles } from '../styles';
import cores from '../styles/cores';
import Cabecalho from './Cabecalho';
import { TextInputMask } from 'react-native-masked-text';
import { connect } from 'react-redux';
import { consultarPlaca, modificaPlaca } from '../actions/ConsultaActions';

class TelaConsultaGuarda extends Component {

    consultarPlaca(){
        if(!this.props.placa || this.props.placa.length != 8){
            Alert.alert(
                'Aviso',
                'Preencha a placa corretamente',
                [
                  {text: 'OK'},
                ],
                { cancelable: false }
            );
            return;
        }

        this.props.consultarPlaca(this.props.placa);
    }
    
    render(){
        return (
            <ScrollView contentContainerStyle={styles.tela}>
                <Cabecalho titulo="Consulta" style={styles.cabecalho} />
                <Text style={styles.title}>
                    Consultar Veículo
                </Text>
                <TextInputMask
                    placeholder="Placa"
                    type="custom"
                    style={styles.input}
                    onChangeText={ (placa) => this.props.modificaPlaca(placa) }
                    value={this.props.placa}
                    underlineColorAndroid={cores.cinza}
                    options={{
                        mask: 'AAA-9999',
                    }}
                />
                {
                    this.props.carregandoSessao ? 
                    (
                        <ActivityIndicator style={styles.activityIndicator} size="large" color={cores.verde} />
                    ) :
                    (    
                        <TouchableHighlight
                            onPress={() => this.consultarPlaca()}
                            style={styles.botaoVerde}
                            underlayColor="rgba(0, 0, 0, 0.05)"
                        >
                            <Text style={styles.botaoVerdeText}>
                                Buscar
                            </Text>
                            
                        </TouchableHighlight>
                    )
                }
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
    activityIndicator: {
        paddingVertical: 9,
        marginBottom: 40,
    },
    cabecalho: {
        marginBottom: 40,
    },
    title: {
        ...defaultStyles.textTitle,
        color: cores.azul,
        marginVertical: 40,
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

export default connect(mapStateToProps, { consultarPlaca, modificaPlaca })(TelaConsultaGuarda);