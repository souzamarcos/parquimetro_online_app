import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
} from 'react-native';
import cores from '../styles/cores';

class Pergunta extends Component {

    constructor(props){
        super(props);

        this.state = {
            expandido: false,
        }
    }
   
    expandir() {
        this.setState({
            expandido: !this.state.expandido
        });
    }

    render() {
        return (
            <View style={styles.pergunta}>
                <TouchableHighlight
                    onPress={()=> this.expandir() }
                    underlayColor='transparent'
                    style={styles.titulo}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{ flex: 1}}>
                            <Text style={styles.tituloTexto}>{this.props.pergunta.pergunta}</Text>
                        </View>
                        <View style={{paddingLeft: 15}}>
                            <Text style={styles.tituloTexto}>{this.state.expandido ? "↑" : "↓"}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
                <View>
                    {this.state.expandido? (<Text style={styles.conteudoTexto}>{this.props.pergunta.resposta}</Text>) : null}
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    pergunta: {
        backgroundColor: '#fff',
        borderRadius: 7,
        marginBottom: 10,
        elevation: 1
    },
    titulo: {
        padding: 15
    },
    tituloTexto: {
        fontSize: 18,
        color: cores.azul
    },
    conteudoTexto: {
        fontSize: 14,
        color: '#6e868e',
        paddingHorizontal: 15,
        paddingBottom: 15,
    }
});

export default Pergunta;