import { 
    MODIFICA_SESSAO_PARQUIMETRO,
    MODIFICA_SESSAO_LATITUDE_LONGITUDE,
    MODIFICA_SESSAO_CARTAO_ID,
    MODIFICA_SESSAO_VEICULO_ID,
    CARREGAR_SESSAO_PARQUIMETRO_EM_ANDAMENTO,
    CARREGAR_SESSAO_PARQUIMETRO_SUCESSO,
    CARREGAR_SESSAO_PARQUIMETRO_ERRO,
    INICIAR_SESSAO_SUCESSO,
    INICIAR_SESSAO_ERRO,
    INICIAR_SESSAO_EM_ANDAMENTO,
    MODIFICA_SESSAO_PORCENTAGEM_CONTADOR,
    MODIFICA_SESSAO_TEMPO_CONTADOR,
    MODIFICA_SESSAO_VALOR_ATUAL,
    FINALIZAR_SESSAO_SUCESSO,
    FINALIZAR_SESSAO_EM_ANDAMENTO,
    FINALIZAR_SESSAO_ERRO,
    BUSCAR_SESSAO_SUCESSO,
    BUSCAR_SESSAO_EM_ANDAMENTO,
    MODIFICA_SESSAO_COR_FUNDO,
    BUSCAR_SESSAO_ERRO,
} from '../actions/types';

import cores from '../styles/cores';

const INITIAL_STATE = {
    parquimetro: null,
    carregandoParquimetro: true,
    sessao: null,
    iniciandoSessao: false,
    finalizandoSessao: false,
    buscandoSessao: false,
    cartaoId: null,
    veiculoId: null,
    latitude: null,
    longitude: null,
    porcentagemContador: 0,
    tempoContador: "00:00:00",
    valorAtual: 0,
    corFundo: cores.telaParquimetroContagemAzul,
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case MODIFICA_SESSAO_PARQUIMETRO:
            return { ...state, parquimetro: action.payload, carregandoParquimetro: false }
        case CARREGAR_SESSAO_PARQUIMETRO_EM_ANDAMENTO:
            return { ...state, carregandoParquimetro: true}
        case CARREGAR_SESSAO_PARQUIMETRO_SUCESSO:
            return { ...state, parquimetro: action.payload, carregandoParquimetro: false}
        case CARREGAR_SESSAO_PARQUIMETRO_ERRO:
            return { ...state, parquimetro: action.payload, carregandoParquimetro: false}
        case MODIFICA_SESSAO_CARTAO_ID:
            return { ...state, cartaoId: action.payload }
        case MODIFICA_SESSAO_VEICULO_ID:
            return { ...state, veiculoId: action.payload }
        case MODIFICA_SESSAO_LATITUDE_LONGITUDE:
            return { ...state, latitude: action.payload.latitude, longitude: action.payload.longitude }
        case INICIAR_SESSAO_EM_ANDAMENTO:
            return { ...state, iniciandoSessao: true}
        case INICIAR_SESSAO_SUCESSO:
            return { ...state, sessao: action.payload, iniciandoSessao: false, corFundo: INITIAL_STATE.corFundo}
        case BUSCAR_SESSAO_SUCESSO:
            return { ...state, sessao: action.payload, buscandoSessao: false, corFundo: INITIAL_STATE.corFundo}
        case BUSCAR_SESSAO_EM_ANDAMENTO:
            return { ...state, buscandoSessao: true}
        case BUSCAR_SESSAO_ERRO:
            return { ...state, buscandoSessao: false}
        case INICIAR_SESSAO_ERRO:
            return { ...state, iniciandoSessao: false}
        case MODIFICA_SESSAO_PORCENTAGEM_CONTADOR:
            return { ...state, porcentagemContador: action.payload }
        case MODIFICA_SESSAO_TEMPO_CONTADOR:
            return { ...state, tempoContador: action.payload }
        case MODIFICA_SESSAO_VALOR_ATUAL:
            return { ...state, valorAtual: action.payload }
        case MODIFICA_SESSAO_COR_FUNDO:
            return { ...state, corFundo: action.payload }   
        case FINALIZAR_SESSAO_EM_ANDAMENTO:
            return { ...state, finalizandoSessao: true}
        case FINALIZAR_SESSAO_SUCESSO:
            return { ...state, sessao: null, finalizandoSessao: false, corFundo: INITIAL_STATE.corFundo, porcentagemContador: INITIAL_STATE.porcentagemContador, tempoContador: INITIAL_STATE.tempoContador,valorAtual: INITIAL_STATE.valorAtual, }
        case FINALIZAR_SESSAO_ERRO:
            return { ...state, finalizandoSessao: false, corFundo: INITIAL_STATE.corFundo}
        default:
            return state;
    }    
}