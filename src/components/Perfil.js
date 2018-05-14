import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    ListView, 
    ListViewDataSource, 
    TouchableHighlight,
} from 'react-native';
import { defaultStyles } from 'parquimetro-styles';
import Cabecalho from 'parquimetro-components/Cabecalho';

export default class Perfil extends Component {

    constructor() {
        super();
        
        this.state = {
        };
    }

    render(){
        return (
            <View style={styles.viewScreen}>
                <View>
                    <View>
                        <Cabecalho />
                    </View>
                </View>
                <View style={{ flex: 1}}>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewScreen: {
        ...defaultStyles.viewFull,
    },
});