import { 
    CONSULTA_PLACA_EM_ANDAMENTO,
    CONSULTA_PLACA_SUCESSO,
    CONSULTA_PLACA_ERRO,
    MODIFICA_CONSULTA_PLACA,
} from '../actions/types';

const INITIAL_STATE = {
    placa: '',
    sessao: null,
    carregandoSessao: false,
    erro: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case MODIFICA_CONSULTA_PLACA:
            return { ...state, placa: action.payload }
        case CONSULTA_PLACA_EM_ANDAMENTO:
            return { ...state, carregandoSessao: true, erro: null }
        case CONSULTA_PLACA_SUCESSO:
            return { ...state, sessao: action.payload , carregandoSessao: false, erro: null }
        case CONSULTA_PLACA_ERRO:
            return { ...state, erro: action.payload , carregandoSessao: false }
        
        default:
            return state;
    }    
}