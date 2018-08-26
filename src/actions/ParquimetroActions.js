import API  from '../Api';
import { 
    MODIFICA_SESSAO_PARQUIMETRO,
    MODIFICA_SESSAO_LATITUDE_LONGITUDE,
    MODIFICA_SESSAO_CARTAO_ID,
    MODIFICA_SESSAO_VEICULO_ID,
    CARREGAR_SESSAO_PARQUIMETRO_EM_ANDAMENTO,
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
            carregarParquimetroErro(erro.response.message, dispatch);
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

export const modificaLatitudeLongitude = (latitudeLongitude) => {
    return {
        type: MODIFICA_SESSAO_LATITUDE_LONGITUDE,
        payload: latitudeLongitude
    };
}