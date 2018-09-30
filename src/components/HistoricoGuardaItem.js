import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';
import _ from 'lodash';
import Moment from 'moment';
import cores from '../styles/cores';

class HistoricoGuardaItem extends Component {

    state = {
        expandido: false,
    };
   
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
                                    <Text style={styles.data}>{Moment(this.props.consulta.data).format('DD/MM/YYYY HH:mm:ss')} </Text>
                                </View>
                                <Text style={styles.tituloTexto}>{this.props.consulta.placa}</Text>
                            </View>
                            <View style={{paddingLeft: 15}}>
                                <Text style={styles.valor}>
                                    {
                                        this.props.consulta.sessao_id ? 
                                        <Image style={styles.icone} source={require('../imgs/icone_parquimetro_sucesso.png')} />
                                        :
                                        <Image style={styles.icone} source={require('../imgs/icone_parquimetro_erro.png')} />                                           
                                    }
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
                {this.state.expandido && this.props.consulta.sessao ? 
                    (
                        <View style={styles.detalhes}>
                            <Text style={styles.veiculoLabel}>Local:</Text>
                            <Text style={styles.rua}>{this.props.consulta.parquimetro.endereco_completo}</Text>
                            <Text style={styles.veiculoLabel}>Período:</Text>
                            <Text style={styles.horario}>{Moment(this.props.consulta.sessao.data_inicio).format('DD/MM/YYYY HH:mm:ss')} - {this.props.consulta.sessao.data_fim ? Moment(this.props.consulta.sessao.data_fim).format('DD/MM/YYYY HH:mm:ss') : "Contando ..."}</Text>
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
        color: cores.cinza,
        fontSize: 11,
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