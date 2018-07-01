import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Picker,
  TouchableHighlight
} from 'react-native';
import { defaultStyles } from 'parquimetro-styles';
import Moment from 'moment';
import ProgressCircle from 'react-native-progress-circle';
import Cabecalho from 'parquimetro-components/Cabecalho';
import { withNavigationFocus } from 'react-navigation';
import { connect } from 'react-redux';
import { alteraTitulo } from 'parquimetro-actions/AppActions';


class Parquimetro extends Component {

    constructor(props){
        super(props);

        this.state = {
            cartao: null,
            veiculo: null,
            data: Moment()
        }
    }

    componentWillMount(){
        if(this.props.isFocused){
            this.props.alteraTitulo('');
        }
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.isFocused){
            this.props.alteraTitulo('');
        }
    }

    render(){
        return (
            <ScrollView style={styles.tela}>
                <View style={styles.parteSuperior}>
                    <Cabecalho style={styles.cabecalho}/>
                    <View style={styles.circuloProgresso}>
                        <ProgressCircle
                            percent={30}
                            borderWidth={8}
                            color="#fff"
                            shadowColor="#6097f1"
                            bgColor="#4988ef"
                            radius={100}
                        >
                            <Text style={styles.circuloProgressoTexto}>{this.state.data.format('hh:mm')}</Text>
                        </ProgressCircle>
                    </View>
                    <Text style={styles.textoRua}>
                        Avenida Paulo de Frontin
                    </Text>
                </View>
                <View style={styles.parteInferior}>
                    <View style={styles.blocoBranco}>
                        <Picker
                            selectedValue={this.state.cartao}
                            style={{ height: 50, width: '100%' }}
                            onValueChange={(itemValue) => this.setState({cartao: itemValue})}>
                            <Picker.Item label="Cartão" value={null} />
                            <Picker.Item label="****.****.****.1111" value="1" />
                            <Picker.Item label="****.****.****.1234" value="2" />
                        </Picker>
                        <Picker
                            selectedValue={this.state.veiculo}
                            style={{ height: 50, width: '100%' }}
                            onValueChange={(itemValue) => this.setState({veiculo: itemValue})}>
                            <Picker.Item label="Veículo" value={null} />
                            <Picker.Item label="abc-1234" value="1" />
                            <Picker.Item label="abc-2222" value="2" />
                        </Picker>
                        <TouchableHighlight
                            onPress={() => false}
                            style={styles.botao}
                        >
                            <Text style={styles.botaoText}>
                                Iniciar
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    tela: {
        ...defaultStyles.telaFull,
        backgroundColor: '#c4cfd5'
    },
    cabecalho: {
        backgroundColor: 'transparent'
    },
    parteSuperior: {
        backgroundColor: '#4988ef',
        paddingBottom: 100
    },
    parteInferior: {
        ...defaultStyles.telaPaddingPequeno,
        position: 'relative',
        top: -100,
        marginBottom: -100,
    },
    circuloProgresso: {
        alignItems: 'center',
        marginBottom: 20,
    },
    circuloProgressoTexto: {
        fontSize: 50,
        color: '#fff'
    },
    textoRua: {
        textAlign: 'center',
        color: '#fff',
        marginBottom: 10,
        fontSize: 20,
    },
    blocoBranco: {
        backgroundColor: '#fff',
        ...defaultStyles.telaPaddingPequeno,
        borderRadius: 10,
    },
    botao: {
        ...defaultStyles.botaoVerde,
        marginTop: 10
    },
    botaoText:{
        ...defaultStyles.botaoAzulText,
    }
});

export default connect(null, {alteraTitulo})(withNavigationFocus(Parquimetro));