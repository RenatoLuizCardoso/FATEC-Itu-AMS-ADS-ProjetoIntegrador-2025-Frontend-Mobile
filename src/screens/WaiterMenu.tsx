import { CategorySelector, Container, ListCardMenu } from '@components';
import { categories } from '@data';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface ListCardMenuHandles {
  scrollToIndex: (index: number) => void;
}

export function WaiterMenu() {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
    categories[0]?.id || null,
  );

  const menuListRef = React.useRef<ListCardMenuHandles>(null);

  const handleCategoryPress = (categoryId: string, index: number) => {
    setSelectedCategory(categoryId);
    menuListRef.current?.scrollToIndex(index);
  };

  return (
    <Container>
      <View style={styles.mainContainer}>
        <CategorySelector
          selectedCategory={selectedCategory}
          onCategoryPress={handleCategoryPress}
        />
        <ListCardMenu ref={menuListRef} />
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
