import { 
    MODIFICA_VEICULO,
    MODIFICA_VEICULO_ID,
    MODIFICA_VEICULO_PLACA,
    MODIFICA_VEICULO_DESCRICAO,
    SALVAR_VEICULO_EM_ANDAMENTO,
    SALVAR_VEICULO_SUCESSO,
    SALVAR_VEICULO_ERRO,
    EXCLUIR_VEICULO_EM_ANDAMENTO,
    EXCLUIR_VEICULO_SUCESSO,
    EXCLUIR_VEICULO_ERRO,
} from '../actions/types';

const INITIAL_STATE = {
    veiculo: {
        id: 0,
        placa: '',
        descricao: '',
    },
    salvandoVeiculo: false,
    erro: null,
    excluindoVeiculo: false,
    erroExclusao: null,
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case MODIFICA_VEICULO_ID:
            return { ...state, veiculo: {...state.veiculo, id: action.payload } }
        case MODIFICA_VEICULO_PLACA:
            return { ...state, veiculo: {...state.veiculo, placa: action.payload } }
        case MODIFICA_VEICULO_DESCRICAO:
            return { ...state, veiculo: {...state.veiculo, descricao: action.payload  } }
        case MODIFICA_VEICULO:
            return { ...state, veiculo: action.payload || INITIAL_STATE.veiculo }
        case SALVAR_VEICULO_EM_ANDAMENTO:
            return { ...state, salvandoVeiculo: true }
        case SALVAR_VEICULO_SUCESSO:
            return { ...state, ...INITIAL_STATE }
        case SALVAR_VEICULO_ERRO:
            return { ...state, erro: action.payload , salvandoVeiculo: false }
        case EXCLUIR_VEICULO_EM_ANDAMENTO:
            return { ...state, excluindoVeiculo: true }
        case EXCLUIR_VEICULO_SUCESSO:
            return { ...state, ...INITIAL_STATE }
        case EXCLUIR_VEICULO_ERRO:
            return { ...state, erroExclusao: action.payload , excluindoVeiculo: false }
        default:
            return state;
    }    
}