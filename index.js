/** @format */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
// import App from './App';
import Main from './src/components/Main';


import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Main);
