import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Picker,
  TouchableHighlight,
  Alert
} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import _ from 'lodash';
import Color from 'color';
import Moment, { duration } from 'moment';
import { defaultStyles } from 'parquimetro-styles';
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
            sessao: null,
            concluirSessao: false,
            telaContagemCor: '#4988ef',
            contador: BackgroundTimer.setInterval(() => {
                if(!_.isEmpty(this.state.sessao)){
                    let duracaoPercorrida = duration(Moment().diff(this.state.sessao.horaInicio));
                    let duracaoMaxima = duration(3, 'hours');
                    let tempoPercorrido = Moment.utc(duracaoPercorrida.as('milliseconds'));
                    let tempoMaximo = Moment.utc(duracaoMaxima.as('milliseconds'));
                    let duracaoSobrando = duration(tempoMaximo.diff(tempoPercorrido));
                    let tempoSobrando = Moment.utc(duracaoSobrando.as('milliseconds'));
                    // let horas = tempoSobrando.get('hours');
                    // let minutos = tempoSobrando.get('minutes');
                    
                    this.state.sessao.tempoSobrando = tempoSobrando.format('HH:mm:ss');
                    console.log('tic', this.state.sessao.tempoSobrando );
                }
            }, 1000)
        }
        // BackgroundTimer.clearInterval(this.state.contador);
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

    iniciarSessao(){

        if(_.isEmpty(this.state.cartao)){
            Alert.alert(
                'Aviso',
                'Preencha o cartão a ser utilizado',
                [
                  //{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK'},
                ],
                { cancelable: false }
            );
            return;
        }

        if(_.isEmpty(this.state.veiculo)){
            Alert.alert(
                'Aviso',
                'Preencha o veículo a ser utilizado',
                [
                  {text: 'OK'},
                ],
                { cancelable: false }
            );
            return;
        }

        this.setState({
            sessao: {
                tempoSobrando: null,
                parquimetro: {
                    id: 1,
                    descricao: 'Avenida Paulo de Frontin'
                },
                horaInicio: Moment().subtract(_.random(0,2), 'hours'),
                cartao: {
                    id: 1,
                    numero: '****.****.****.1111'
                },
                veiculo: {
                    id: 1,
                    placa: 'abc-1234'
                },
            }
        });
    }

    pararSessao(){
        return false;
    }

    renderTela(){
        if(!_.isEmpty(this.state.sessao)){
            return (
                <View style={[styles.telaContagem, { backgroundColor: this.state.telaContagemCor}]}>
                    <Cabecalho style={styles.cabecalho}/>
                    <View style={styles.telaContagemInformacao}>
                        <View style={styles.circuloProgresso}>
                            <ProgressCircle
                                percent={0}
                                borderWidth={8}
                                color="#fff"
                                shadowColor={ Color(this.state.telaContagemCor).lighten(0.2).string() } //adicionando a mesma cor da tela com mais branco
                                bgColor={this.state.telaContagemCor}
                                radius={100}
                            >
                                <Text style={styles.circuloProgressoTexto}>03:00</Text>
                            </ProgressCircle>
                        </View>
                        <Text style={styles.textoContagem}>
                            Avenida Paulo de Frontin
                        </Text>
                        <Text style={styles.textoContagem}>
                            Cartão: { this.state.sessao.cartao.numero } 
                        </Text>
                        <Text style={styles.textoContagem}>
                            Veículo: { this.state.sessao.veiculo.placa } 
                        </Text>
                    </View>
                    <View style={styles.telaContagemParteBotao}>
                        <TouchableHighlight
                            onPress={() => this.pararSessao()}
                            style={styles.botaoVerde}
                        >
                            <Text style={styles.botaoText}>
                                Parar
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            );
        }

        return (
            <View style={styles.tela}>
                <View style={styles.parteSuperior}>
                    <Cabecalho style={styles.cabecalho}/>
                    <View style={styles.circuloProgresso}>
                        <ProgressCircle
                            percent={0}
                            borderWidth={8}
                            color="#fff"
                            shadowColor={ Color(this.state.telaContagemCor).lighten(0.2).string() } //adicionando a mesma cor da tela com mais branco
                            bgColor={this.state.telaContagemCor}
                            radius={100}
                        >
                            <Text style={styles.circuloProgressoTexto}>03:00</Text>
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
                            onPress={() => this.iniciarSessao()}
                            style={styles.botaoVerde}
                        >
                            <Text style={styles.botaoText}>
                                Iniciar
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }

    render(){
        return (
            <ScrollView contentContainerStyle={styles.tela}>
                { this.renderTela() }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    tela: {
        flexGrow: 1,
        backgroundColor: '#c4cfd5'
    },
    telaContagem: {
        flexGrow: 1,
        paddingBottom: 20
    },
    telaContagemInformacao: {
        ...defaultStyles.telaPaddingHorizontalGrande,
    },
    telaContagemParteBotao: {
        ...defaultStyles.telaPaddingHorizontalGrande,
        flex: 1,
        justifyContent: 'center',
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
    textoContagem: {
        textAlign: 'center',
        color: '#fff',
        marginBottom: 10,
        fontSize: 20,
    },
    blocoBranco: {
        backgroundColor: '#fff',
        ...defaultStyles.telaPaddingPequeno,
        borderRadius: 7,
    },
    botaoVerde: {
        ...defaultStyles.botaoVerde,
        marginTop: 10
    },
    botaoText:{
        ...defaultStyles.botaoAzulText,
    }
});

export default connect(null, {alteraTitulo})(withNavigationFocus(Parquimetro));