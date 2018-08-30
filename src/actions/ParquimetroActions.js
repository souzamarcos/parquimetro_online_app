import API  from '../Api';
import { 
    MODIFICA_SESSAO_PARQUIMETRO,
    MODIFICA_SESSAO_LATITUDE_LONGITUDE,
    MODIFICA_SESSAO_CARTAO_ID,
    MODIFICA_SESSAO_VEICULO_ID,
    CARREGAR_SESSAO_PARQUIMETRO_EM_ANDAMENTO,
    INICIAR_SESSAO_SUCESSO,
    INICIAR_SESSAO_ERRO,
    INICIAR_SESSAO_EM_ANDAMENTO,
    MODIFICA_SESSAO_PORCENTAGEM_CONTADOR,
    MODIFICA_SESSAO_TEMPO_CONTADOR,
    MODIFICA_SESSAO_VALOR_ATUAL,
} from './types';

export const carregarParquimetro = (latitude, longitude) => {

    return async dispatch => {
        dispatch({ type: CARREGAR_SESSAO_PARQUIMETRO_EM_ANDAMENTO });
        try
        {
            const retorno = await API.post('parquimetro/verificar-endereco',{
                sessao: {
                    latitude,
                    longitude
                }
            });
            carregarParquimetroSucesso(retorno.data, dispatch);
        }
        catch(erro)
        {
            carregarParquimetroErro(erro.message, dispatch);
        }
    }
}

export const iniciarSessao = (latitude, longitude, cartaoId, veiculoId ) => {

    return async dispatch => {
        dispatch({ type: INICIAR_SESSAO_EM_ANDAMENTO });
        try
        {
            const retorno = await API.post('parquimetro/iniciar',{
                sessao: {
                    latitude,
                    longitude,
                    veiculo_id: veiculoId,
                    veiculo: {
                        veiculo_id: veiculoId,
                    },
                    cartao_credito: {
                        cartao_credito_id: cartaoId,
                    },
                    cartao_credito_id: cartaoId,
                }
            });

            console.log(retorno.data);
            iniciarSessaoSucesso(retorno.data, dispatch);
        }
        catch(erro)
        {
            iniciarSessaoErro(erro.message, dispatch);
        }
    }
}

export const carregarParquimetroSucesso = (parquimetro, dispatch) => {
    dispatch({
        type: MODIFICA_SESSAO_PARQUIMETRO,
        payload: parquimetro
    });
}

export const carregarParquimetroErro = (erro, dispatch) => {
    dispatch({
        type: MODIFICA_SESSAO_PARQUIMETRO,
        payload: null
    });
}

export const iniciarSessaoSucesso = (parquimetro, dispatch) => {
    if(dispatch){
        dispatch({
            type: INICIAR_SESSAO_SUCESSO,
            payload: parquimetro
        });
    }else{
        return {
            type: INICIAR_SESSAO_SUCESSO,
            payload: parquimetro
        }
    }
}

export const iniciarSessaoErro = (erro, dispatch) => {
    //exibir alert com o erro
    dispatch({
        type: INICIAR_SESSAO_ERRO,
    });
}

export const modificaCartaoId = (cartaoId) => {
    return {
        type: MODIFICA_SESSAO_CARTAO_ID,
        payload: cartaoId
    };
}

export const modificaVeiculoId = (veiculoId) => {
    return {
        type: MODIFICA_SESSAO_VEICULO_ID,
        payload: veiculoId
    };
}

export const modificaLatitudeLongitude = (latitudeLongitude) => {
    return {
        type: MODIFICA_SESSAO_LATITUDE_LONGITUDE,
        payload: latitudeLongitude
    };
}


export const modificaPorcentagemContador = (valor) => {
    return {
        type: MODIFICA_SESSAO_PORCENTAGEM_CONTADOR,
        payload: valor
    };
}


export const modificaTempoContador = (valor) => {
    return {
        type: MODIFICA_SESSAO_TEMPO_CONTADOR,
        payload: valor
    };
}


export const modificaValorAtual = (valor) => {
    return {
        type: MODIFICA_SESSAO_VALOR_ATUAL,
        payload: valor
    };
}