import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HelloWorld } from '@screens';
import type { RootStackParamList } from './routes';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HelloWorld"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="HelloWorld" component={HelloWorld} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
