import { useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-paper';

export function Counter({ size = 'small' }: { size?: 'small' | 'medium' }) {
  const [value, setValue] = useState(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startCouting = (type: 'plus' | 'minus') => {
    if (type === 'plus') {
      setValue((prev) => prev + 1);
    } else {
      setValue((prev) => Math.max(prev - 1, 0));
    }

    intervalRef.current = setInterval(() => {
      if (type === 'plus') {
        setValue((prev) => prev + 1);
      } else {
        setValue((prev) => Math.max(prev - 1, 0));
      }
    }, 150);
  };

  const stopCounting = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  const styles = size === 'small' ? smallStyles : mediumStyles;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.minus]}
        onPressIn={() => startCouting('minus')}
        onPressOut={stopCounting}
      >
        <Icon source="minus" size={14} color="white" />
      </TouchableOpacity>

      <View style={styles.valueBox}>
        <Text style={styles.valueText}>{value}</Text>
      </View>

      <TouchableOpacity
        style={[styles.button, styles.plus]}
        onPressIn={() => startCouting('plus')}
        onPressOut={stopCounting}
      >
        <Icon source="plus" size={14} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const smallStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  minus: {
    backgroundColor: '#6B031D',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  plus: {
    backgroundColor: '#6B031D',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  valueBox: {
    width: 36,
    height: 25,
    borderColor: '#6B031D',
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  valueText: {
    fontSize: 14,
    fontWeight: '600',
  },
});

const mediumStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 40,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  minus: {
    backgroundColor: '#6B031D',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  plus: {
    backgroundColor: '#6B031D',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  valueBox: {
    width: 48,
    height: 32,
    borderColor: '#6B031D',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  valueText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
