import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    ScrollView,
} from 'react-native';
import { defaultStyles } from '../styles';
import cores from '../styles/cores';

class TelaSobre  extends Component {

    render(){
        return (
            <ScrollView style={styles.tela} contentContainerStyle={{flex:1}}>
                <View>
                    <Text style={styles.titulo}>
                        O parquímetro online
                    </Text>
                    <Text style={styles.texto}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. v Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.t ut labore et dolore magna aliqua.
                    </Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    tela: {
        ...defaultStyles.telaFull,
        ...defaultStyles.telaPaddingGrande,
    },
    titulo: {
        fontSize: 20,
        color: cores.azul,
        textAlign: 'center',
        marginBottom: 30,
    },
    texto: {
        fontSize: 16,
        textAlign: 'justify',
    },
});

export default TelaSobre;