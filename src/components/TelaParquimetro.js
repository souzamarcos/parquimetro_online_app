import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Picker,
  TouchableHighlight,
  Alert,
  ActivityIndicator
} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import _ from 'lodash';
import Color from 'color';
import Moment, { duration } from 'moment';
import { defaultStyles } from '../styles';
import cores from '../styles/cores';
import ProgressCircle from 'react-native-progress-circle';
import { connect } from 'react-redux';
import { carregarParquimetro, modificaLatitudeLongitude } from '../actions/ParquimetroActions';
import { carregarCartoes } from '../actions/CartoesActions';
import { carregarVeiculos } from '../actions/VeiculosActions';

class TelaParquimetro extends Component {

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
        this.props.carregarCartoes();
        this.props.carregarVeiculos();
        this.geolocation = navigator.geolocation.watchPosition(
            (position) => {
                this.props.modificaLatitudeLongitude(position.coords);
                this.props.carregarParquimetro(this.props.latitude, this.props.longitude);
            }, 
            (erro) => {
                console.log(erro);
            },
            { 
                enableHighAccuracy: true, 
                timeout: 10000, 
                maximumAge: 1000,
                distanceFilter: 10,
                enableHighAccuracy: true
            });
    }

    componentWillUnmount(){
        navigator.geolocation.clearWatch(this.geolocation);
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

    renderPickerCartao(){
        if(_.isEmpty(this.props.cartoes)) {
            return (
                <Picker
                    selectedValue={this.state.cartao}
                    style={{ height: 50, width: '100%' }}
                    onValueChange={(itemValue) => this.setState({cartao: itemValue})}>
                    <Picker.Item key={-1} label="Cartão" value={null} />
                </Picker>
            )
        }

        return (
            <Picker
                selectedValue={this.state.cartao}
                style={{ height: 50, width: '100%' }}
                onValueChange={(itemValue) => this.setState({cartao: itemValue})}>
                <Picker.Item key={-1} label="Cartão" value={null} />
                {
                    this.props.cartoes.map((cartao) => (
                        <Picker.Item key={cartao.index} label={"****.****.****." + cartao.numero} value={cartao.id} />
                    ))
                }
            </Picker>
        )
    }

    renderPickerVeiculo(){
        if(_.isEmpty(this.props.veiculos)) {
            return (
                <Picker
                    selectedValue={this.state.veiculo}
                    style={{ height: 50, width: '100%' }}
                    onValueChange={(itemValue) => this.setState({veiculo: itemValue})}>
                    <Picker.Item label="Veículo" value={null} />
                </Picker>
            )
        }

        return (
            <Picker
                selectedValue={this.state.veiculo}
                style={{ height: 50, width: '100%' }}
                onValueChange={(itemValue) => this.setState({veiculo: itemValue})}>
                <Picker.Item label="Veículo" value={null} />
                {
                    this.props.veiculos.map((veiculo) => (
                        <Picker.Item key={veiculo.index} label={veiculo.placa.toUpperCase()} value={veiculo.id} />
                    ))
                }
            </Picker>
        )
    }

    renderTela(){
        if(!_.isEmpty(this.state.sessao)){
            if(this.state.sessao.exibirResumoSessao){
                //tela resumo
                return (
                    <View style={[styles.telaResumo, { backgroundColor: this.state.telaContagemCor}]}>
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
                    {
                        this.props.carregandoParquimetro ?
                        <ActivityIndicator style={styles.activityIndicator} size="large" color={cores.branco} />
                        :
                        (
                            <Text style={styles.textoContagem}>
                                {this.props.parquimetro.endereco_completo}
                            </Text>
                        )
                    }
                </View>
                <View style={styles.parteInferior}>
                    <View style={styles.blocoBranco}>
                        {
                            this.renderPickerCartao()
                        }
                        {
                            this.renderPickerVeiculo()
                        }
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
        marginTop: 30,
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

const mapStateToProps = state => {
    return {
        cartoes: state.CartoesReducer.cartoes,
        veiculos: state.VeiculosReducer.veiculos,
        parquimetro: state.ParquimetroReducer.parquimetro,
        carregandoParquimetro: state.ParquimetroReducer.carregandoParquimetro,
        sessao: state.ParquimetroReducer.sessao,
        carregandoSessao: state.ParquimetroReducer.carregandoSessao,
        cartaoId: state.ParquimetroReducer.cartaoId,
        veiculoId: state.ParquimetroReducer.veiculoId,
        latitude: state.ParquimetroReducer.latitude,
        longitude: state.ParquimetroReducer.longitude,
    }
};


export default connect(mapStateToProps, {
    carregarParquimetro,
    modificaLatitudeLongitude,
    carregarCartoes,
    carregarVeiculos
})(TelaParquimetro);