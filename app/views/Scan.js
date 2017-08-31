
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Navigator,
  StatusBar
} from 'react-native';
import Camera from 'react-native-camera';
import { Spinner, Header, Button} from 'native-base';
import Result from './Result';

export default class Scan extends Component {

  constructor(props) {
    super(props);
    this.state = {
      animating: false
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#11c1f3"
          barStyle="light-content"/>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>

          <Spinner animating={this.state.animating} color='red' />

          <Button block info large
            style={styles.capture}
            onPress={this.takePicture.bind(this)}>
            <Text>Read Label</Text>
          </Button>
        </Camera>
      </View>
    );
  }

  navigate() {
    this.props.navigator.push({
      view: 'Result'
    })
  }

  ocr(data) {
    this.setState({
      animating: false
    })
    this.props.navigator.push({
      view: 'Result',
      passProps: {
        test: "this is test"
      }
    })
    // var photo = {
    //   uri: data,
    //   type: 'image/jpeg',
    //   name: 'photo.jpg',
    // }
    // var body  = new FormData();
    // body.append('photo', photo)

    // 

  }

  takePicture() {
    this.setState({
      animating: true
    })
    this.camera.capture()
      .then((data) => 
        this.ocr(data.path)
      )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    borderRadius: 5,
    padding: 10,
    margin: 40
  }
});