import { CategorySelector, Container } from '@components';

export function WaiterMenu() {
  return (
    <Container>
      <main style={{ padding: '2rem' }}>
        <CategorySelector />
      </main>
    </Container>
  );
}
