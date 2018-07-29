import { 
    MODIFICA_CARTAO_ID,
    MODIFICA_CARTAO_NUMERO,
    MODIFICA_CARTAO_BANDEIRA,
    MODIFICA_CARTAO_VALIDADE,
    SALVAR_CARTAO_EM_ANDAMENTO,
    SALVAR_CARTAO_SUCESSO,
    SALVAR_CARTAO_ERRO,
} from '../actions/types';

const INITIAL_STATE = {
    id: 0,
    numero: '',
    bandeira: '',
    validade: '',
    salvandoCartao: false,
    erro: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case MODIFICA_CARTAO_ID:
            return { ...state, id: action.payload }
        case MODIFICA_CARTAO_NUMERO:
            return { ...state, numero: action.payload }
        case MODIFICA_CARTAO_BANDEIRA:
            return { ...state, bandeira: action.payload }
        case MODIFICA_CARTAO_VALIDADE:
            return { ...state, validade: action.payload }
        case SALVAR_CARTAO_EM_ANDAMENTO:
            return { ...state, salvandoCartao: true }
        case SALVAR_CARTAO_SUCESSO:
            return { ...state, ...INITIAL_STATE }
        case SALVAR_CARTAO_ERRO:
            return { ...state, erro: action.payload , salvandoCartao: false }
        
        default:
            return state;
    }    
}