import { Alert } from 'react-native';
import axios from 'axios';
import NavigationService from 'parquimetro/NavigationService';

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
        NavigationService.navigate('Login');
    }else {
        Alert.alert(
            'Aviso',
            'Um problema no servidor ocorreu, tente novamente.',
            [
                {text: 'OK'}
            ],
            { cancelable: false }
        );
    }

    return Promise.reject(error.response);
});

export default Api;