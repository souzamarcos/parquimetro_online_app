import { 
    modificaPorcentagemContador,
    modificaTempoContador,
    modificaValorAtual,
    modificaCorFundo,
    finalizarSessao,
    buscarUltimaSessao
 } from '../actions/ParquimetroActions';
import _ from 'lodash';
import Moment, { duration } from 'moment';
import cores from '../styles/cores';
import BackgroundTimer from 'react-native-background-timer';
import { Store } from '../Store';

class CronometroParquimetro {

    static iniciarCronometroParquimetro = () => {
        BackgroundTimer.runBackgroundTimer(() => { 
            const { sessao } =  Store.getState().ParquimetroReducer;
            //corrigir contador
            if(!_.isEmpty(sessao)){

                let duracaoPercorrida = null;
                if(Moment() < Moment(sessao.data_inicio)){
                    duracaoPercorrida = duration(Moment().diff(Moment()));
                }else{
                    duracaoPercorrida = duration(Moment().diff(sessao.data_inicio));
                }
                
                let tempoPercorrido = Moment.utc(duracaoPercorrida.as('milliseconds'));

                let tempoMaximoMinutos = sessao.grupo_parquimetro.tempo_limite; //corrigir pegar tempo máximo do parquimetro
                let minutosPercorridos = duracaoPercorrida.as('minutes');

                let porcentagemContador = (minutosPercorridos / tempoMaximoMinutos) * 100;
                let tempoContador = tempoPercorrido != null ? tempoPercorrido.format('HH:mm:ss') : "";
                let valorAtual = _.round(sessao.grupo_parquimetro.valor_minuto * minutosPercorridos, 2);//corrigir pegar preço do parquimetro

                Store.dispatch(modificaPorcentagemContador(porcentagemContador));
                Store.dispatch(modificaTempoContador(tempoContador));
                Store.dispatch(modificaValorAtual(valorAtual));

                const state = Store.getState();
                
                if(!state.ParquimetroReducer.buscandoSessao && !state.ParquimetroReducer.finalizandoSessao && (sessao.grupo_parquimetro.tempo_limite - (minutosPercorridos || 0) <= 30)){
                    Store.dispatch(modificaCorFundo(cores.vermelho));  
                }else{
                    Store.dispatch(modificaCorFundo(cores.telaParquimetroContagemAzul)); 
                }

                if(porcentagemContador>=100){
                    BackgroundTimer.stopBackgroundTimer();
                    Store.dispatch(finalizarSessao());  
                }
            }
        }, 1000);
    }

    static pausarCronometroParquimetro = () => {
        BackgroundTimer.stopBackgroundTimer();
    }
}

export default CronometroParquimetro;