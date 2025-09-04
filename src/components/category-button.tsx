import { Chip } from 'react-native-paper';

type CategoryButtonProps = {
  children: React.ReactNode;
  isSelected: boolean;
  onPress: () => void;
};

export const CategoryButton: React.FC<CategoryButtonProps> = ({
  children,
  isSelected,
  onPress,
}) => {
  return (
    <Chip
      mode="flat"
      selectedColor="#fff"
      onPress={onPress}
      selected={false}
      style={{
        borderRadius: 32,
        backgroundColor: isSelected ? '#6B031D' : '#fff',
      }}
      textStyle={{
        color: isSelected ? '#fff' : '#000',
        fontWeight: isSelected ? '600' : '400',
        fontSize: 12,
      }}
    >
      {children}
    </Chip>
  );
};
