import { 
    CARREGAR_VEICULO_EM_ANDAMENTO,
    CARREGAR_VEICULO_SUCESSO,
    CARREGAR_VEICULO_ERRO,
} from '../actions/types';

const INITIAL_STATE = {
    veiculos: [],
    carregandoVeiculos: false,
    erro: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CARREGAR_VEICULO_EM_ANDAMENTO:
            return { ...state, carregandoVeiculos: true, erro: null }
        case CARREGAR_VEICULO_SUCESSO:
            return { ...state, veiculos: action.payload , arregandoVeiculos: false, erro: null }
        case CARREGAR_VEICULO_ERRO:
            return { ...state, erro: action.payload , arregandoVeiculos: false }
        
        default:
            return state;
    }    
}