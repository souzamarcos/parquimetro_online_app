import { NavigationActions } from 'react-navigation';
import API  from 'parquimetro/Api';
import { 
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    CADASTRO_USUARIO_SUCESSO,
    CADASTRO_USUARIO_ERRO,
    LOGIN_USUARIO_SUCESSO,
    LOGIN_USUARIO_ERRO,
    LOGIN_EM_ANDAMENTO ,
    CADASTRO_EM_ANDAMENTO
} from './types';

export const modificaEmail = (texto) => {
    return {
        type: MODIFICA_EMAIL,
        payload: texto
    }
}

export const modificaSenha = (texto) => {
    return {
        type: MODIFICA_SENHA,
        payload: texto
    }
}

export const cadastraUsuario = ({ email, senha }) => {
    return dispatch => {
        dispatch({ type: CADASTRO_EM_ANDAMENTO });

        //cadastrar com axios
            // .then(user => {
            //     let emailB64 = b64.encode(email);
                
            //     firebase.database().ref('/contatos/'+emailB64)
            //         .push({ nome })
            //         .then(value => cadastroUsuarioSucesso(dispatch))   
            // })
            // .catch(erro => cadastroUsuarioErro(erro, dispatch));
    }
}


const cadastroUsuarioSucesso = (usuario, dispatch) => {
    dispatch ({ type: CADASTRO_USUARIO_SUCESSO, payload: usuario });

    //Actions.boasVindas(); mudar para NavigationActions
}

const cadastroUsuarioErro = (erro, dispatch) => {
    dispatch ({ type: CADASTRO_USUARIO_ERRO, payload: erro.message });
}

export const autenticarUsuario = ({ email, senha }) => {

    return dispatch => {
        dispatch({ type: LOGIN_EM_ANDAMENTO });
        console.log('usuario/login');
        API.post('usuario/login', {
            usuario: {
                email,
                password: senha
            }
        })
            .then(retorno => {
                console.log(retorno);
                loginUsuarioSucesso(retorno, dispatch)
            })
    }
}

const loginUsuarioSucesso = (usuario, dispatch) => {
    dispatch ({
        type: LOGIN_USUARIO_SUCESSO,
        payload: usuario
    });

    NavigationActions.navigate({ routeName: 'TelaPrincipal' });
    dispatch(NavigationActions.navigate({ routeName: 'TelaPrincipal' }));
}

const loginUsuarioErro = (erro, dispatch) => {
    dispatch ({
        type: LOGIN_USUARIO_ERRO,
        payload: erro.message
    });
}