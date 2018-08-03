import { 
    MODIFICA_CADASTRO_USUARIO_NOME,
    MODIFICA_CADASTRO_USUARIO_EMAIL,
    MODIFICA_CADASTRO_USUARIO_CPF,
    MODIFICA_CADASTRO_USUARIO_SENHA,
    SALVAR_CADASTRO_USUARIO_EM_ANDAMENTO,
    SALVAR_CADASTRO_USUARIO_SUCESSO,
    SALVAR_CADASTRO_USUARIO_ERRO,
} from '../actions/types';

const INITIAL_STATE = {
    nome: '',
    email: '',
    cpf: '',
    senha: '',
    salvandoUsuario: false,
    erro: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case MODIFICA_CADASTRO_USUARIO_NOME:
            return { ...state, nome: action.payload }
        case MODIFICA_CADASTRO_USUARIO_EMAIL:
            return { ...state, email: action.payload }
        case MODIFICA_CADASTRO_USUARIO_CPF:
            return { ...state, cpf: action.payload }
        case MODIFICA_CADASTRO_USUARIO_SENHA:
            return { ...state, senha: action.payload }
        case SALVAR_CADASTRO_USUARIO_EM_ANDAMENTO:
            return { ...state, salvandoUsuario: true }
        case SALVAR_CADASTRO_USUARIO_SUCESSO:
            return { ...state, ...INITIAL_STATE }
        case SALVAR_CADASTRO_USUARIO_ERRO:
            return { ...state, erro: action.payload , salvandoUsuario: false }
        
        default:
            return state;
    }    
}