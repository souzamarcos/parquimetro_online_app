import API  from '../Api';
import { 
    MODIFICA_CARTAO_ID,
    MODIFICA_CARTAO_NUMERO,
    MODIFICA_CARTAO_BANDEIRA,
    MODIFICA_CARTAO_MES_VALIDADE,
    MODIFICA_CARTAO_ANO_VALIDADE,
    MODIFICA_CARTAO_CVV,
    SALVAR_CARTAO_EM_ANDAMENTO,
    SALVAR_CARTAO_SUCESSO,
    SALVAR_CARTAO_ERRO,
    EXCLUIR_CARTAO_EM_ANDAMENTO,
    EXCLUIR_CARTAO_SUCESSO,
    EXCLUIR_CARTAO_ERRO
} from './types';
import { carregarCartoes } from './CartoesActions';
import NavigationService from '../NavigationService';

//to-do mudar para salvar e caso o id seja diferente de 0 edita, caso contrário adiciona
export const adicionarCartao = (cartao) => {

    return async dispatch => {
        dispatch({ type: SALVAR_CARTAO_EM_ANDAMENTO });
        try
        {
            const retorno = await API.post('cartao/novo',{
                cartao_credito: {
                    numero_cartao: cartao.numero,
                    bandeira: cartao.bandeira,
                    mes_validade: cartao.mes_validade,
                    ano_validade: cartao.ano_validade,
                    token: cartao.cvv
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

export const excluirCartao = (cartao) => {

    return async dispatch => {
        dispatch({ type: EXCLUIR_CARTAO_EM_ANDAMENTO });
        try
        {
            const retorno = await API.delete(`cartao/${cartao.id}/destroy`,{
                id: cartao.id
            });
            excluirCartaoSucesso(retorno.data, dispatch);
        }
        catch(erro)
        {
            excluirCartaoSucesso(erro.data.errors, dispatch);
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

export const modificaMesValidade = (mes_validade) => {
    return {
        type: MODIFICA_CARTAO_MES_VALIDADE,
        payload: mes_validade
    }
}

export const modificaAnoValidade = (ano_validade) => {
    return {
        type: MODIFICA_CARTAO_ANO_VALIDADE,
        payload: ano_validade
    }
}

export const modificaCvv = (cvv) => {
    return {
        type: MODIFICA_CARTAO_CVV,
        payload: cvv
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

export const excluirCartaoSucesso = (cartao, dispatch) => {
    dispatch({
        type: EXCLUIR_CARTAO_SUCESSO,
        payload: cartao
    });
    NavigationService.navigate('TelaCartoes');
    dispatch(carregarCartoes());
}

export const excluirCartaoErro = (erro, dispatch) => {
    dispatch({
        type: EXCLUIR_CARTAO_ERRO,
        payload: erro
    });
}