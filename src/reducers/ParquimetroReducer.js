import { 
    MODIFICA_SESSAO_PARQUIMETRO,
    MODIFICA_SESSAO_LATITUDE_LONGITUDE,
    MODIFICA_SESSAO_CARTAO_ID,
    MODIFICA_SESSAO_VEICULO_ID,
    CARREGAR_SESSAO_PARQUIMETRO_EM_ANDAMENTO,
} from '../actions/types';

const INITIAL_STATE = {
    parquimetro: null,
    carregandoParquimetro: true,
    sessao: null,
    carregandoSessao: true,
    cartaoId: null,
    veiculoId: null,
    latitude: null,
    longitude: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case MODIFICA_SESSAO_PARQUIMETRO:
            return { ...state, parquimetro: action.payload, carregandoParquimetro: false }
        case CARREGAR_SESSAO_PARQUIMETRO_EM_ANDAMENTO:
            return { ...state, carregandoParquimetro: true}
        case MODIFICA_SESSAO_CARTAO_ID:
            return { ...state, cartaoId: action.payload }
        case MODIFICA_SESSAO_VEICULO_ID:
            return { ...state, veiculoId: action.payload }
        case MODIFICA_SESSAO_LATITUDE_LONGITUDE:
            return { ...state, latitude: action.payload.latitude, longitude: action.payload.longitude }
        
        default:
            return state;
    }    
}