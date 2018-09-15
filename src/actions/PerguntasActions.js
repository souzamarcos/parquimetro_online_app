import API  from '../Api';
import { 
    CARREGAR_PERGUNTAS_EM_ANDAMENTO,
    CARREGAR_PERGUNTAS_SUCESSO,
    CARREGAR_PERGUNTAS_ERRO,
} from './types';
import _ from 'lodash';

export const carregarPerguntas = () => {

    return async dispatch => {
        dispatch({ type: CARREGAR_PERGUNTAS_EM_ANDAMENTO });
        try
        {
            const retorno = await API.get('perguntas-frequentes',{});
            const perguntas = _.map(retorno.data, (item, index) =>{
                return {...item, index: index + 1};
            });

            console.log(perguntas);
            carregarPerguntasSucesso(perguntas, dispatch);
        }
        catch(erro)
        {
            carregarPerguntasErro(erro.message, dispatch);
        }
    }
}

export const carregarPerguntasSucesso = (perguntas, dispatch) => {
    dispatch({
        type: CARREGAR_PERGUNTAS_SUCESSO,
        payload: perguntas
    });
}

export const carregarPerguntasErro = (erro) => {
    dispatch({
        type: CARREGAR_PERGUNTAS_ERRO,
        payload: erro
    });
}