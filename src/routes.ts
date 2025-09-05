import type { MenuItem } from '@data';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  HelloWorld: undefined;
  Login: undefined;
  ItemInfo: { item: MenuItem };
  ItemRemovable: { item: MenuItem };
  Menu: undefined;
  OrderEntry: undefined;
};

export type NavProps = NativeStackNavigationProp<RootStackParamList>;
