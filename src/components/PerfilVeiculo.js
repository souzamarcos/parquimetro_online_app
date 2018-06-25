import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
} from 'react-native';
import { defaultStyles } from 'parquimetro-styles';

export default class PerfilVeiculo extends Component {
  
    render() {
      return (
        <View style={styles.tela}>
            <Text>PerfilVeiculo</Text>
        </View>
      );
    }
  }
  
const styles = StyleSheet.create({
    tela: {
        ...defaultStyles.telaFull,
    },
});