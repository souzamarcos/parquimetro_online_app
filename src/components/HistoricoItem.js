import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
} from 'react-native';
import cores from 'parquimetro-styles/cores';

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
                                    <Text style={styles.data}>{this.props.sessao.dataDia} </Text>
                                    <Text style={styles.data}>{this.props.sessao.dataMes} </Text>
                                    <Text style={styles.duracao}>{this.props.sessao.duracao}</Text>
                                </View>
                                <Text style={styles.tituloTexto}>{this.props.sessao.bairro}</Text>
                            </View>
                            <View style={{paddingLeft: 15}}>
                                <Text style={styles.valor}>R$ {this.props.sessao.valor}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
                {this.state.expandido ? 
                    (
                        <View style={styles.detalhes}>
                            <Text style={styles.rua}>{this.props.sessao.rua}</Text>
                            <Text style={styles.horario}>{this.props.sessao.horaInicio} - {this.props.sessao.horaFim}</Text>
                            <Text style={styles.pagamentoLabel}>Pagamento:</Text>
                            <Text style={styles.cartao}>{this.props.sessao.cartao}</Text>
                            <Text style={styles.veiculoLabel}>Veículo:</Text>
                            <Text style={styles.veiculo}>{this.props.sessao.placa}</Text>
                        </View>
                    ) : null
                }
            </View >
        );
        // <TouchableHighlight
        //         onPress={ ()=> false }
        //         style={{ marginHorizontal: 10, marginBottom: 10, borderRadius: 10}}
        //     >
        //         <View style={styles.listaItem}>
        //             <View style={styles.listaItemDate}>
        //                 <Text style={{ fontSize: 30, color: '#fff' }}>{sessao.dataDia}</Text>
        //                 <Text style={{ fontSize: 18, color: '#fff' }}>{sessao.dataMes}</Text>
        //             </View>
        //             <View style={styles.listaItemInfo}>
        //                 <Text style={styles.listaItemDuracao}>{sessao.duracao}</Text>
        //                 <Text style={styles.listaItemLocal}>{sessao.local}</Text>
        //                 <Text style={styles.listaItemInfoComum}>{sessao.placa}</Text>
        //                 <Text style={styles.listaItemInfoComum}>{sessao.cartaoBandeira}: {sessao.cartao}</Text>
        //                 <Text style={styles.listaItemInfoComum}>{sessao.horaInicio} - {sessao.horaFim}</Text>
        //             </View>
        //         </View>
        //     </TouchableHighlight>
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