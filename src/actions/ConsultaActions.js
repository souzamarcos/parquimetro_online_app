import API  from '../Api';
import { 
    CONSULTA_PLACA_EM_ANDAMENTO,
    CONSULTA_PLACA_SUCESSO,
    CONSULTA_PLACA_ERRO,
    MODIFICA_CONSULTA_PLACA,
} from './types';
import _ from 'lodash';
import NavigationService from '../NavigationService';

export const consultarPlaca = (placa) => {

    return async dispatch => {
        dispatch({ type: CONSULTA_PLACA_EM_ANDAMENTO });
        try
        {
            const retorno = await API.post('guarda/verificar-placa',{
                veiculo: {
                    placa: (placa ? placa : "").toUpperCase()
                }
            });

            //corrigir depois que mudar na api ##########

            console.log(retorno.data);
            dispatch(consultarPlacaSucesso(retorno.data));

            NavigationService.navigate('TelaRetornoConsultaGuarda');
        }
        catch(erro)
        {
            dispatch(consultarPlacaErro(erro.message));
        }
    }
}

export const consultarPlacaSucesso = (sessao) => {
    return {
        type: CONSULTA_PLACA_SUCESSO,
        payload: sessao
    };
}

export const consultarPlacaErro = (erro) => {
    return {
        type: CONSULTA_PLACA_ERRO,
        payload: erro
    };
}

export const modificaPlaca = (placa) => {
    return {
        type: MODIFICA_CONSULTA_PLACA,
        payload: placa
    }
}