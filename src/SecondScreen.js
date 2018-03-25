import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  tabIcon: {
    width: 16,
    height: 16,
  },
});

const SecondScreen = (props)  => {
    console.log(props);

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                THIS IS THE SECOND SCREEN!
            </Text>
        </View>
    );
}

SecondScreen.navigationOptions = {
    drawerIcon: () => (
        <Image
          source={require('../imgs/home.png')}
          style={[styles.tabIcon, {tintColor: 'black'}]}
        />
    )
};

export default SecondScreen
