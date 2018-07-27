import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import { defaultStyles } from '../styles';
import cores from '../styles/cores';
import MenuSuperior from './MenuSuperior';
import { connect } from 'react-redux';
import { alteraTitulo } from '../actions/AppActions';

class Cabecalho extends Component {
    
    renderTitulo(){
        if(this.props.titulo){
            switch(this.props.titulo){
                case 'Pessoal':
                    return (
                        <Image 
                            style={styles.imagem}
                            source={require('../imgs/icone_pessoal.png')} />
                    );
                case 'Veículo':
                    return (
                        <Image 
                            style={styles.imagem}
                            source={require('../imgs/icone_placa.png')} />
                    );
                case 'Cartão':
                    return (
                        <Image 
                            style={styles.imagem}
                            source={require('../imgs/icone_cartao.png')} />
                    );
                default:
                    return (
                        <Text style={styles.title}>
                            { this.props.titulo }
                        </Text>
                    );
            }
            
        }
    }

    render(){

        return (
            <View style={[styles.tela, {backgroundColor: this.props.backgroundColor}]}>
                <View style={styles.imagemContainer}>
                    {this.renderTitulo()}
                </View>
                <View style={styles.topMenu}>
                    <MenuSuperior texto="..."/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tela: {
        width: '100%',
        zIndex: 10,
        overflow: 'visible'
    },
    title: {
        ...defaultStyles.textTitle,
        color: cores.azul,
    },
    imagem: {
        width: 100,
        height: 100,
    },
    imagemContainer: {
        paddingVertical: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topMenu: {
        position: 'absolute',
        right: 0,
        top: 0,
    }
});

const mapStateToProps = state => (
    {
        titulo: state.AppReducer.titulo,
    }
);

export default connect(
    mapStateToProps, 
    { 
        alteraTitulo,
    })
(Cabecalho)