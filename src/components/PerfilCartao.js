import React, { Component } from 'react';
import _ from 'lodash';
import { 
    ListView,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { defaultStyles } from 'parquimetro-styles';
import { withNavigationFocus } from 'react-navigation';
import { connect } from 'react-redux';
import { alteraTitulo } from 'parquimetro-actions/AppActions';
import { carregarCartoes } from 'parquimetro-actions/CartoesActions';
import Cartao from 'parquimetro-components/Cartao';



class PerfilCartao extends Component {
  
    constructor(props){
        super(props);
        
        this.state = {
            numero: '',
            bandeira: '',
            validade: '',
        };
    }

    componentDidMount(){
        const { navigation } = this.props;
        this.subscriptions = [ // evento para detectar se o component está focado para alterar o título 
            navigation.addListener('didFocus', () =>{
                this.props.alteraTitulo('Cartão');
            }),
        ];
    }
    
    componentWillMount(){
        this.props.carregarCartoes();
        this.criaFonteDados([]);
    }
    
    componentWillReceiveProps(nextProps){
        this.criaFonteDados(nextProps.cartoes);
    }

    componentWillUnmount() {
        // remove eventos
        this.subscriptions.forEach(sub => sub.remove());
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
            <ScrollView style={styles.tela}>
                <ListView
                    renderRow={this.renderRow}
                    dataSource={this.dataSource}
                    />
            </ScrollView>
        );
    }
  }
  
const styles = StyleSheet.create({
    tela: {
        ...defaultStyles.telaFull,
        ...defaultStyles.telaPaddingPequeno,
    }
});


const mapStateToProps = state => {
    const cartoes = _.map(state.CartoesReducer.cartoes, (item, index) =>{
        return {...item, index: index + 1};
    });

    return {
        cartoes,
        carregandoCartoes: state.CartoesReducer.carregandoCartoes,
        erro: state.CartoesReducer.erro,
    }
};

export default connect(mapStateToProps, { alteraTitulo, carregarCartoes })(PerfilCartao);