"user strict";
/**
 * Creates routing for the app.
 */
//Importing required components.
import React, { Component } from 'react';
import {
  View,
  Text,
  BackAndroid
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';

//Importing required views from ./app/views/ dir.
import Scan from './Scan';
import Result from './Result';

export default class Routing extends Component {
  constructor(props) {
    super(props)
  }

  /**
   * @param array route
   * @param object navigator
   *
   * @return view
   */
  navigatorRenderView(route, navigator) {
    _navigator = navigator;
    switch (route.view) {
      case 'Scan':
        return (
          <Scan navigator={navigator} {...route.passProps}/>
          )
      case 'Result':
        return (
          <Result navigator={navigator} {...route.passProps}/>
          )
    }
  }

  render() {
    return(
        <Navigator
          initialRoute={{
            view: 'Scan'
          }}
          renderScene={this.navigatorRenderView.bind(this)}
          configureScene={(route, routeStack) =>
            Navigator.SceneConfigs.FloatFromRight}
        />
    )
  }
}

//Enabling hardware button for navigating to previous view.
BackAndroid.addEventListener('hardwareBackPress', function() {
   if (_navigator.getCurrentRoutes().length === 1) {
     return false;
   }
   _navigator.pop();
   return true;
 });