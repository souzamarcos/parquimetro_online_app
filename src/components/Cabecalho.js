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
import MenuSuperior from 'parquimetro-components/MenuSuperior';

export default class Cabecalho extends Component {


    render(){
        return (
            <View style={{ width: '100%' }}>
                <View style={styles.headerLine}>
                    <Text style={styles.title}>
                        { this.props.titulo }
                    </Text>
                </View>
                <View style={styles.topMenu}>
                    <MenuSuperior />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewScreen: {
        ...defaultStyles.viewFull,
        ...defaultStyles.viewPaddingSmall,
    },
    title: {
        ...defaultStyles.textTitle,
        marginBottom: 30,
    },
    headerLine: {
        paddingVertical: 25,
    },
    topMenu: {
        position: 'absolute',
        right: 0,
        top: 0,
    }
});