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
import MenuSuperior from 'parquimetro-components/MenuSuperior';

export default class Cabecalho extends Component {

    renderTitulo(){
        if(this.props.titulo){
            return (
                <Text style={styles.title}>
                    { this.props.titulo }
                </Text>
            );
        }
        if(this.props.imagem){
            return (
                <Image 
                    style={styles.image}
                    source={this.props.imagem} />
            );
        }
    }

    render(){
        return (
            <View style={{ width: '100%' }}>
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
        ...defaultStyles.telaFull,
        ...defaultStyles.telaPaddingPequeno,
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