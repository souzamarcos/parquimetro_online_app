import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  ScrollView,
  RefreshControl
} from 'react-native';
import Pergunta from './Pergunta';
import { defaultStyles } from '../styles';
import { connect } from 'react-redux';
import { carregarPerguntas } from '../actions/PerguntasActions';

class TelaPerguntas extends Component {

    componentWillMount(){
        this.props.carregarPerguntas();
        this.criaFonteDados([]);
    }
    
    componentWillReceiveProps(nextProps){
        this.criaFonteDados(nextProps.perguntas);
    }

    criaFonteDados(perguntas) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.dataSource = ds.cloneWithRows(perguntas);
    }

    renderRow(pergunta){
        return (
            <Pergunta pergunta={pergunta} />
        );
    }

    render() {
        return (
            <ScrollView style={{width: "100%"}} contentContainerStyle={styles.tela}>
                <ListView
                    enableEmptySections
                    renderRow={this.renderRow}
                    dataSource={this.dataSource}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.props.carregandoPerguntas}
                            onRefresh={() =>this.props.carregarPerguntas()}
                        />
                    }
                    />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    tela: {
        ...defaultStyles.telaPaddingPequeno,
        backgroundColor: '#e6ebee',
        flexGrow: 1,
        justifyContent: 'center',
    }
});

const mapStateToProps = state => {
    return {
        perguntas: state.PerguntasReducer.perguntas,
        carregandoPerguntas: state.PerguntasReducer.carregandoPerguntas,
        erro: state.PerguntasReducer.erro,
    }
};

export default connect(mapStateToProps, { carregarPerguntas })(TelaPerguntas);