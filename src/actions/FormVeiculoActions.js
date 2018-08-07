import API  from '../Api';
import { 
    MODIFICA_VEICULO,
    MODIFICA_VEICULO_ID,
    MODIFICA_VEICULO_PLACA,
    MODIFICA_VEICULO_DESCRICAO,
    SALVAR_VEICULO_EM_ANDAMENTO,
    SALVAR_VEICULO_SUCESSO,
    SALVAR_VEICULO_ERRO,
    EXCLUIR_VEICULO_EM_ANDAMENTO,
    EXCLUIR_VEICULO_SUCESSO,
    EXCLUIR_VEICULO_ERRO,
} from './types';
import _ from 'lodash';
import { carregarVeiculos } from './VeiculosActions';
import NavigationService from '../NavigationService';

export const salvarVeiculo = (veiculo) => {

    return async dispatch => {
        dispatch({ type: SALVAR_VEICULO_EM_ANDAMENTO });
        try
        {
            const url = veiculo.id == 0 ? `veiculo/novo` : `veiculo/${veiculo.id}/editar`
            const retorno = await API.post(url,{
                veiculo: {
                    placa: _.isEmpty(veiculo.placa) ? veiculo.placa : veiculo.placa.toUpperCase(),
                    descricao: veiculo.descricao
                }
            });
            salvarVeiculoSucesso(retorno.data, dispatch);
        }
        catch(erro)
        {
            salvarVeiculoErro(erro.data.errors, dispatch);
        }
    }
}

export const excluirVeiculo = (veiculo) => {

    return async dispatch => {
        dispatch({ type: EXCLUIR_VEICULO_EM_ANDAMENTO });
        try
        {
            const retorno = await API.delete(`veiculo/${veiculo.id}/destroy`,{
                id: veiculo.id
            });
            excluirVeiculoSucesso(retorno.data, dispatch);
        }
        catch(erro)
        {
            excluirVeiculoErro(erro.data.errors, dispatch);
        }
    }
}

export const editarVeiculo = (veiculo) => {
    return dispatch => {
        dispatch({ type: MODIFICA_VEICULO, payload: veiculo });
        NavigationService.navigate('TelaFormVeiculo', { titulo: 'Editar Veículo'} );
    }
}

export const adicionarVeiculo = () => {
    return dispatch => {
        dispatch({ type: MODIFICA_VEICULO });
        NavigationService.navigate('TelaFormVeiculo');
    }
}


export const modificaId = (id) => {
    return {
        type: MODIFICA_VEICULO_ID,
        payload: id
    }
}

export const modificaPlaca = (placa) => {
    return {
        type: MODIFICA_VEICULO_PLACA,
        payload: placa
    }
}

export const modificaDescricao = (descricao) => {
    return {
        type: MODIFICA_VEICULO_DESCRICAO,
        payload: descricao
    }
}


export const salvarVeiculoSucesso = (veiculo, dispatch) => {
    dispatch({
        type: SALVAR_VEICULO_SUCESSO,
        payload: veiculo
    });
    NavigationService.navigate('TelaVeiculos');
    dispatch(carregarVeiculos());
}

export const salvarVeiculoErro = (erro, dispatch) => {
    dispatch({
        type: SALVAR_VEICULO_ERRO,
        payload: erro
    });
}

export const excluirVeiculoSucesso = (veiculo, dispatch) => {
    dispatch({
        type: EXCLUIR_VEICULO_SUCESSO,
        payload: veiculo
    });
    NavigationService.navigate('TelaVeiculos');
    dispatch(carregarVeiculos());
}

export const excluirVeiculoErro = (erro, dispatch) => {
    dispatch({
        type: EXCLUIR_VEICULO_ERRO,
        payload: erro
    });
}