import { Heading, Text, Container, Section } from '../ui';

export function StatusShowcase() {
  return (
    <Section spacing="sm">
      <Container size="md">
        <div style={{ 
          border: `1px solid var(--color-neutral-300)`, 
          padding: 'var(--space-6)', 
          borderRadius: 'var(--radius-lg)',
          backgroundColor: 'white',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <Heading level={2} style={{ marginBottom: 'var(--space-4)' }}>Test Status</Heading>
          <Text style={{ marginBottom: 'var(--space-2)' }}>✅ Basic test page is working</Text>
          <Text style={{ marginBottom: 'var(--space-2)' }}>✅ Design tokens are implemented and showcased</Text>
          <Text style={{ marginBottom: 'var(--space-2)' }}>✅ Typography components (Heading, Text, Caption) are complete</Text>
          <Text style={{ marginBottom: 'var(--space-2)' }}>✅ Layout components (Container, Section) are complete</Text>
          <Text style={{ marginBottom: 'var(--space-2)' }}>✅ Button component is complete with all variants and states</Text>
          <Text style={{ marginBottom: 'var(--space-2)' }}>✅ Form components (Input, Label) are complete with accessibility</Text>
          <Text style={{ marginBottom: 'var(--space-2)' }}>✅ Card components are complete with variants and structured layouts</Text>
          <Text style={{ marginBottom: 'var(--space-2)' }}>✅ Grid system is complete with responsive layouts and spanning</Text>
          <Text style={{ marginBottom: '0' }}>⏳ More components will appear here as they are built</Text>
        </div>
      </Container>
    </Section>
  );
}