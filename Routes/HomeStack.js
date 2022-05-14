import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "../screens/Login";
import Dashboard from "../screens/Dashboard";

const screens = {
  Login: {
    screen: Login,
  },
  Dashboard: {
    screen: Dashboard,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
