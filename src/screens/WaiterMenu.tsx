import { CategorySelector, Container, ListCardMenu } from '@components';
import { StyleSheet, View } from 'react-native';

export function WaiterMenu() {
  return (
    <Container>
      <View style={styles.mainContainer}>
        <CategorySelector />
        <ListCardMenu />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  listContainer: {
    flex: 1,
    marginTop: 16,
  },
  listContent: {
    gap: 16,
  },
});
