import React, { Component } from 'react';
import _ from 'lodash';
import { 
    ListView,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { defaultStyles } from '../styles';
import { connect } from 'react-redux';
import { alteraTitulo } from '../actions/AppActions';
import { carregarVeiculos } from '../actions/VeiculosActions';
import Veiculo from './Veiculo';

class PerfilVeiculo extends Component {

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
        return <Veiculo veiculo={veiculo} />
    }

    render() {
        return (
            <ScrollView  style={styles.tela}>
                <ListView
                    renderRow={this.renderRow}
                    dataSource={this.dataSource}
                    />
            </ScrollView >
        );
    }
  }
  
const styles = StyleSheet.create({
    tela: {
        ...defaultStyles.telaFull,
        ...defaultStyles.telaPaddingPequeno,
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

export default connect(mapStateToProps, { alteraTitulo, carregarVeiculos })(PerfilVeiculo);