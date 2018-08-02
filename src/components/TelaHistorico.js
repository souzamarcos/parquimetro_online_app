import React, { Component } from 'react';
import { 
    View, 
    ScrollView,
    StyleSheet, 
    ListView, 
    Picker,
    ActivityIndicator,
} from 'react-native';
import HistoricoItem from './HistoricoItem';
import { defaultStyles } from '../styles';
import cores from '../styles/cores';
import { withNavigationFocus } from 'react-navigation';
import Cabecalho from './Cabecalho';
import { connect } from 'react-redux';
import { alteraTitulo } from '../actions/AppActions';

class TelaHistorico extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        let transacoes = [];
        for(let i = 0; i< 5; i++){
            transacoes.push({
                uid: i,
                dataDia: '06',
                dataMes: 'Abril',
                rua: 'Av. Antônio de Almeida - Volta Redonda - RJ',
                bairro: 'Vila Santa Cecília',
                duracao: '22',
                valor: 2.35,
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

    renderRow(sessao) {
        return (
            <HistoricoItem sessao={sessao} />
        );
    }

    render(){
        return (
            <ScrollView style={styles.tela} contentContainerStyle={{flex:1}}>
                <Cabecalho titulo="Histórico" />
                <View>
                    <Picker  style={{alignSelf: 'flex-end', width: 130, color: cores.azul}}
                        selectedValue={this.state.ordem}
                        onValueChange={(itemValue, itemIndex) => this.setState({ordem: itemValue})}>
                        <Picker.Item label="Recentes" value="1" />
                        <Picker.Item label="Antigos" value="2" />
                        <Picker.Item label="Baratos" value="3" />
                        <Picker.Item label="Caros" value="4" />
                    </Picker>
                </View>
                <ScrollView style={{ flex: 1}} contentContainerStyle={styles.listaContainer}>
                    {
                        /*this.props.carregandoCartoes*/ false ? 
                        (
                            <ActivityIndicator size="large" color={cores.azul} />
                        ) :
                        (
                            <ListView
                                enableEmptySections
                                dataSource={this.state.dataSource}
                                renderRow={this.renderRow}
                            />
                        )
                    }
                </ScrollView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    tela: {
        ...defaultStyles.telaFull,
        backgroundColor: '#e6ebee'
    },
    listaContainer: {
        flex: 1,
        ...defaultStyles.telaPaddingPequeno,
        justifyContent: 'center',
    },
});

export default connect(null, {alteraTitulo})(withNavigationFocus(TelaHistorico));