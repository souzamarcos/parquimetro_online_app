import React from 'react';
import { AppRegistry, PermissionsAndroid } from 'react-native';

import App from './src/App';

async function requestGpsPermission() {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                'title': 'Ative sua localização',
                'message': 'É necessário ativar o GPS antes de inicar'
            }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the gps")
        } else {
            console.log("Gps permission denied")
        }
    } catch (err) {
        console.warn(err)
    }
}

requestGpsPermission();

AppRegistry.registerComponent('parquimetro_online_app', () => App);
