import React, { Component } from 'react';
import {
    AppRegistry,
    Platform,
    StyleSheet,
    View
} from 'react-native';

import {Scene, Router} from 'react-native-router-flux';

import HomeView from './HomeView'
import ArtistDetailView from './ArtistDetailView'

class App extends React.Component {
    render() {

        const isAndroid = Platform.OS === 'android'
        return <Router>
            <Scene key="root">
                <Scene key="home" component={HomeView} hideNavBar/>
                <Scene key="artistDetail" component={ArtistDetailView} hideNavBar={isAndroid}/>
            </Scene>
        </Router>
    }
}

AppRegistry.registerComponent('NovationMusic', () => App);

