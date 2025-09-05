import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HelloWorld, Login, OrderEntry } from '@screens';
import type { RootStackParamList } from 'routes';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HelloWorld" component={HelloWorld} />
        <Stack.Screen name="OrderEntry" component={OrderEntry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
