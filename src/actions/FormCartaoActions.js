import API  from '../Api';
import { 
    MODIFICA_CARTAO_ID,
    MODIFICA_CARTAO_NUMERO,
    MODIFICA_CARTAO_BANDEIRA,
    MODIFICA_CARTAO_VALIDADE,
    SALVAR_CARTAO_EM_ANDAMENTO,
    SALVAR_CARTAO_SUCESSO,
    SALVAR_CARTAO_ERRO,
} from './types';
import { carregarCartoes } from './CartoesActions';
import NavigationService from '../NavigationService';

//to-do mudar para salvar e caso o id seja diferente de 0 edita, caso contrário adiciona
export const adicionarCartao = (id, numero, bandeira, validade) => {

    return async dispatch => {
        dispatch({ type: SALVAR_CARTAO_EM_ANDAMENTO });
        try
        {
            const retorno = await API.post('cartao/novo',{
                cartao: {
                    numero,
                    bandeira,
                    validade
                }
            });
            adicionarCartaoSucesso(retorno.data, dispatch);
        }
        catch(erro)
        {
            adicionarCartaoErro(erro.data.errors, dispatch);
        }
    }
}
export const modificaId = (id) => {
    return {
        type: MODIFICA_CARTAO_ID,
        payload: id
    }
}

export const modificaNumero = (numero) => {
    return {
        type: MODIFICA_CARTAO_NUMERO,
        payload: numero
    }
}

export const modificaBandeira = (bandeira) => {
    return {
        type: MODIFICA_CARTAO_BANDEIRA,
        payload: bandeira
    }
}

export const modificaValidade = (validade) => {
    return {
        type: MODIFICA_CARTAO_VALIDADE,
        payload: validade
    }
}

export const adicionarCartaoSucesso = (cartaos, dispatch) => {
    dispatch({
        type: SALVAR_CARTAO_SUCESSO,
        payload: cartaos
    });
    NavigationService.navigate('TelaCartoes');
    dispatch(carregarCartoes());
}

export const adicionarCartaoErro = (erro, dispatch) => {
    dispatch({
        type: SALVAR_CARTAO_ERRO,
        payload: erro
    });
}