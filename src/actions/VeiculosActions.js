import API  from '../Api';
import { 
    CARREGAR_VEICULO_EM_ANDAMENTO,
    CARREGAR_VEICULO_SUCESSO,
    CARREGAR_VEICULO_ERRO,
} from './types';

export const carregarVeiculos = () => {

    return async dispatch => {
        console.log('passou aqui');
        dispatch({ type: CARREGAR_VEICULO_EM_ANDAMENTO });
        try
        {
            const retorno = await API.get('veiculo',{});
            carregarVeiculosSucesso(retorno.data, dispatch);
        }
        catch(erro)
        {
            carregarVeiculosErro(erro.response.message, dispatch);
        }
    }
}

export const carregarVeiculosSucesso = (veiculos, dispatch) => {
    dispatch({
        type: CARREGAR_VEICULO_SUCESSO,
        payload: veiculos
    });
}

export const carregarVeiculosErro = (erro) => {
    dispatch({
        type: CARREGAR_VEICULO_ERRO,
        payload: erro
    });
}