import React, { Component } from 'react';
import {
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import { defaultStyles } from 'parquimetro-styles';
import cores from 'parquimetro-styles/cores';
import MenuSuperior from 'parquimetro-components/MenuSuperior';
import { connect } from 'react-redux';
import { alteraTitulo } from 'parquimetro-actions/AppActions';

class Cabecalho extends Component {
    
    renderTitulo(){
        if(this.props.titulo){
            switch(this.props.titulo){
                case 'Pessoal':
                case 'Veículo':
                case 'Cartão':
                    return (
                        <Image 
                            style={styles.image}
                            source={require('parquimetro-imgs/icone.png')} />
                    );
                    break;
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
            <View style={styles.tela}>
                <View style={styles.headerLine}>
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
        backgroundColor: cores.telaBackgroundColor
    },
    title: {
        ...defaultStyles.textTitle,
    },
    image: {
        width: 100,
        height: 100,
    },
    headerLine: {
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