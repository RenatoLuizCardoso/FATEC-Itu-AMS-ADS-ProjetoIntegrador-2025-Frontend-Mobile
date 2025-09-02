import { Text, View } from 'react-native';
import { Card as PaperCard } from 'react-native-paper';

export function Card() {
  return (
    <View>
      <PaperCard mode="outlined">
        <PaperCard.Content>
          <Text>Teste</Text>
        </PaperCard.Content>
        <PaperCard.Actions>
          <Text>Teste</Text>
        </PaperCard.Actions>
      </PaperCard>
    </View>
  );
}
