import { 
    CARREGAR_HISTORICO_EM_ANDAMENTO,
    CARREGAR_HISTORICO_SUCESSO,
    CARREGAR_HISTORICO_ERRO,
} from '../actions/types';

const INITIAL_STATE = {
    historico: [],
    carregandoHistorico: false,
    erro: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CARREGAR_HISTORICO_EM_ANDAMENTO:
            return { ...state, carregandoHistorico: true, erro: null }
        case CARREGAR_HISTORICO_SUCESSO:
            return { ...state, historico: action.payload , carregandoHistorico: false, erro: null }
        case CARREGAR_HISTORICO_ERRO:
            return { ...state, erro: action.payload , carregandoHistorico: false }
        
        default:
            return state;
    }    
}