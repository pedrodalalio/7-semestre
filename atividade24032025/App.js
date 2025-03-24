import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CreateCustomerScreen from './screens/CreateCustomerScreen';
import CreateEmployeeScreen from './screens/CreateEmployeeScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import CreateSaleScreen from './screens/CreateSaleScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={LoginScreen}></Drawer.Screen>
        <Drawer.Screen name="Home" component={HomeScreen}></Drawer.Screen>
        <Drawer.Screen name="Criar Cliente" component={CreateCustomerScreen}></Drawer.Screen>
        <Drawer.Screen name="Criar Funcionário" component={CreateEmployeeScreen}></Drawer.Screen>
        <Drawer.Screen name="Criar Venda" component={CreateSaleScreen}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};