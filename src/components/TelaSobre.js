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
                        Concebido no ano de 2018, o Parquímetro Online tem como objetivo flexibilizar a forma de pagamentos de estacionamentos rotativos. Fruto da insatisfação de quatro jovens perante diversas experiências negativas em utilizar máquinas de Parquímetros Físicas, o sistema foi construído pensando na praticidade do usuário e em uso de tecnologias modernas. Assim, os amigos de longa data resolveram utilizar os conhecimentos obtidos durante a faculdade montando esta solução que simplifica o processo de pagamento a um simples toque no celular.    
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