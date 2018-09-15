import { 
    CARREGAR_PERGUNTAS_EM_ANDAMENTO,
    CARREGAR_PERGUNTAS_SUCESSO,
    CARREGAR_PERGUNTAS_ERRO,
} from '../actions/types';

const INITIAL_STATE = {
    perguntas: [],
    carregandoPerguntas: false,
    erro: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CARREGAR_PERGUNTAS_EM_ANDAMENTO:
            return { ...state, carregandoPerguntas: true, erro: null }
        case CARREGAR_PERGUNTAS_SUCESSO:
            return { ...state, perguntas: action.payload , carregandoPerguntas: false, erro: null }
        case CARREGAR_PERGUNTAS_ERRO:
            return { ...state, erro: action.payload , carregandoPerguntas: false }
        
        default:
            return state;
    }    
}