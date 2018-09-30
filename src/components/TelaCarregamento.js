import React, { Component } from 'react';
import {
    View,
    Image,
    ScrollView,
    ActivityIndicator,
    StyleSheet
} from 'react-native';
import { defaultStyles } from '../styles';
import cores from '../styles/cores';

const TelaCarregamento = () => (
    <ScrollView style={{ width: '100%' }} contentContainerStyle={styles.tela}>
        <Image style={styles.imagem} source={require('../imgs/logo.png')} />
        <ActivityIndicator style={styles.activityIndicator} size="large" color={cores.azul} />
    </ScrollView>
);
    

const styles = StyleSheet.create({
    tela: {
        ...defaultStyles.telaPaddingHorizontalGrande,
        backgroundColor: cores.branco,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagem: {
        width: 150,
        height: 150,
    },
    activityIndicator: {
        paddingVertical: 80,
    },
});


export default TelaCarregamento;