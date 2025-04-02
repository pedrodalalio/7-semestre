import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import HomeScreen from './screens/HomeScreen';
import DisplayScreen from './screens/DisplayScreen';
import EditOrConfirmScreen from './screens/EditOrConfirmScreen';
import LoginScreen from './screens/LoginScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="Login" component={LoginScreen}/>
        <Drawer.Screen name="EditOrConfirm" component={EditOrConfirmScreen}/>
        <Drawer.Screen name="Display" component={DisplayScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};