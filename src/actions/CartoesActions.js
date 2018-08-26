import API  from '../Api';
import { 
    CARREGAR_CARTAO_EM_ANDAMENTO,
    CARREGAR_CARTAO_SUCESSO,
    CARREGAR_CARTAO_ERRO,
} from './types';
import _ from 'lodash';

export const carregarCartoes = () => {

    return async dispatch => {
        dispatch({ type: CARREGAR_CARTAO_EM_ANDAMENTO });
        try
        {
            const retorno = await API.get('cartao',{});

            const cartoes = _.map(retorno.data, (item, index) =>{
                return {...item, index: index + 1};
            });

            carregarCartoesSucesso(cartoes, dispatch);
        }
        catch(erro)
        {
            carregarCartoesErro(erro.message, dispatch);
        }
    }
}

export const carregarCartoesSucesso = (cartoes, dispatch) => {
    dispatch({
        type: CARREGAR_CARTAO_SUCESSO,
        payload: cartoes
    });
}

export const carregarCartoesErro = (erro, dispatch) => {
    dispatch({
        type: CARREGAR_CARTAO_ERRO,
        payload: erro
    });
}