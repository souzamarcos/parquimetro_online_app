import React, { Component } from 'react';
import { 
    View, 
    ScrollView,
    StyleSheet, 
    ListView, 
    Picker,
    ActivityIndicator,
    RefreshControl,
} from 'react-native';
import HistoricoItem from './HistoricoItem';
import { defaultStyles } from '../styles';
import cores from '../styles/cores';
import Cabecalho from './Cabecalho';
import { connect } from 'react-redux';
import { carregarHistorico } from '../actions/HistoricoActions';

class TelaHistorico extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ordem: "1",
        };
    }

    componentWillMount(){
        this.props.carregarHistorico();
        this.criaFonteDados([]);
    }
    
    componentWillReceiveProps(nextProps){
        this.criaFonteDados(nextProps.historico);
    }

    criaFonteDados(historico) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.dataSource = ds.cloneWithRows(historico);
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
                        {/* <Picker.Item label="Antigos" value="2" />
                        <Picker.Item label="Baratos" value="3" />
                        <Picker.Item label="Caros" value="4" /> */}
                    </Picker>
                </View>
                <ScrollView style={{ flex: 1}} contentContainerStyle={styles.listaContainer}>
                    {
                        this.props.carregandoHistorico ? 
                        (
                            <ActivityIndicator size="large" color={cores.azul} />
                        ) :
                        (
                            <ListView
                                enableEmptySections
                                dataSource={this.dataSource}
                                renderRow={this.renderRow}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={this.props.carregandoHistorico}
                                        onRefresh={() =>this.props.carregarHistorico()}
                                    />
                                }
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

const mapStateToProps = state => {
    return {
        historico: state.HistoricoReducer.historico,
        carregandoHistorico: state.HistoricoReducer.carregandoHistorico,
        erro: state.HistoricoReducer.erro,
    }
};

export default connect(mapStateToProps, {carregarHistorico})(TelaHistorico);