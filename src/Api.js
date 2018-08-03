import { Alert } from 'react-native';
import _ from 'lodash';
import axios from 'axios';
import NavigationService from './NavigationService';
import Store from './Store';

//setando url padrão
const Api = axios.create({
    baseURL: `http://parquimetro-online.herokuapp.com/api/v1/`
});

//manipulando erros
Api.interceptors.response.use((response) => {
    return response;
}, function (error) {

    //não autorizado
    if (error.response.status === 401) {
        console.log('Não autorizado. Deslogando...');
        NavigationService.navigate('TelaLogin');
    }else if (error.response.status !== 400){
        Alert.alert(
            'Aviso',
            'Um problema no servidor ocorreu, tente novamente.',
            [
                {text: 'OK'}
            ],
            { cancelable: false }
        );
        console.log(error.response);
    }

    return error;
});

Store.subscribe(() => {
    const { usuarioLogado } =  Store.getState().AutenticacaoReducer;


    Api.defaults.headers.common['Authorization'] = _.isEmpty(usuarioLogado) ? null : `${usuarioLogado.token}`;

});



export default Api;