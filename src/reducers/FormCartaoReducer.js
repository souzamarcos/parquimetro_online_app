import { 
    MODIFICA_CARTAO_ID,
    MODIFICA_CARTAO_NUMERO,
    MODIFICA_CARTAO_BANDEIRA,
    MODIFICA_CARTAO_MES_VALIDADE,
    MODIFICA_CARTAO_ANO_VALIDADE,
    MODIFICA_CARTAO_CVV,
    SALVAR_CARTAO_EM_ANDAMENTO,
    SALVAR_CARTAO_SUCESSO,
    SALVAR_CARTAO_ERRO,
    EXCLUIR_CARTAO_EM_ANDAMENTO,
    EXCLUIR_CARTAO_SUCESSO,
    EXCLUIR_CARTAO_ERRO
} from '../actions/types';

const INITIAL_STATE = {
    cartao: {
        id: 0,
        numero: '',
        bandeira: '',
        mes_validade: '',
        ano_validade: '',
        cvv: '',
    },
    salvandoCartao: false,
    erro: null,
    excluindoVeiculo: false,
    erroExclusao: null,
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case MODIFICA_CARTAO_ID:
            return { ...state, cartao: {...state.cartao, id: action.payload } }
        case MODIFICA_CARTAO_NUMERO:
            return { ...state, cartao: {...state.cartao, numero: action.payload } }
        case MODIFICA_CARTAO_BANDEIRA:
            return { ...state, cartao: {...state.cartao, bandeira: action.payload } }
        case MODIFICA_CARTAO_MES_VALIDADE:
            return { ...state, cartao: {...state.cartao, mes_validade: action.payload } }
        case MODIFICA_CARTAO_ANO_VALIDADE:
            return { ...state, cartao: {...state.cartao, ano_validade: action.payload } }
        case MODIFICA_CARTAO_CVV:
            return { ...state, cartao: {...state.cartao, cvv: action.payload } }
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