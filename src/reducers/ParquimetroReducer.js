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
} from '../actions/types';

const INITIAL_STATE = {
    parquimetro: null,
    carregandoParquimetro: true,
    sessao: null,
    carregandoSessao: true,
    cartaoId: null,
    veiculoId: null,
    latitude: null,
    longitude: null,
    porcentagemContador: 0,
    tempoContador: '00:00',
    valorAtual: 0
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
        case INICIAR_SESSAO_EM_ANDAMENTO:
            return { ...state, carregandoSessao: true}
        case INICIAR_SESSAO_SUCESSO:
            return { ...state, sessao: action.payload, carregandoSessao: false}
        case INICIAR_SESSAO_ERRO:
            return { ...state, carregandoSessao: false}
        case MODIFICA_SESSAO_PORCENTAGEM_CONTADOR:
            return { ...state, porcentagemContador: action.payload }
        case MODIFICA_SESSAO_TEMPO_CONTADOR:
            return { ...state, tempoContador: action.payload }
        case MODIFICA_SESSAO_VALOR_ATUAL:
            return { ...state, valorAtual: action.payload }
        default:
            return state;
    }    
}