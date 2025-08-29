import { MaterialCommunityIcons } from '@expo/vector-icons';

type IconProps = React.ComponentProps<typeof MaterialCommunityIcons>;

export function Icon(props: IconProps) {
  return <MaterialCommunityIcons {...props} />;
}
