import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
} from 'react-native';
import { defaultStyles } from 'parquimetro-styles';
import { withNavigationFocus } from 'react-navigation';

import { connect } from 'react-redux';
import { alteraTitulo } from 'parquimetro-actions/AppActions';

class PerfilCadastro extends Component {

    constructor(props){
        super(props);
        
    }

    componentWillMount(){
        if(this.props.isFocused){
            this.props.alteraTitulo('Pesoal');
        }
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.isFocused){
            this.props.alteraTitulo('Pesoal');
        }
    }

    render() {
        return (
            <View style={styles.tela}>
                <Text>PerfilCadastro</Text>
            </View>
        );
    }
  }
  
const styles = StyleSheet.create({
    tela: {
        ...defaultStyles.telaFull,
    },
});

export default connect(null, {alteraTitulo})(withNavigationFocus(PerfilCadastro));
