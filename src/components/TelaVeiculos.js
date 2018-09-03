import React, { Component } from 'react';
import _ from 'lodash';
import { 
    View,
    Text,
    TouchableHighlight,
    ListView,
    StyleSheet,
    ScrollView,
    ActivityIndicator,
    RefreshControl
} from 'react-native';
import { defaultStyles } from '../styles';
import cores from '../styles/cores';
import { connect } from 'react-redux';
import { carregarVeiculos } from '../actions/VeiculosActions';
import { adicionarVeiculo } from '../actions/FormVeiculoActions';
import Veiculo from './Veiculo';
import Cabecalho from './Cabecalho';

class TelaVeiculos extends Component {

    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.carregarVeiculos();
        this.criaFonteDados([]);
    }
    
    componentWillReceiveProps(nextProps){
        this.criaFonteDados(nextProps.veiculos);
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
                <View style={{flexGrow: 1}}>
                    <ListView
                        enableEmptySections
                        renderRow={this.renderRow}
                        dataSource={this.dataSource}
                        contentContainerStyle={styles.listaContainer}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.props.carregandoVeiculos}
                                onRefresh={() =>this.props.carregarVeiculos()}
                            />
                        }
                    />
                </View>
                <View style={styles.botoesContainer}>
                    <TouchableHighlight
                        onPress={() => this.props.adicionarVeiculo() }
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
        ...defaultStyles.telaPaddingPequeno,
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
    return {
        veiculos: state.VeiculosReducer.veiculos,
        carregandoVeiculos: state.VeiculosReducer.carregandoVeiculos,
        erro: state.VeiculosReducer.erro,
    }
};

export default connect(mapStateToProps, { carregarVeiculos, adicionarVeiculo })(TelaVeiculos);