import React, { Component } from 'react';
import _ from 'lodash';
import { 
    View,
    Text,
    TouchableHighlight,
    ListView,
    StyleSheet,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import { defaultStyles } from '../styles';
import cores from '../styles/cores';
import { connect } from 'react-redux';
import { alteraTitulo } from '../actions/AppActions';
import { carregarVeiculos } from '../actions/VeiculosActions';
import Veiculo from './Veiculo';
import Cabecalho from './Cabecalho';

class TelaVeiculos extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        const { navigation } = this.props;
        this.subscriptions = [ // evento para detectar se o component está focado para alterar o título 
            navigation.addListener('didFocus', () =>{
                this.props.alteraTitulo('Veículo');
            }),
        ];
    }

    componentWillMount(){
        this.props.carregarVeiculos();
        this.criaFonteDados([]);
    }
    
    componentWillReceiveProps(nextProps){
        this.criaFonteDados(nextProps.veiculos);
    }

    componentWillUnmount() {
        // remove eventos
        this.subscriptions.forEach(sub => sub.remove());
    }

    criaFonteDados(veiculos) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.dataSource = ds.cloneWithRows(veiculos);
    }

    renderRow(veiculo){
        return <Veiculo veiculo={veiculo} styles={styles.veiculo} />
    }

    render() {
        return (
            <ScrollView style={styles.tela} contentContainerStyle={{flex:1}}>
                <Cabecalho titulo="Veículo" />
                <ScrollView style={{flexGrow: 1}} contentContainerStyle={styles.listaContainer}>
                    {
                        this.props.carregandoVeiculos ? 
                        (
                            <ActivityIndicator size="large" color={cores.azul} />
                        ) :
                        (
                            <ListView
                                enableEmptySections
                                renderRow={this.renderRow}
                                dataSource={this.dataSource}
                            />
                        )
                    }
                </ScrollView >
                <View style={styles.botoesContainer}>
                    <TouchableHighlight
                        onPress={() => this.props.navigation.navigate('FormVeiculo')}
                        style={styles.botaoAzul}
                        underlayColor="rgba(0, 0, 0, 0.05)"
                    >
                        <Text style={styles.botaoAzulText}>
                            Adicionar
                        </Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        );
    }
  }
  
const styles = StyleSheet.create({
    tela: {
        ...defaultStyles.telaFull,
    },
    listaContainer: {
        flex: 1,
        ...defaultStyles.telaPaddingPequeno,
        justifyContent: 'center',
    },
    botoesContainer: {
        ...defaultStyles.telaPaddingPequeno,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoAzul: {
        ...defaultStyles.botaoAzul,
        marginVertical: 5,
    },
    botaoAzulText: {
        ...defaultStyles.botaoAzulText,
    },
});

const mapStateToProps = state => {
    const veiculos = _.map(state.VeiculosReducer.veiculos, (item, index) =>{
        return {...item, index: index + 1};
    });

    return {
        veiculos,
        carregandoVeiculos: state.VeiculosReducer.carregandoVeiculos,
        erro: state.VeiculosReducer.erro,
    }
};

export default connect(mapStateToProps, { alteraTitulo, carregarVeiculos })(TelaVeiculos);