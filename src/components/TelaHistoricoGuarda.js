import React, { Component } from 'react';
import { 
    View, 
    StyleSheet, 
    ListView, 
    Picker,
    ScrollView,
    RefreshControl
} from 'react-native';
import HistoricoGuardaItem from './HistoricoGuardaItem';
import { defaultStyles } from '../styles';
import cores from '../styles/cores';
import Cabecalho from './Cabecalho';
import { connect } from 'react-redux';
import { carregarHistorico } from '../actions/HistoricoGuardaActions';

class TelaHistoricoGuarda extends Component {

    state = {
        ordem: "1",
    };

    componentWillMount(){
        this.props.carregarHistorico();
        this.criaFonteDados([]);
    }
    
    componentWillReceiveProps(nextProps){
        this.criaFonteDados(nextProps.historico);
    }

    renderRow(consulta) {
        return (
            <HistoricoGuardaItem consulta={consulta} />
        );
    }

    criaFonteDados(historico) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.dataSource = ds.cloneWithRows(historico);
    }

    render(){
        return (
            <ScrollView style={styles.tela} contentContainerStyle={{flex:1}}>
                <Cabecalho titulo="Consultas" />
                <View>
                    <Picker  style={{alignSelf: 'flex-end', width: 130, color: cores.azul}}
                        selectedValue={this.state.ordem}
                        onValueChange={(itemValue, itemIndex) => this.setState({ordem: itemValue})}>
                        <Picker.Item label="Recentes" value="1" />
                        {/* <Picker.Item label="Antigos" value="2" />
                        <Picker.Item label="Baratos" value="3" />
                        <Picker.Item label="Caros" value="4" /> */}
                    </Picker>
                </View>
                <View style={{ flex: 1}}>
                    <ListView
                        enableEmptySections
                        dataSource={this.dataSource}
                        renderRow={this.renderRow}
                        contentContainerStyle={styles.listaContainer}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.props.carregandoHistorico}
                                onRefresh={() =>this.props.carregarHistorico()}
                            />
                        }
                    />
                </View>
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
        ...defaultStyles.telaPaddingPequeno,
    },
});

const mapStateToProps = state => {
    return {
        historico: state.HistoricoGuardaReducer.historico,
        carregandoHistorico: state.HistoricoGuardaReducer.carregandoHistorico,
        erro: state.HistoricoGuardaReducer.erro,
    }
};

export default connect(mapStateToProps, { carregarHistorico })(TelaHistoricoGuarda);