import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  ScrollView,
} from 'react-native';
import Pergunta from './Pergunta';
import Cabecalho from './Cabecalho';

import { defaultStyles } from '../styles';

import { withNavigationFocus } from 'react-navigation';

import { connect } from 'react-redux';
import { alteraTitulo } from '../actions/AppActions';

class TelaPerguntas extends Component {

    constructor(props){
        super(props);

        this.state = {
            perguntas: []
        }
    }

    componentWillMount(){
        if(this.props.isFocused){
            this.props.alteraTitulo('Dúvidas Frequentes');
        }
        this.criaFonteDados([
                {
                    titulo: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ?',
                    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    ativa: false,
                },
                {
                    titulo: 'Lorem ipsum dolor sit amet ?',
                    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    ativa: false,
                },
                {
                    titulo: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ?',
                    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. v Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.t ut labore et dolore magna aliqua.',
                    ativa: false,
                },
                {
                    titulo: 'Lorem ipsum dolor sit amet ?',
                    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    ativa: false,
                },
            ]);
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.isFocused){
            this.props.alteraTitulo('Dúvidas Frequentes');
        }
    }

    criaFonteDados(conversas) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.dataSource = ds.cloneWithRows(conversas);
    }

    renderRow(pergunta){
        return (
            <Pergunta pergunta={pergunta} />
        );
    }

    render() {
        return (
            <ScrollView style={styles.tela}>
                <ListView

                    renderRow={this.renderRow}
                    dataSource={this.dataSource}
                    />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    tela: {
        ...defaultStyles.telaFull,
        ...defaultStyles.telaPaddingPequeno,
        backgroundColor: '#e6ebee'
    }
});

export default connect(null, {alteraTitulo})(withNavigationFocus(TelaPerguntas));