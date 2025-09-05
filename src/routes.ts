import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  HelloWorld: undefined;
  Login: undefined;
  Menu: undefined;
  OrderEntry: undefined;
};

export type NavProps = NativeStackNavigationProp<RootStackParamList>;
