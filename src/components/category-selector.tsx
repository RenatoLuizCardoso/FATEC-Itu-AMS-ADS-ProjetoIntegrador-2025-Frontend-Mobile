import { CategoryButton, SearchInput } from '@components';
import { categories } from '@data';
import React from 'react';
import { FlatList, View } from 'react-native';

interface Category {
  id: string;
  name: string;
}

export function CategorySelector() {
  const [search, setSearch] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
    categories[0]?.id || null,
  );

  const flatlistRef = React.useRef<FlatList<Category>>(null);

  const handlePress = (categoryId: string, index: number) => {
    setSelectedCategory(categoryId);

    flatlistRef.current?.scrollToIndex({
      index,
      animated: true,
      viewPosition: 0.5,
    });
  };
  return (
    <View>
      <SearchInput value={search} onChangeText={setSearch} />
      <FlatList
        ref={flatlistRef}
        data={categories}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 8,
          gap: 2,
        }}
        renderItem={({ item, index }) => (
          <CategoryButton
            isSelected={selectedCategory === item.id}
            onPress={() => handlePress(item.id, index)}
          >
            {item.name}
          </CategoryButton>
        )}
      />
    </View>
  );
}
