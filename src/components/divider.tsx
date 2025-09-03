import { type DimensionValue, StyleSheet, Text, View } from 'react-native';

type DividerProps = {
  label?: string;
  size?: DimensionValue;
  color?: string;
};

export function Divider({ label, size, color }: DividerProps) {
  return (
    <View style={[styles.view, { width: size }]}>
      <View style={[styles.lines, { backgroundColor: color }]} />
      {label && <Text style={[styles.text, { color }]}>{label}</Text>}
      <View style={[styles.lines, { backgroundColor: color }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  lines: {
    backgroundColor: '#676767',
    flex: 1,
    height: 1,
  },
  text: {
    color: '#676767',
    marginHorizontal: 12,
  },
});
