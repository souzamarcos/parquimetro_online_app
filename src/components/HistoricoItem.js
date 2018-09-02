import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
} from 'react-native';
import cores from '../styles/cores';
import Moment, { duration } from 'moment';

class HistoricoItem extends Component {

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
        const dataInicio = Moment(this.props.sessao.data_inicio);
        const dataInicioTexto = dataInicio.format('DD/MM/YYYY');
        const horaInicioTexto = dataInicio.format('HH:mm:ss');
        const dataFim = Moment(this.props.sessao.data_fim);
        const dataFimTexto = dataFim.format('DD/MM/YYYY');
        const horaFimTexto = dataFim.format('HH:mm:ss');
        const duracao = duration(Moment(this.props.sessao.data_fim).diff(this.props.sessao.data_inicio));
        const duracaoTexto = Moment.utc(duracao.as('milliseconds')).format('HH:mm');
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
                                    <Text style={styles.data}>{dataInicioTexto} </Text>
                                    {/* <Text style={styles.data}>{this.props.sessao.dataMes} </Text> */}
                                    <Text style={styles.duracao}>{this.props.sessao.data_fim ? duracaoTexto : "Em andamento"}</Text>
                                </View>
                                <Text style={styles.tituloTexto}>{this.props.sessao.parquimetro.endereco_completo}</Text>
                            </View>
                            <View style={{paddingLeft: 15}}>
                                <Text style={styles.valor}>{this.props.sessao.valor ? `R$ ${this.props.sessao.valor.toFixed(2).replace('.',',')}`: `...`}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
                {this.state.expandido ? 
                    (
                        <View style={styles.detalhes}>
                            {/*<Text style={styles.rua}>{this.props.sessao.parquimetro.endereco_completo}</Text>*/}
                            <Text style={styles.horario}>{dataInicioTexto} {horaInicioTexto} - {this.props.sessao.data_fim ? horaFimTexto : "Contando ..."}</Text>
                            <Text style={styles.pagamentoLabel}>Pagamento:</Text>
                            <Text style={styles.cartao}>{`****.****.****.${ this.props.sessao.cartao_credito.numero }`}</Text>
                            <Text style={styles.veiculoLabel}>Veículo:</Text>
                            <Text style={styles.veiculo}>{ this.props.sessao.veiculo.placa.toUpperCase() }</Text>
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

export default HistoricoItem;