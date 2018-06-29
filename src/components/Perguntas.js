import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';
import { defaultStyles } from 'parquimetro-styles';

import { withNavigationFocus } from 'react-navigation';

import { connect } from 'react-redux';
import { alteraTitulo } from 'parquimetro-actions/AppActions';

class Perguntas extends Component {

    constructor(props){
        super(props);
    }

    componentWillMount(){
        if(this.props.isFocused){
            this.props.alteraTitulo('Dúvidas Frequentes');
        }
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.isFocused){
            this.props.alteraTitulo('Dúvidas Frequentes');
        }
    }

    render(){
        return (
            <View style={styles.tela}>
                <Text>
                    Perguntas
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tela: {
        ...defaultStyles.telaFull,
    }
});

export default connect(null, {alteraTitulo})(withNavigationFocus(Perguntas));