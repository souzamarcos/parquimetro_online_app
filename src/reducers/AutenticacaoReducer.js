import { 
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    CADASTRO_USUARIO_SUCESSO,
    CADASTRO_USUARIO_ERRO,
    LOGIN_USUARIO_SUCESSO,
    LOGIN_USUARIO_ERRO,
    LOGIN_EM_ANDAMENTO,
    CADASTRO_EM_ANDAMENTO,
} from '../actions/types';

const INITIAL_STATE = {
    usuarioLogado: null,
    email: 'marcos@teste.com.br',
    senha: '123456',
    erroCadastro: '',
    erroLogin: '',
    loadingLogin: false,
    loadingCadastro: false,
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case MODIFICA_EMAIL:
            return { ...state, email: action.payload }
        case MODIFICA_SENHA:
            return { ...state, senha: action.payload }
        case CADASTRO_USUARIO_ERRO:
            return { ...state, erroCadastro: action.payload, loadingCadastro: false }
        case CADASTRO_USUARIO_SUCESSO:
            return { ...state, nome: '', senha: '', loadingCadastro: false }
        case LOGIN_USUARIO_ERRO:
            return { ...state, erroLogin: action.payload, loadingLogin: false }
        case LOGIN_USUARIO_SUCESSO:
            return { ...state, usuarioLogado: action.payload } 
        case LOGIN_EM_ANDAMENTO:
            return { ...state, loadingLogin: true }
        case CADASTRO_EM_ANDAMENTO:
            return { ...state, loadingCadastro: true }
        default:
            return state;
    }    
}