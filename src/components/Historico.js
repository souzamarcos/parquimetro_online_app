import React, { Component } from 'react';
import {
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  View,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import { defaultStyles } from 'parquimetro-styles';
import Cabecalho from 'parquimetro-components/Cabecalho';

export default class Historico extends Component {


    render(){
        return (
            <View style={{ width: '100%' }}>
                <Cabecalho titulo="Histórico"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewScreen: {
        ...defaultStyles.viewFull,
        ...defaultStyles.viewPaddingSmall,
    },
});