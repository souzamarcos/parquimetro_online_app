import React from 'react';
import { 
    StyleSheet,
    Text, 
} from 'react-native';
import _ from 'lodash';

const renderErro = (erros, inputConsultado) => {
    const erro = _.find(erros, (mensagem, input) => input == inputConsultado);
    if(!_.isEmpty(erro))
    {
        const mensagem = _.first(erro);
        return (<Text style={styles.erro}>{mensagem}</Text>);
    }
}

const styles = StyleSheet.create({
    erro: {
        fontSize: 14,
        color: 'red',
        marginBottom: 5,
    },
});

export {
    renderErro
};