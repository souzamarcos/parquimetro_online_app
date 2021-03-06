import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  StyleSheet,
  View,
} from 'react-native';
import { defaultStyles } from '../styles';

export default class MenuSuperior extends Component {

    constructor(props){
        super(props);

        this.state = {
            open: false
        }
    }

    _toggleMenu(){
        this.setState({
            open: !this.state.open
        });
    }

    _renderList(){

        if(this.state.open){
            return (
                <View style={styles.list}>
                    <View style={styles.listItem}>
                        <Text style={styles.listItemText}>
                            Sobre
                        </Text>
                    </View>
                    <View style={styles.listItem}>
                        <Text style={styles.listItemText}>
                            Sair
                        </Text>
                    </View>
                </View>
            );
        }
    }

    render(){
        return (
            <View>
                <View style={styles.menuTitle}>
                    <TouchableHighlight 
                        onPress={() => this._toggleMenu()}
                        underlayColor="rgba(0, 0, 0, 0.05)"
                        style={styles.icon}>
                        <View style={styles.icon}>
                            <Text style={styles.title}>
                                { this.props.texto }
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                { this._renderList() }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menuTitle: {
        alignItems: 'flex-end',
    },
    icon: {
        margin: 10,
        justifyContent: 'center', 
    },
    title: {
        ...defaultStyles.textTitle,
    },
    list: {
        //borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#fff',
        borderColor: '#5d5d5d',
        marginRight: 10,
        elevation: 2
    },
    listItem: {
        minWidth: 130,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    listItemText: {
        textAlign: 'left'
    }
});