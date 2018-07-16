import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import DetailsScreen from './Details';

const RootStack = createStackNavigator({
  Home: Home,
  Details: DetailsScreen,
});

export default RootStack;