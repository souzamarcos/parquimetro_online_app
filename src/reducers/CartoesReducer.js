import { 
    CARREGAR_CARTAO_EM_ANDAMENTO,
    CARREGAR_CARTAO_SUCESSO,
    CARREGAR_CARTAO_ERRO,
} from '../actions/types';

const INITIAL_STATE = {
    cartoes: [],
    carregandoCartoes: false,
    erro: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CARREGAR_CARTAO_EM_ANDAMENTO:
            return { ...state, carregandoCartoes: true, erro: null }
        case CARREGAR_CARTAO_SUCESSO:
            return { ...state, cartoes: action.payload , arregandoCartoes: false, erro: null }
        case CARREGAR_CARTAO_ERRO:
            return { ...state, erro: action.payload , arregandoCartoes: false }
        
        default:
            return state;
    }    
}