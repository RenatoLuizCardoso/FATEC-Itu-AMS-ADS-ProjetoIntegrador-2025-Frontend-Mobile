import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HelloWorld, WaiterMenu } from '@screens';
import { PaperProvider } from 'react-native-paper';

const Stack = createNativeStackNavigator();

export function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Menu"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="HelloWorld" component={HelloWorld} />
          <Stack.Screen name="Menu" component={WaiterMenu} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
