import { createStackNavigator } from 'react-navigation';

import OtherTab from './OtherTab';
import VideoPlayer from './VideoPlayer';

export default createStackNavigator({
    Home: VideoPlayer,
    Other: OtherTab
});