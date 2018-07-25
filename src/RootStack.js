import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import DetailsScreen from './Details';
import HistoryScreen from './HistoryScreen';
import TransactScreen from './TransactScreen';

const RootStack = createStackNavigator({
  Home: Home,
  Details: DetailsScreen,
  History: HistoryScreen,
  Transact: TransactScreen,
});

export default RootStack;