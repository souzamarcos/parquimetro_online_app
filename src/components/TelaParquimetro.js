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
import { renderErro } from '../utils/Erro';
import BackgroundTimer from 'react-native-background-timer';
import _ from 'lodash';
import Color from 'color';
import Moment, { duration } from 'moment';
import { defaultStyles } from '../styles';
import cores from '../styles/cores';
import ProgressCircle from 'react-native-progress-circle';
import { connect } from 'react-redux';
import { 
    carregarParquimetro, 
    carregarParquimetroErro,
    modificaLatitudeLongitude, 
    modificaCartaoId, 
    modificaVeiculoId,
    iniciarSessao,
    modificaPorcentagemContador,
    modificaTempoContador,
    modificaValorAtual,
    finalizarSessao
 } from '../actions/ParquimetroActions';
import { carregarCartoes } from '../actions/CartoesActions';
import { carregarVeiculos } from '../actions/VeiculosActions';

class TelaParquimetro extends Component {

    constructor(props){
        super(props);

        this.state = {
            telaContagemCor: '#4988ef',
            exibirResumoSessao: false,
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
        if(!this.props.cartaoId){
            Alert.alert(
                'Aviso',
                'Preencha o cartão a ser utilizado',
                [
                  {text: 'OK'},
                ],
                { cancelable: false }
            );
            return;
        }

        if(!this.props.veiculoId){
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

        const {latitude, longitude, cartaoId, veiculoId} = this.props;

        this.props.iniciarSessao(latitude,longitude,cartaoId,veiculoId);

        BackgroundTimer.runBackgroundTimer(() => { 
            //corrigir contador
            if(!_.isEmpty(this.props.sessao)){

                let duracaoPercorrida = null;
                if(Moment() < Moment(this.props.sessao.data_inicio)){
                    duracaoPercorrida = duration(Moment().diff(Moment()));
                }else{
                    duracaoPercorrida = duration(Moment().diff(this.props.sessao.data_inicio));
                }
                
                let tempoPercorrido = Moment.utc(duracaoPercorrida.as('milliseconds'));

                let tempoMaximoMinutos = this.props.sessao.grupo_parquimetro.tempo_limite * 60; //corrigir pegar tempo máximo do parquimetro
                let minutosPercorridos = duracaoPercorrida.as('minutes');

                let porcentagemContador = (minutosPercorridos / tempoMaximoMinutos) * 100;
                let tempoContador = tempoPercorrido != null ? tempoPercorrido.format('HH:mm:ss') : "";
                let valorAtual = _.round(this.props.sessao.grupo_parquimetro.valor_minuto * minutosPercorridos, 2);//corrigir pegar preço do parquimetro
                
                this.props.modificaPorcentagemContador(porcentagemContador);
                this.props.modificaTempoContador(tempoContador);
                this.props.modificaValorAtual(valorAtual);               

                if(porcentagemContador>=100){
                    //parar contador
                    BackgroundTimer.stopBackgroundTimer();
                }
            }
        }, 1000);
    }

    exibirResumoSessao(){
        this.setState({
            exibirResumoSessao: true
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
            exibirResumoSessao: false
        });
    }

    concluirSessao(){
        
        this.props.finalizarSessao();
        //validar se der erro

        //pausar o timer
        BackgroundTimer.stopBackgroundTimer();

        this.props.modificaPorcentagemContador(0);
        this.props.modificaTempoContador("00:00:00");
        this.props.modificaValorAtual(0);

        this.setState({
            exibirResumoSessao: false,
        });
    }

    renderPickerCartao(){
        if(_.isEmpty(this.props.cartoes)) {
            return (
                <Picker
                    selectedValue={this.props.cartaoId}
                    style={{ height: 50, width: '100%' }}
                    onValueChange={(cartaoId) => this.props.modificaCartaoId(cartaoId)}>
                    <Picker.Item key={-1} label="Cartão" value={null} />
                </Picker>
            )
        }

        return (
            <Picker
                selectedValue={this.props.cartaoId}
                style={{ height: 50, width: '100%' }}
                onValueChange={(cartaoId) => this.props.modificaCartaoId(cartaoId)}>
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
                    selectedValue={this.props.veiculoId}
                    style={{ height: 50, width: '100%' }}
                    onValueChange={(veiculoId) => this.props.modificaVeiculoId(veiculoId)}>
                    <Picker.Item label="Veículo" value={null} />
                </Picker>
            )
        }

        return (
            <Picker
                selectedValue={this.props.veiculoId}
                style={{ height: 50, width: '100%' }}
                onValueChange={(veiculoId) => this.props.modificaVeiculoId(veiculoId)}>
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
        if(this.props.iniciandoSessao || this.props.finalizandoSessao){
            return (
                <View style={[styles.telaCarregando, { backgroundColor: this.state.telaContagemCor}]}>
                    <ActivityIndicator style={styles.activityIndicator} size="large" color={cores.branco} />
                </View>
            );  
        }

        if(!_.isEmpty(this.props.sessao)){
            if(this.state.exibirResumoSessao){
                //tela resumo
                return (
                    <View style={[styles.telaResumo, { backgroundColor: this.state.telaContagemCor}]}>
                        <View style={styles.telaResumoConteudo}>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 16, color: '#fff', paddingVertical: 20,}}>
                                valor total
                            </Text>
                            <Text style={styles.telaResumoValor}>
                                R$ {this.props.valorAtual.toFixed(2).toString().replace('.',',')}
                            </Text>
                            <Text style={styles.telaResumoCartao}>
                                {`${ this.props.sessao.cartao_credito.bandeira }: ****.****.****.${ this.props.sessao.cartao_credito.numero }`}
                            </Text>
                            <View style={styles.telaResumoItens}>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.telaResumoItemTitulo}>
                                        tempo
                                    </Text>
                                    <Text style={styles.telaResumoItemvalor}>
                                        {this.props.tempoContador}
                                    </Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.telaResumoItemTitulo}>
                                        veículo
                                    </Text>
                                    <Text style={styles.telaResumoItemvalor}>
                                        { this.props.sessao.veiculo.placa.toUpperCase() }
                                    </Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.telaResumoItemTitulo}>
                                        data
                                    </Text>
                                    <Text style={styles.telaResumoItemvalor}>
                                        {Moment(this.props.sessao.data_inicio).format('DD/MM/YYYY')}
                                    </Text>
                                </View>
                            </View>
                            <Text style={styles.telaResumoCartao}>
                                {this.props.sessao.parquimetro.endereco_completo}
                            </Text>
                            <View>
                                <TouchableHighlight
                                    onPress={() => this.confirmarConclusaoSessao()}
                                    style={styles.botaoBranco}
                                    underlayColor={Color(cores.branco).darken(0.2)}
                                >
                                    <Text style={[styles.botaoVerdeText, {color: this.state.telaContagemCor}]}>
                                        Concluir
                                    </Text>
                                </TouchableHighlight>
                                <TouchableHighlight
                                    onPress={() => this.cancelarConclusaoSessao()}
                                    style={{ marginTop: 10, }}
                                    underlayColor={Color(this.state.telaContagemCor).lighten(0.2)}
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
                                percent={this.props.porcentagemContador}
                                borderWidth={8}
                                color="#fff"
                                shadowColor={ Color(this.state.telaContagemCor).lighten(0.2).string() } //adicionando a mesma cor da tela com mais branco
                                bgColor={this.state.telaContagemCor}
                                radius={100}
                            >
                                <View style={styles.circuloProgressoTexto}>
                                    <Text style={styles.circuloProgressoTextoMinutos}>{`${this.props.tempoContador.split(":")[0]}:${this.props.tempoContador.split(":")[1]}`}</Text>
                                    <Text style={styles.circuloProgressoTextoSegundos}>{`:${this.props.tempoContador.split(":")[2]}`}</Text>
                                </View>
                            </ProgressCircle>
                        </View>
                        <Text style={styles.textoContagem}>
                            {this.props.sessao.parquimetro.endereco_completo}
                        </Text>
                        <Text style={styles.textoContagem}>
                            Cartão: {`****.****.****.${ this.props.sessao.cartao_credito.numero }`}
                        </Text>
                        <Text style={styles.textoContagem}>
                            Veículo: { this.props.sessao.veiculo.placa.toUpperCase() }
                        </Text>
                    </View>
                    <View style={styles.telaContagemParteBotao}>
                        <TouchableHighlight
                            onPress={() => this.exibirResumoSessao()}
                            style={styles.botaoBranco}
                            underlayColor={Color(cores.branco).darken(0.2)}
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
                            <View style={styles.circuloProgressoTexto}>
                                <Text style={styles.circuloProgressoTextoMinutos}>{`${this.props.tempoContador.split(":")[0]}:${this.props.tempoContador.split(":")[1]}`}</Text>
                                <Text style={styles.circuloProgressoTextoSegundos}>{`:${this.props.tempoContador.split(":")[2]}`}</Text>
                            </View>
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
                        { renderErro(this.props.erro, 'cartao_credito')}
                        {
                            this.renderPickerVeiculo()
                        }
                        { renderErro(this.props.erro, 'veiculo')}
                        <TouchableHighlight
                            underlayColor={Color(cores.verde).lighten(0.2)}
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
    telaCarregando: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
    circuloProgressoTexto:{
        flexDirection: 'row',
        alignItems: 'flex-end',
        
    },
    circuloProgressoTextoMinutos: {
        fontSize: 50,
        color: '#fff'
    },
    circuloProgressoTextoSegundos: {
        fontSize: 14,
        color: '#fff',
        marginBottom: 10,
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
        iniciandoSessao: state.ParquimetroReducer.iniciandoSessao,
        finalizandoSessao: state.ParquimetroReducer.finalizandoSessao,
        cartaoId: state.ParquimetroReducer.cartaoId,
        veiculoId: state.ParquimetroReducer.veiculoId,
        latitude: state.ParquimetroReducer.latitude,
        longitude: state.ParquimetroReducer.longitude,
        porcentagemContador: state.ParquimetroReducer.porcentagemContador,
        tempoContador: state.ParquimetroReducer.tempoContador,
        valorAtual: state.ParquimetroReducer.valorAtual,
    }
};


export default connect(mapStateToProps, {
    carregarParquimetro,
    carregarParquimetroErro,
    modificaLatitudeLongitude,
    carregarCartoes,
    carregarVeiculos,
    modificaCartaoId,
    modificaVeiculoId,
    iniciarSessao,
    modificaPorcentagemContador,
    modificaTempoContador,
    modificaValorAtual,
    finalizarSessao,
})(TelaParquimetro);