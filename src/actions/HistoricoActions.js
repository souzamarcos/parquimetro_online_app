import API  from '../Api';
import { 
    CARREGAR_HISTORICO_EM_ANDAMENTO,
    CARREGAR_HISTORICO_SUCESSO,
    CARREGAR_HISTORICO_ERRO,
} from './types';
import _ from 'lodash';

export const carregarHistorico = () => {

    return async dispatch => {
        dispatch({ type: CARREGAR_HISTORICO_EM_ANDAMENTO });
        try
        {
            const retorno = await API.get('parquimetro/historico',{});
            const historico = _.map(retorno.data, (item, index) =>{
                return {...item, index: index + 1};
            });

            carregarHistoricoSucesso(historico, dispatch);
        }
        catch(erro)
        {
            carregarHistoricoErro(erro.message, dispatch);
        }
    }
}

export const carregarHistoricoSucesso = (historico, dispatch) => {
    dispatch({
        type: CARREGAR_HISTORICO_SUCESSO,
        payload: historico
    });
}

export const carregarHistoricoErro = (erro) => {
    dispatch({
        type: CARREGAR_HISTORICO_ERRO,
        payload: erro
    });
}