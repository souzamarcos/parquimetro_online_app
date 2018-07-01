import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    TextInput,
    ScrollView,
} from 'react-native';
import { defaultStyles } from 'parquimetro-styles';
import cores from 'parquimetro-styles/cores';
import { withNavigationFocus } from 'react-navigation';
import { connect } from 'react-redux';
import { alteraTitulo } from 'parquimetro-actions/AppActions';

class PerfilVeiculo extends Component {

    constructor(props){
        super(props);

        this.state = {
            placa: '',
            apelido: '',
        };
    }

    componentWillMount(){
        if(this.props.isFocused){
            this.props.alteraTitulo('Veículo');
        }
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.isFocused){
            this.props.alteraTitulo('Veículo');
        }
    }
    

    render() {
        //achar um jeito melhor de fazer isso fora do render
        
        return (
            <ScrollView  style={styles.tela}>
                <View  style={styles.veiculo}>
                    <View style={styles.veiculoCabecalho}>
                        <View style={{ flex: 1}}>
                            <Text style={styles.veiculoTextoNumero}>
                                Veículo 1
                            </Text>
                        </View>
                        <View style={{ flex: 1}}>
                            <Text style={styles.veiculoTextoDeletar}>
                                Deletar
                            </Text>
                        </View>
                    </View>
                    <TextInput
                        placeholder="Apelido"
                        style={styles.input}
                        onChangeText={(apelido) => this.setState({apelido})}
                        value={this.state.apelido}
                        underlineColorAndroid={cores.cinza}
                    />
                    <TextInput
                        placeholder="Placa"
                        style={styles.input}
                        onChangeText={(placa) => this.setState({placa})}
                        value={this.state.placa}
                        underlineColorAndroid={cores.cinza}
                    />
                </View>
                <View  style={styles.veiculo}>
                    <View style={styles.veiculoCabecalho}>
                        <View style={{ flex: 1}}>
                            <Text style={styles.veiculoTextoNumero}>
                                Veículo 2
                            </Text>
                        </View>
                        <View style={{ flex: 1}}>
                            <Text style={styles.veiculoTextoDeletar}>
                                Deletar
                            </Text>
                        </View>
                    </View>
                    <TextInput
                        placeholder="Apelido"
                        style={styles.input}
                        onChangeText={(apelido) => this.setState({apelido})}
                        value={this.state.apelido}
                        underlineColorAndroid={cores.cinza}
                    />
                    <TextInput
                        placeholder="Placa"
                        style={styles.input}
                        onChangeText={(placa) => this.setState({placa})}
                        value={this.state.placa}
                        underlineColorAndroid={cores.cinza}
                    />
                </View>
                <View  style={styles.veiculo}>
                    <View style={styles.veiculoCabecalho}>
                        <View style={{ flex: 1}}>
                            <Text style={styles.veiculoTextoNumero}>
                                Veículo 3
                            </Text>
                        </View>
                        <View style={{ flex: 1}}>
                            <Text style={styles.veiculoTextoDeletar}>
                                Deletar
                            </Text>
                        </View>
                    </View>
                    <TextInput
                        placeholder="Apelido"
                        style={styles.input}
                        onChangeText={(apelido) => this.setState({apelido})}
                        value={this.state.apelido}
                        underlineColorAndroid={cores.cinza}
                    />
                    <TextInput
                        placeholder="Placa"
                        style={styles.input}
                        onChangeText={(placa) => this.setState({placa})}
                        value={this.state.placa}
                        underlineColorAndroid={cores.cinza}
                    />
                </View>
            </ScrollView >
        );
    }
  }
  
const styles = StyleSheet.create({
    tela: {
        ...defaultStyles.telaFull,
        ...defaultStyles.telaPaddingPequeno,
    },
    input: {
        ...defaultStyles.input,
    },
    veiculo: {
        marginBottom: 20
    },
    veiculoCabecalho: {
        flexDirection: 'row',
        marginBottom: 10,
        paddingHorizontal: 5
    },
    veiculoTextoNumero: {
        fontWeight: 'bold',
        fontSize: 18,
        color: cores.azul
    },
    veiculoTextoDeletar: {
        fontWeight: 'bold',
        fontSize: 18,
        color: cores.azul,
        textAlign: 'right'
    }
});

export default connect(null, {alteraTitulo})(withNavigationFocus(PerfilVeiculo));