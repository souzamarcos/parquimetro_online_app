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
    RefreshControl,
} from 'react-native';
import { defaultStyles } from '../styles';
import cores from '../styles/cores';
import { connect } from 'react-redux';
import { alteraTitulo } from '../actions/AppActions';
import { carregarCartoes } from '../actions/CartoesActions';
import Cartao from './Cartao';
import Cabecalho from './Cabecalho';


class TelaCartoes extends Component {
  
    constructor(props){
        super(props);
    }
    
    componentWillMount(){
        this.props.carregarCartoes();
        this.criaFonteDados([]);
    }
    
    componentWillReceiveProps(nextProps){
        this.criaFonteDados(nextProps.cartoes);
    }

    criaFonteDados(cartoes) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.dataSource = ds.cloneWithRows(cartoes);
    }

    renderRow(cartao){
        return <Cartao cartao={cartao} />
    }

    render() {
        return (
            <ScrollView style={styles.tela} contentContainerStyle={{flex:1}}>
                <Cabecalho titulo="Cartão" />
                <ScrollView  style={{flexGrow: 1}}  contentContainerStyle={styles.listaContainer}>
                {
                    this.props.carregandoCartoes ? 
                    (
                        <ActivityIndicator size="large" color={cores.azul} />
                    ) :
                    (
                        <ListView
                            enableEmptySections
                            renderRow={this.renderRow}
                            dataSource={this.dataSource}
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.props.carregandoCartoes}
                                    onRefresh={() =>this.props.carregarCartoes()}
                                />
                            }
                        />
                    )
                }
                </ScrollView>
                <View style={styles.botoesContainer}>
                    <TouchableHighlight
                        onPress={() => this.props.navigation.navigate('TelaFormCartao')}
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
    return {
        cartoes: state.CartoesReducer.cartoes,
        carregandoCartoes: state.CartoesReducer.carregandoCartoes,
        erro: state.CartoesReducer.erro,
    }
};

export default connect(mapStateToProps, { alteraTitulo, carregarCartoes })(TelaCartoes);