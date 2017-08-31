'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  Navigator,
  StatusBar,
} from 'react-native';
import { Badge, Header, Button, Container, Title, Content, H1, H2, H3, Text} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Card } from 'react-native-material-design';

export default class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: ''
    }
    const KEY = 'AIzaSyB0o-RVgHkGlVkZLEJgeWs_RW_EmJHcQPs'
    const target = 'pa'
    var q = 'Paracetamol is a commonly used medicine that can help treat pain and reduce a high temperature (fever).'
    // fetch('https://translation.googleapis.com/language/translate/v2?key='+KEY+'&target='+target+'&q='+q,{
    //   method: "GET"
    // })
    // .then((response) => {
    //   this.setState({
    //     test: response
    //   })
    // } 
    // )
    // console.log(this.state)
  }

  render() {
    return (
      <ScrollView>
        <StatusBar
          backgroundColor="#11c1f3"
          barStyle="light-content"/>
        <Header backgroundColor="#11c1f3">
          <Title>Result</Title>
        </Header>
        <Card>
          <Card.Body>
            <H2>Paracetamol</H2>
            <H2>ਪੈਰਾਸੀਟਾਮੋਲ</H2>
          </Card.Body>
        </Card>
        <Card>
          
          <Card.Body>
            <H3>Drug Description</H3>
          </Card.Body>
          <Card.Body>
            <Badge info><Text>English</Text></Badge>
            <Text>Paracetamol is a commonly used medicine that can help treat pain and reduce a high temperature (fever).</Text>
          </Card.Body>
          <Card.Body>
            <Badge success><Text>Native</Text></Badge>
            <Text>ਪੈਰਾਸੀਟਾਮੋਲ ਨੂੰ ਇੱਕ ਆਮ ਵਰਤੇ ਦਵਾਈ ਹੈ, ਜੋ ਕਿ ਰੀੜ ਦੀ ਦਰਦ ਦੀ ਮਦਦ ਕਰਨ ਅਤੇ ਇੱਕ ਉੱਚ ਤਾਪਮਾਨ (ਬੁਖ਼ਾਰ) ਨੂੰ ਘੱਟ ਕਰ ਸਕਦਾ ਹੈ.</Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <H3>Side effects</H3>
          </Card.Body>
          <Card.Body>
            <Badge info><Text>English</Text></Badge>
            <Text>An allergic reaction, which can cause a rash and swelling</Text>
            <Text>Flushing, low blood pressure and a fast heartbeat – this can sometimes happen when paracetamol is given in hospital into a vein in your arm</Text>
          </Card.Body>
          <Card.Body>
            <Badge success><Text>Native</Text></Badge>
            <Text>ਇੱਕ ਐਲਰਜੀ ਪ੍ਰਤੀਕਰਮ ਹੈ, ਜੋ ਕਿ ਇੱਕ ਧੱਫ਼ੜ ਅਤੇ ਸੋਜ ਦਾ ਕਾਰਨ ਬਣ ਸਕਦਾ ਹੈ</Text>
            <Text>ਫਲੈਸ਼, ਘੱਟ ਬਲੱਡ ਪ੍ਰੈਸ਼ਰ ਅਤੇ ਇੱਕ ਤੇਜ਼ ਧੜਕਣ - ਇਹ ਕਈ ਵਾਰ ਹੋ ਸਕਦਾ ਹੈ, ਜਦ ਪੈਰਾਸੀਟਾਮੋਲ ਆਪਣੇ ਹੱਥ ਵਿੱਚ ਇੱਕ ਨਾੜੀ ਵਿੱਚ ਹਸਪਤਾਲ ਵਿੱਚ ਦਿੱਤਾ ਗਿਆ ਹੈ</Text>
          </Card.Body>
        </Card>
        

      </ScrollView>
    );
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
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});