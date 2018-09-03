import API  from '../Api';
import { 
    CARREGAR_HISTORICO_GUARDA_EM_ANDAMENTO,
    CARREGAR_HISTORICO_GUARDA_SUCESSO,
    CARREGAR_HISTORICO_GUARDA_ERRO,
} from './types';
import _ from 'lodash';

export const carregarHistorico = () => {

    return async dispatch => {
        dispatch({ type: CARREGAR_HISTORICO_GUARDA_EM_ANDAMENTO });
        try
        {
            const retorno = await API.get('guarda/historico',{});
            const historico = _.map(retorno.data, (item, index) =>{
                return {...item, index: index + 1};
            });


            console.log(historico);

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
        type: CARREGAR_HISTORICO_GUARDA_SUCESSO,
        payload: historico
    });
}

export const carregarHistoricoErro = (erro) => {
    dispatch({
        type: CARREGAR_HISTORICO_GUARDA_ERRO,
        payload: erro
    });
}