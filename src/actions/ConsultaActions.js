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

            console.log(_.head(retorno.data));
            consultarPlacaSucesso(_.head(retorno.data), dispatch);

            NavigationService.navigate('TelaRetornoConsultaGuarda');
        }
        catch(erro)
        {
            consultarPlacaErro(erro.message, dispatch);
        }
    }
}

export const consultarPlacaSucesso = (sessao, dispatch) => {
    dispatch({
        type: CONSULTA_PLACA_SUCESSO,
        payload: sessao
    });
}

export const consultarPlacaErro = (erro) => {
    dispatch({
        type: CONSULTA_PLACA_ERRO,
        payload: erro
    });
}

export const modificaPlaca = (placa) => {
    return {
        type: MODIFICA_CONSULTA_PLACA,
        payload: placa
    }
}