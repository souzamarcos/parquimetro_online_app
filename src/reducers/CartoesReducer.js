import { 
    CARREGAR_VEICULO_EM_ANDAMENTO,
    CARREGAR_VEICULO_SUCESSO,
    CARREGAR_VEICULO_ERRO,
} from 'parquimetro-actions/types';

const INITIAL_STATE = {
    cartoes: [],
    carregandoCartoes: false,
    erro: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CARREGAR_VEICULO_EM_ANDAMENTO:
            return { ...state, carregandoCartoes: true, erro: null }
        case CARREGAR_VEICULO_SUCESSO:
            return { ...state, cartoes: action.payload , arregandoCartoes: false, erro: null }
        case CARREGAR_VEICULO_ERRO:
            return { ...state, erro: action.payload , arregandoCartoes: false }
        
        default:
            return state;
    }    
}