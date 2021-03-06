import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList142876Navigator from '../features/ArticleList142876/navigator';
import Maps142863Navigator from '../features/Maps142863/navigator';
import ArticleList142853Navigator from '../features/ArticleList142853/navigator';
import Maps142840Navigator from '../features/Maps142840/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList142876: { screen: ArticleList142876Navigator },
Maps142863: { screen: Maps142863Navigator },
ArticleList142853: { screen: ArticleList142853Navigator },
Maps142840: { screen: Maps142840Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
