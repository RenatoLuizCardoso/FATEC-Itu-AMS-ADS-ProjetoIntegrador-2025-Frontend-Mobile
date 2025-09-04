import { type DimensionValue, StyleSheet, Text, View } from 'react-native';
import { Divider as PaperDivider } from 'react-native-paper';

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

  // return (
  //   <View
  //     style={{
  //       display: 'flex',
  //       flexDirection: 'row',
  //       gap: 10,
  //       alignItems: 'center',
  //       justifyContent: 'center',
  //     }}
  //   >
  //     <View
  //       style={[
  //         styles.lines,
  //         color
  //           ? { backgroundColor: color }
  //           : { backgroundColor: styles.lines.backgroundColor },
  //       ]}
  //     ></View>
  //     <Text>coisa</Text>
  //     <View style={styles.lines}></View>
  //   </View>
  // );
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
