/** @format */
  
import {AppRegistry} from 'react-native';
import Background from './src/Background';
import StackNavigator from './src/StackNavigator';
import TabNavigator from './src/TabNavigator';
import VideoPlayer from './src/VideoPlayer';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => VideoPlayer);
