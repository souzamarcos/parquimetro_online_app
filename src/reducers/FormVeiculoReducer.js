import { 
    MODIFICA_VEICULO_ID,
    MODIFICA_VEICULO_PLACA,
    MODIFICA_VEICULO_APELIDO,
    SALVAR_VEICULO_EM_ANDAMENTO,
    SALVAR_VEICULO_SUCESSO,
    SALVAR_VEICULO_ERRO,
} from '../actions/types';

const INITIAL_STATE = {
    id: 0,
    placa: '',
    apelido: '',
    salvandoVeiculo: false,
    erro: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case MODIFICA_VEICULO_ID:
            return { ...state, id: action.payload }
        case MODIFICA_VEICULO_PLACA:
            return { ...state, placa: action.payload }
        case MODIFICA_VEICULO_APELIDO:
            return { ...state, apelido: action.payload }
        case SALVAR_VEICULO_EM_ANDAMENTO:
            return { ...state, salvandoVeiculo: true }
        case SALVAR_VEICULO_SUCESSO:
            return { ...state, ...INITIAL_STATE }
        case SALVAR_VEICULO_ERRO:
            return { ...state, erro: action.payload , salvandoVeiculo: false }
        
        default:
            return state;
    }    
}