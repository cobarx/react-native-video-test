import { createBottomTabNavigator } from 'react-navigation';

import OtherTab from './OtherTab';
import VideoPlayer from './VideoPlayer';

export default createBottomTabNavigator({
    Main: VideoPlayer,
    Other: OtherTab
});