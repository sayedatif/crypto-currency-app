import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import DetailsScreen from './Details';
import HistoryScreen from './HistoryScreen';

const RootStack = createStackNavigator({
  Home: Home,
  Details: DetailsScreen,
  History: HistoryScreen,
});

export default RootStack;