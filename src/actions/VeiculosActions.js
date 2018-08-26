import API  from '../Api';
import { 
    CARREGAR_VEICULO_EM_ANDAMENTO,
    CARREGAR_VEICULO_SUCESSO,
    CARREGAR_VEICULO_ERRO,
} from './types';
import _ from 'lodash';

export const carregarVeiculos = () => {

    return async dispatch => {
        dispatch({ type: CARREGAR_VEICULO_EM_ANDAMENTO });
        try
        {
            const retorno = await API.get('veiculo',{});
            const veiculos = _.map(retorno.data, (item, index) =>{
                return {...item, index: index + 1};
            });

            carregarVeiculosSucesso(veiculos, dispatch);
        }
        catch(erro)
        {
            carregarVeiculosErro(erro.message, dispatch);
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