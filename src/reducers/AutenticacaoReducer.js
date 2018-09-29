import { 
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    CADASTRO_USUARIO_SUCESSO,
    CADASTRO_USUARIO_ERRO,
    LOGIN_USUARIO_SUCESSO,
    LOGIN_USUARIO_ERRO,
    LOGIN_EM_ANDAMENTO,
    CADASTRO_EM_ANDAMENTO,
    DESLOGAR_USUARIO
} from '../actions/types';

const INITIAL_STATE = {
    usuarioLogado: null,
    email: 'marcosguarda@teste.com.br',
    senha: '123456',
    erroCadastro: '',
    erroLogin: '',
    loadingLogin: false,
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case MODIFICA_EMAIL:
            return { ...state, email: action.payload }
        case MODIFICA_SENHA:
            return { ...state, senha: action.payload }
        case LOGIN_USUARIO_ERRO:
            return { ...state, erroLogin: action.payload, loadingLogin: false }
        case LOGIN_USUARIO_SUCESSO:
            return { ...state, usuarioLogado: action.payload, loadingLogin: false } 
        case LOGIN_EM_ANDAMENTO:
            return { ...state, loadingLogin: true }
        case DESLOGAR_USUARIO:
            return { ...state, ...INITIAL_STATE }
        default:
            return state;
    }    
}