import API  from '../Api';
import { 
    CARREGAR_CARTAO_EM_ANDAMENTO,
    CARREGAR_CARTAO_SUCESSO,
    CARREGAR_CARTAO_ERRO,
} from './types';

export const carregarCartoes = () => {

    return async dispatch => {
        dispatch({ type: CARREGAR_CARTAO_EM_ANDAMENTO });
        try
        {
            const retorno = await API.get('cartao',{});
            carregarCartoesSucesso(retorno.data, dispatch);
        }
        catch(erro)
        {
            carregarCartoesErro(erro.response.message, dispatch);
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