import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';
import _ from 'lodash';
import cores from '../styles/cores';

class HistoricoGuardaItem extends Component {

    constructor(props){
        super(props);

        this.state = {
            expandido: false,
        }
    }
   
    expandir() {
        this.setState({
            expandido: !this.state.expandido
        });
    }

    render() {
        return (
            <View style={styles.historico}>
                <TouchableHighlight
                    onPress={()=> this.expandir() }
                    underlayColor='transparent'
                    style={styles.titulo}
                >
                    <View>
                        
                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{ flex: 1}}>
                                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={styles.data}>{this.props.consulta.data} </Text>
                                </View>
                                <Text style={styles.tituloTexto}>{this.props.consulta.placa}</Text>
                            </View>
                            <View style={{paddingLeft: 15}}>
                                <Text style={styles.valor}>
                                    {
                                        _.isEmpty(this.props.consulta.sessao) ? 
                                            <Image style={styles.icone} source={require('../imgs/icone_parquimetro_erro.png')} />
                                        :
                                            <Image style={styles.icone} source={require('../imgs/icone_parquimetro_sucesso.png')} />
                                    }</Text>
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
                {this.state.expandido && !_.isEmpty(this.props.consulta.sessao) ? 
                    (
                        <View style={styles.detalhes}>
                            <Text style={styles.rua}>{this.props.consulta.sessao.rua}</Text>
                            <Text style={styles.horario}>{this.props.consulta.sessao.horaInicio} - {this.props.consulta.sessao.horaFim}</Text>
                            <Text style={styles.veiculoLabel}>Veículo:</Text>
                            <Text style={styles.veiculo}>{this.props.consulta.sessao.placa}</Text>
                        </View>
                    ) : null
                }
            </View >
        );
    }
}

const styles = StyleSheet.create({
    historico: {
        backgroundColor: '#fff',
        borderRadius: 7,
        marginBottom: 10,
        elevation: 1
    },
    titulo: {
        padding: 15
    },
    tituloTexto: {
        fontSize: 20,
        color: cores.azul
    },
    detalhes: {
        paddingHorizontal: 15,
        paddingBottom: 15
    },
    data:{
        color: cores.azul,
    },
    icone: {
        width: 100,
        height: 100,
    },
    duracao: {
        color: '#6e868e',
    },
    valor: {
        fontSize: 20,
        color: '#6e868e',
    },
    rua: {
        fontSize: 14,
        marginBottom: 5
    },
    horario: {
        fontSize: 14,
        marginBottom: 15
    },
    pagamentoLabel: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    cartao: {
        marginBottom: 15
    },
    veiculoLabel: {
        fontSize: 14,
        fontWeight: 'bold'
    }
});

export default HistoricoGuardaItem;