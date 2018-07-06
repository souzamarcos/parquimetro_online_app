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
            telaContagemCor: '#4988ef',
            cartao: null,
            veiculo: null,
            sessao: null,
            exibirResumoSessao: false,
            textoProgresso: "00:00",
            porcentagemContador: 0,
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
                valorAtual: 0.00,
                tempoSobrando: null,
                exibirResumoSessao: false,
                parquimetro: {
                    id: 1,
                    descricao: 'Avenida Paulo de Frontin',
                    tempoMaximoMinutos: 240,
                    precoMinuto: 0.0416666667
                },
                horaInicio: Moment(),
                cartao: {
                    id: 1,
                    numero: '****.****.****.1111'
                },
                veiculo: {
                    id: 1,
                    placa: 'abc-1234'
                },
            },
        });

        BackgroundTimer.runBackgroundTimer(() => { 
            //corrigir contador
            if(!_.isEmpty(this.state.sessao)){
                let duracaoPercorrida = duration(Moment().diff(this.state.sessao.horaInicio));
                let tempoPercorrido = Moment.utc(duracaoPercorrida.as('milliseconds'));
               
                let tempoMaximoMinutos = this.state.sessao.parquimetro.tempoMaximoMinutos;
                let minutosPercorridos = duracaoPercorrida.as('minutes');
                let porcentagemContador = (minutosPercorridos / tempoMaximoMinutos) * 100;

                let textoProgresso = tempoPercorrido != null ? tempoPercorrido.format('HH:mm') : ""
                
                let valorAtual = _.round(this.state.sessao.parquimetro.precoMinuto * minutosPercorridos, 2);
                
                this.setState({
                    porcentagemContador,
                    textoProgresso,
                    sessao: {
                        ...this.state.sessao,
                        valorAtual
                    }
                });

                if(porcentagemContador>=100){
                    //parar contador
                    BackgroundTimer.stopBackgroundTimer();
                }
                
            }
        }, 1000);
    }

    exibirResumoSessao(){
        this.setState({
            sessao: {
                ...this.state.sessao,
                exibirResumoSessao: true
            }
        });
    }

    confirmarConclusaoSessao(){
        Alert.alert(
            'Aviso',
            'Deseja realmente finalizar a sessão? Esta ação não pode ser desfeita',
            [
                {text: 'Não' },
                {text: 'Sim', onPress: () => this.concluirSessao(),}
            ],
            { cancelable: true }
        );
        return;
    }

    cancelarConclusaoSessao(){
        this.setState({
            sessao: {
                ...this.state.sessao,
                exibirResumoSessao: false
            }
        });
    }

    concluirSessao(){
        Alert.alert(
            'Aviso',
            'Sessão concluída com sucesso!',
            [
                {text: 'OK'}
            ],
            { cancelable: false }
        );
        //pausar o timer
        BackgroundTimer.stopBackgroundTimer();

        this.setState({
            cartao: null,
            veiculo: null,
            sessao: null,
            exibirResumoSessao: false,
            textoProgresso: "00:00",
            porcentagemContador: 0,
        });
    }

    renderTela(){
        if(!_.isEmpty(this.state.sessao)){
            if(this.state.sessao.exibirResumoSessao){
                //tela resumo
                return (
                    <View style={[styles.telaResumo, { backgroundColor: this.state.telaContagemCor}]}>
                        <Cabecalho style={styles.cabecalho}/>
                        <View style={styles.telaResumoConteudo}>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 16, color: '#fff', paddingVertical: 20,}}>
                                valor total
                            </Text>
                            <Text style={styles.telaResumoValor}>
                                R$ {this.state.sessao.valorAtual.toString().replace('.',',')}
                            </Text>
                            <Text style={styles.telaResumoCartao}>
                                Visa: { this.state.sessao.cartao.numero } 
                            </Text>
                            <View style={styles.telaResumoItens}>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.telaResumoItemTitulo}>
                                        tempo
                                    </Text>
                                    <Text style={styles.telaResumoItemvalor}>
                                        {this.state.textoProgresso}
                                    </Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.telaResumoItemTitulo}>
                                        veículo
                                    </Text>
                                    <Text style={styles.telaResumoItemvalor}>
                                        {this.state.sessao.veiculo.placa}
                                    </Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.telaResumoItemTitulo}>
                                        data
                                    </Text>
                                    <Text style={styles.telaResumoItemvalor}>
                                        {this.state.sessao.horaInicio.format('DD/MM/YYYY')}
                                    </Text>
                                </View>
                            </View>
                            <Text style={styles.telaResumoCartao}>
                                Avenida Paulo de Frontin
                            </Text>
                            <View>
                                <TouchableHighlight
                                    onPress={() => this.confirmarConclusaoSessao()}
                                    style={styles.botaoBranco}
                                >
                                    <Text style={[styles.botaoVerdeText, {color: this.state.telaContagemCor}]}>
                                        Concluir
                                    </Text>
                                </TouchableHighlight>
                                <TouchableHighlight
                                    onPress={() => this.cancelarConclusaoSessao()}
                                    style={{ marginTop: 10,}}
                                >
                                    <Text style={[styles.botaoCancelarText, {color: '#fff'}]}>
                                        Voltar
                                    </Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                );
            }

            //tela Contagem
            return (
                <View style={[styles.telaContagem, { backgroundColor: this.state.telaContagemCor}]}>
                    <Cabecalho style={styles.cabecalho}/>
                    <View style={styles.telaContagemInformacao}>
                        <View style={styles.circuloProgresso}>
                            <ProgressCircle
                                percent={this.state.porcentagemContador}
                                borderWidth={8}
                                color="#fff"
                                shadowColor={ Color(this.state.telaContagemCor).lighten(0.2).string() } //adicionando a mesma cor da tela com mais branco
                                bgColor={this.state.telaContagemCor}
                                radius={100}
                            >
                                <Text style={styles.circuloProgressoTexto}>{this.state.textoProgresso}</Text>
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
                            onPress={() => this.exibirResumoSessao()}
                            style={styles.botaoBranco}
                        >
                            <Text style={[styles.botaoVerdeText, {color: this.state.telaContagemCor}]}>
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
                            <Text style={styles.circuloProgressoTexto}>{this.state.textoProgresso}</Text>
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
                            <Text style={styles.botaoVerdeText}>
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
    telaResumo: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    telaResumoConteudo: {
        ...defaultStyles.telaPaddingHorizontalGrande,
        justifyContent: 'space-between',
    },
    telaContagemInformacao: {
        ...defaultStyles.telaPaddingHorizontalGrande,
    },
    telaContagemParteBotao: {
        ...defaultStyles.telaPaddingHorizontalGrande,
        flex: 1,
        justifyContent: 'center',
    },
    telaResumoValor: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 50,
        color: '#fff',
        paddingVertical: 10,
    },
    telaResumoCartao: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        paddingVertical: 20,
    },
    telaResumoItemTitulo: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#fff',
    },
    telaResumoItemvalor: {
        textAlign: 'center',
        fontSize: 14,
        color: '#fff',
    },
    telaResumoItens: {
        flexDirection: 'row', 
        paddingVertical: 20,
        paddingVertical: 20,
    },
    telaResumoBotoes: {
        paddingVertical: 20,
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
        ...defaultStyles.telaPaddingPequeno,
        backgroundColor: '#fff',
        borderRadius: 7,
    },
    botaoVerde: {
        ...defaultStyles.botaoVerde,
        marginTop: 10
    },
    botaoVerdeText:{
        ...defaultStyles.botaoAzulText,
    },
    botaoCancelarText: {
        ...defaultStyles.botaoAzulText,
        paddingVertical: 15,
        paddingHorizontal: 15,
    },
    botaoBranco: {
        ...defaultStyles.botaoBranco,
        marginTop: 10
    },
});

export default connect(null, {alteraTitulo})(withNavigationFocus(Parquimetro));