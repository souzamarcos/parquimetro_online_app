import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    ScrollView,
    TouchableHighlight,
    Alert
} from 'react-native';
import { defaultStyles } from '../styles';
import cores from '../styles/cores';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';
import { deslogarUsuario } from '../actions/AutenticacaoActions';


class TelaConfiguracao  extends Component {

    _deslogarUsuario(){
        Alert.alert(
            'Aviso',
            'Deseja realmente sair?',
            [
                {text: 'Não' },
                {text: 'Sim', onPress: () => this.props.deslogarUsuario(),}
            ],
            { cancelable: true }
        );
    }

    render(){
        console.log(this.props.usuario);
        return (
            <ScrollView style={styles.tela}>
                <View style={styles.usuario}>
                    <Text style={styles.usuarioNome}>{this.props.usuario.nome} {this.props.usuario.sobrenome}</Text>
                    <Text style={styles.usuarioEmail}>{this.props.usuario.email}</Text>
                </View>
                <TouchableHighlight
                    onPress={() => this.props.navigation.navigate('PerfilPessoal') }
                    underlayColor="rgba(0, 0, 0, 0.05)"
                    >
                    <View style={styles.item}>
                        <View style={styles.itemIcone}>
                            <Ionicons name="md-person" size={25} color={cores.azul}/>
                        </View>
                        <View style={styles.itemTextoContainer}>
                            <Text style={styles.itemTexto}>Minha conta</Text>
                        </View>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => this.props.navigation.push('Perguntas') }
                    underlayColor="rgba(0, 0, 0, 0.05)"
                    >
                    <View style={styles.item}>
                        <View style={styles.itemIcone}>
                            <Ionicons name="md-help" size={25} color={cores.azul}/>
                        </View>
                        <View style={styles.itemTextoContainer}>
                            <Text style={styles.itemTexto}>Perguntas Frequentes</Text>
                        </View>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() =>  this.props.navigation.navigate('TelaSobre') }
                    underlayColor="rgba(0, 0, 0, 0.05)"
                    >
                    <View style={styles.item}>
                        <View style={styles.itemIcone}>
                            <Ionicons name="md-information-circle" size={25} color={cores.azul}/>
                        </View>
                        <View style={styles.itemTextoContainer}>
                            <Text style={styles.itemTexto}>Sobre</Text>
                        </View>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => this._deslogarUsuario()}
                    underlayColor="rgba(0, 0, 0, 0.05)"
                    >
                    <View style={styles.item}>
                        <View style={styles.itemIcone}>
                            <Ionicons name="md-exit" size={25} color={cores.vermelho}/>
                        </View>
                        <View style={styles.itemTextoContainer}>
                            <Text style={styles.itemTexto}>Sair</Text>
                        </View>
                    </View>
                </TouchableHighlight>
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
        //color: cores.azul,
    },
    usuarioEmail: {
        fontSize: 14,
        //color: cores.azul,
    },
    item: {
        flexDirection: 'row',
    },
    itemIcone: {
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemTextoContainer: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center'
    },
    itemTexto: {
        fontSize: 16
    }
});

const mapStateToProps = state => {
    return {
        usuario: state.AutenticacaoReducer.usuarioLogado
    }
};

export default connect(mapStateToProps, { deslogarUsuario })(TelaConfiguracao);