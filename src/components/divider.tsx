import { type DimensionValue, StyleSheet, Text, View } from 'react-native';

type DividerProps = {
  label?: string;
  size?: DimensionValue;
  color?: string;
};

export function Divider({ label, size, color }: DividerProps) {
  return (
    <View style={[styles.view, { width: size }]}>
      <View
        style={[
          styles.lines,
          color
            ? { backgroundColor: color }
            : { backgroundColor: styles.lines.backgroundColor },
        ]}
      />
      {label && <Text style={[styles.text, { color }]}>{label}</Text>}
      <View
        style={[
          styles.lines,
          color
            ? { backgroundColor: color }
            : { backgroundColor: styles.lines.backgroundColor },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    justifyContent: 'center',
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
