import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    ListView, 
    TouchableHighlight,
    Picker
} from 'react-native';
import { defaultStyles } from 'parquimetro-styles';
import { withNavigationFocus } from 'react-navigation';

import { connect } from 'react-redux';
import { alteraTitulo } from 'parquimetro-actions/AppActions';

class Historico extends Component {

    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        let transacoes = [];
        for(let i = 0; i< 5; i++){
            transacoes.push({
                uid: i,
                dataDia: '06',
                dataMes: 'Abril',
                local: 'Av. Antônio de Almeida - Volta Redonda - RJ',
                duracao: '22min',
                placa: 'ABC-4513',
                cartaoBandeira: 'Mastercard',
                cartao: '**** **** **** 5413',
                horaInicio: '12:00',
                horaFim: '12:22'
            });
        }

        this.state = {
            ordem: "1",
            dataSource: ds.cloneWithRows(transacoes),
        };
    }

    componentWillMount(){
        if(this.props.isFocused){
            this.props.alteraTitulo('Histórico');
        }
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.isFocused){
            this.props.alteraTitulo('Histórico');
        }
    }

    renderRow(transacao) {
        return (
            <TouchableHighlight
                onPress={ ()=> false }
                style={{ marginHorizontal: 10, marginBottom: 10, borderRadius: 10}}
            >
                <View style={styles.listaItem}>
                    <View style={styles.listaItemDate}>
                        <Text style={{ fontSize: 30, color: '#fff' }}>{transacao.dataDia}</Text>
                        <Text style={{ fontSize: 18, color: '#fff' }}>{transacao.dataMes}</Text>
                    </View>
                    <View style={styles.listaItemInfo}>
                        <Text style={styles.listaItemDuracao}>{transacao.duracao}</Text>
                        <Text style={styles.listaItemLocal}>{transacao.local}</Text>
                        <Text style={styles.listaItemInfoComum}>{transacao.placa}</Text>
                        <Text style={styles.listaItemInfoComum}>{transacao.cartaoBandeira}: {transacao.cartao}</Text>
                        <Text style={styles.listaItemInfoComum}>{transacao.horaInicio} - {transacao.horaFim}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    render(){
        return (
            <View style={styles.tela}>
                <View>
                    <Picker  style={{alignSelf: 'flex-end', width: 130}}
                        selectedValue={this.state.ordem}
                        onValueChange={(itemValue, itemIndex) => this.setState({ordem: itemValue})}>
                        <Picker.Item label="Recentes" value="1" />
                        <Picker.Item label="Antigos" value="2" />
                        <Picker.Item label="Baratos" value="3" />
                        <Picker.Item label="Caros" value="4" />
                    </Picker>
                </View>
                <View style={{ flex: 1}}>
                    <ListView
                        enableEmptySections
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tela: {
        ...defaultStyles.telaFull,
    },
    listaItem:{
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: '#8b9bb5'
    },
    listaItemDate: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#626e82',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 30
    },
    listaItemInfo: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    listaItemDuracao: {
        borderRadius: 10,
        fontSize: 12,
        backgroundColor: '#fff',
        color: '#8b9bb5',
        alignSelf: 'flex-start',
        paddingHorizontal: 5,
    },
    listaItemLocal: {
        fontSize: 16,
        color: '#fff'
    },
    listaItemInfoComum: {
        fontSize: 13,
        color: '#b8c5db'
    }
});

export default connect(null, {alteraTitulo})(withNavigationFocus(Historico));