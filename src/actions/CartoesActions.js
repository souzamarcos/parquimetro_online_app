import _ from 'lodash';
import API  from 'parquimetro/Api';
import { 
    CARREGAR_VEICULO_EM_ANDAMENTO,
    CARREGAR_VEICULO_SUCESSO,
    CARREGAR_VEICULO_ERRO,
} from './types';

export const carregarCartoes = () => {

    return dispatch => {
        dispatch({ type: CARREGAR_VEICULO_EM_ANDAMENTO });
        API.get('cartao',{})
            .then(retorno => {
                carregarCartoesSucesso(retorno.data, dispatch);
            })
            .catch(erro => {
                carregarCartoesErro(erro, dispatch);
            });
    }
}

export const carregarCartoesSucesso = (cartoes, dispatch) => {
    dispatch({
        type: CARREGAR_VEICULO_SUCESSO,
        payload: cartoes
    });
}

export const carregarCartoesErro = (erro) => {
    dispatch({
        type: CARREGAR_VEICULO_ERRO,
        payload: erro
    });
}