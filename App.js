import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MoviesScreen from './src/Screens/MoviesScreen';

const navigator = createStackNavigator(
  {
    movies: MoviesScreen,
  },
  {
    initialRouteName: "movies",
    defaultNavigationOptions: {
      title: "Movie List",
      headerTintColor: '#124',
      
    }
  }
);

export default createAppContainer(navigator);