import { CategoryButton, SearchInput } from '@components';
import { categories } from '@data';
import { useRef } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { IconButton } from 'react-native-paper';

interface Category {
  id: string;
  name: string;
}

interface CategorySelectorProps {
  selectedCategory: string | null;
  searchValue: string;
  onSearch: (value: string) => void;
  onCategoryPress: (categoryId: string, index: number) => void;
}

export function CategorySelector({
  selectedCategory,
  searchValue,
  onSearch,
  onCategoryPress,
}: CategorySelectorProps) {
  const flatlistRef = useRef<FlatList<Category>>(null);

  const handlePress = (categoryId: string, index: number) => {
    onCategoryPress(categoryId, index);
    flatlistRef.current?.scrollToIndex({
      index,
      animated: true,
      viewPosition: 0.5,
    });
  };

  const scrollLeft = () => {
    flatlistRef.current?.scrollToOffset({
      offset: 0,
      animated: true,
    });
  };

  const scrollRight = () => {
    flatlistRef.current?.scrollToEnd({ animated: true });
  };

  return (
    <View style={styles.selectorContainer}>
      <SearchInput value={searchValue} onChangeText={onSearch} />

      <View style={styles.row}>
        <IconButton
          icon="chevron-left"
          size={20}
          onPress={scrollLeft}
          disabled={selectedCategory === categories[0]?.id}
        />

        <FlatList
          ref={flatlistRef}
          data={categories}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
          renderItem={({ item, index }) => (
            <CategoryButton
              isSelected={selectedCategory === item.id}
              onPress={() => handlePress(item.id, index)}
            >
              {item.name}
            </CategoryButton>
          )}
        />

        <IconButton
          icon="chevron-right"
          size={20}
          onPress={scrollRight}
          disabled={selectedCategory === categories[categories.length - 1]?.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  selectorContainer: {
    gap: 8,
    zIndex: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flatListContent: {
    gap: 2,
  },
});
