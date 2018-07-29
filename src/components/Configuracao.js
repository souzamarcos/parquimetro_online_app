import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    ScrollView,
    TouchableHighlight,
} from 'react-native';
import { defaultStyles } from '../styles';
import cores from '../styles/cores';

class Configuracao  extends Component {

    render(){
        return (
            <ScrollView  style={styles.tela}>
                <View style={styles.usuario}>
                    <Text style={styles.usuarioNome}>Marcos Souza</Text>
                    <Text style={styles.usuarioEmail}>markin.mv.amaral@gmail.com</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    tela: {
        ...defaultStyles.telaFull,
    },
    usuario: {
        padding: 15,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    usuarioNome: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    usuarioEmail: {
        fontSize: 14,
    }
});

export default Configuracao;