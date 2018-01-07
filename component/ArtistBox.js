/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


export default class ArtistBox extends Component<{}> {
    render() {
        //console.warn('El nombre', this.props.artist.likes);

        //Destructuring
        const { image, name, likes, comments} = this.props.artist

        return (
            <View style={styles.artistBox}>
                <Image source={{ uri: image }} style={styles.image}/>
                <View style={styles.info}>
                    <Text style={styles.nome}>{ name }</Text>
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Icon name="ios-heart-outline" size={30} color="gray" />
                            <Text style={styles.count}>{ likes }</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Icon name="ios-chatboxes-outline" size={30} color="gray" />
                            <Text style={styles.count}>{ comments }</Text>
                        </View>
                    </View>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({

    image: {
        width: 150,
        height: 150,
    },

    artistBox: {
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: {
            height: 1,
            width: -2,
        },
        elevation: 5,
    },

    info: {
        //backgroundColor: 'blue',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'

    },

    name: {
        fontSize: 20,
        marginTop: 10,
        color: '#333333',

    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 40,
        marginTop: 15,
    },

    iconContainer: {
        flex: 1,
        alignItems: 'center',

    },

    count: {
        color: 'gray',
    }


});
