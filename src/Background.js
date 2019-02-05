import React, { Component } from 'react';
import {  StyleSheet, View } from 'react-native';
import Video from 'react-native-video';

// const sintelLocal = require('../assets/sintel-2048-surround.mp4');
const toyUri = 'http://techslides.com/demos/sample-videos/small.mp4?variable=value';
const azure = 'https://nw-scout.azurewebsites.net/videos/e9b315b0-a17a-11e8-a2bc-b16050baa314.mp4';

export default class Background extends Component {
    render() {
        return (
            <Video
                /*
                source={{
                    uri: 'some-embedded-mp4-file',
                }}
                */
                source={{ uri: azure }}
                volume={0}
                muted
                onLoadStart={() => { }}
                onLoad={() => { }}
                onEnd={() => { }}
                repeat
                playInBackground={false}
                playWhenInactive
                resizeMode='cover'
                style={styles.bg}
            /> 
        );
    }
}

const styles = StyleSheet.create({
    bg: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });

