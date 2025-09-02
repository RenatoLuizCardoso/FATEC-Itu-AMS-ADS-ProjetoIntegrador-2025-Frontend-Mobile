import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { Card } from './card';

type RemovableCardProps = {
  title: string;
};

export function RemovableCard({ title }: RemovableCardProps) {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Card onPress={handleClick}>
      <Text style={styles.title}>{title}</Text>
      <View pointerEvents="none">
        <Checkbox status={checked ? 'checked' : 'unchecked'} color="#6B031D" />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#6B031D',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
