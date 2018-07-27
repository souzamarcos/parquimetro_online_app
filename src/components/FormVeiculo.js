import React, { Component } from 'react';
import { 
    View, 
    Image,
    Text, 
    StyleSheet,
    TextInput,
    TouchableHighlight,
} from 'react-native';
import { defaultStyles } from '../styles';
import cores from '../styles/cores';

class Veiculo  extends Component {

    render(){
        return (
            <View style={styles.tela}>
                    <View style={styles.imagemContainer}>
                        <Image 
                            style={styles.imagem}
                            source={require('../imgs/icone_placa.png')} 
                        />
                    </View>
                    <View style={styles.formContainer}>
                        <TextInput
                            placeholder="Placa"
                            style={styles.input}
                            //value={this.props.veiculo.placa.toUpperCase()}
                            underlineColorAndroid={cores.cinza}
                            editable={false}
                        />
                        <TextInput
                            placeholder="Apelido"
                            style={styles.input}
                            //value={this.props.veiculo.descricao}
                            underlineColorAndroid={cores.cinza}
                            editable={false}
                        />
                    </View>
                    <View style={styles.botoesContainer}>
                        <TouchableHighlight
                            onPress={() => false}
                            style={styles.botaoVerde}
                            underlayColor="rgba(0, 0, 0, 0.05)"
                        >
                            <Text style={styles.botaoVerdeText}>
                                Salvar
                            </Text>
                        </TouchableHighlight>
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tela: {
        ...defaultStyles.telaFull,
        ...defaultStyles.telaPaddingHorizontalGrande,
    },
    imagem: {
        width: 100,
        height: 100,
    },
    imagemContainer: {
        paddingVertical: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        //flex: 1
    },
    botoesContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoVerde: {
        ...defaultStyles.botaoVerde,
        marginVertical: 25,
    },
    botaoVerdeText: {
        ...defaultStyles.botaoVerdeText,
    },
});

export default Veiculo;