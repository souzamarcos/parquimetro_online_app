import API  from '../Api';
import { 
    MODIFICA_VEICULO_ID,
    MODIFICA_VEICULO_PLACA,
    MODIFICA_VEICULO_APELIDO,
    SALVAR_VEICULO_EM_ANDAMENTO,
    SALVAR_VEICULO_SUCESSO,
    SALVAR_VEICULO_ERRO,
} from './types';
import { carregarVeiculos } from './VeiculosActions';
import NavigationService from '../NavigationService';

//to-do mudar para salvar e caso o id seja diferente de 0 edita, caso contrário adiciona
export const adicionarVeiculo = (id, placa,apelido) => {

    return async dispatch => {
        dispatch({ type: SALVAR_VEICULO_EM_ANDAMENTO });
        try
        {
            const retorno = await API.post('veiculo/novo',{
                veiculo: {
                    placa,
                    descricao: apelido
                }
            });
            adicionarVeiculoSucesso(retorno.data, dispatch);
        }
        catch(erro)
        {
            console.log(erro.data);
            adicionarVeiculoErro(erro.data.errors, dispatch);
        }
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

export const modificaApelido = (apelido) => {
    return {
        type: MODIFICA_VEICULO_APELIDO,
        payload: apelido
    }
}


export const adicionarVeiculoSucesso = (veiculos, dispatch) => {
    dispatch({
        type: SALVAR_VEICULO_SUCESSO,
        payload: veiculos
    });
    NavigationService.navigate('TelaVeiculos');
    dispatch(carregarVeiculos());
}

export const adicionarVeiculoErro = (erro, dispatch) => {
    dispatch({
        type: SALVAR_VEICULO_ERRO,
        payload: erro
    });
}