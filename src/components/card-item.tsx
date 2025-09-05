import type { MenuItem } from '@data';
import { formatCurrency } from '@utils/format';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Counter } from './counter';

type MenuItemCardProps = {
  item: MenuItem;
  onPress: () => void;
};

export function MenuItemCard({ item, onPress }: MenuItemCardProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <View style={styles.textGap}>
          <Text style={styles.title}>{item.name}</Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.description}
          >
            {item.shortDescription}
          </Text>
        </View>
        <View style={styles.bottomRow}>
          <Text style={styles.price}>{formatCurrency(item.price)}</Text>
          <Counter size="small" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    height: 100,
    width: '100%',
    borderRadius: 16,
    backgroundColor: 'white',
    borderColor: '#595960',
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '30%',
    height: '100%',
    resizeMode: 'cover',
  },
  infoContainer: {
    width: '70%',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 10,
  },
  textGap: {
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#6B031D',
  },
  description: {
    fontSize: 10,
    color: '#6B7280',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
