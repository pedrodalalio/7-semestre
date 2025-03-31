import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from './screens/HomeScreen';
import DisplayScreen from './screens/DisplayScreen';
import EditOrConfirmScreen from './screens/EditOrConfirmScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="EditOrConfirm" component={EditOrConfirmScreen}/>
        <Stack.Screen name="Display" component={DisplayScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};