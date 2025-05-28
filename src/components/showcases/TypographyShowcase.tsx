import { Heading, Text, Caption, Section } from '../ui';

export function TypographyShowcase() {
  return (
    <Section spacing="md">
      <Heading level={2}>Typography Components</Heading>
      
      {/* Heading Component */}
      <div style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={3}>Heading Component</Heading>
        <Text color="secondary" style={{ marginBottom: 'var(--space-6)' }}>
          The Heading component provides consistent heading styles with semantic HTML.
        </Text>
        
        <div style={{ 
          padding: 'var(--space-6)', 
          backgroundColor: 'white',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: 'var(--space-4)'
        }}>
          <Heading level={1}>Heading Level 1</Heading>
          <Heading level={2}>Heading Level 2</Heading>
          <Heading level={3}>Heading Level 3</Heading>
          <Heading level={4}>Heading Level 4</Heading>
          <Heading level={5}>Heading Level 5</Heading>
          <Heading level={6} style={{ marginBottom: '0' }}>Heading Level 6</Heading>
        </div>
      </div>

      {/* Text Component */}
      <div style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={3}>Text Component</Heading>
        <Text color="secondary" style={{ marginBottom: 'var(--space-6)' }}>
          The Text component handles body text with various sizes, weights, and colors.
        </Text>
        
        <div style={{ 
          padding: 'var(--space-6)', 
          backgroundColor: 'white',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: 'var(--space-4)'
        }}>
          <Text size="xl">Extra Large Text (xl)</Text>
          <Text size="base">Base Text (base) - Default</Text>
          <Text size="sm">Small Text (sm)</Text>
          <Text weight="bold" color="primary">Bold Primary Text</Text>
          <Text color="success">Success Color Text</Text>
          <Text color="muted" style={{ marginBottom: '0' }}>Muted Color Text</Text>
        </div>
      </div>

      {/* Caption Component */}
      <div>
        <Heading level={3}>Caption Component</Heading>
        <Text color="secondary" style={{ marginBottom: 'var(--space-6)' }}>
          The Caption component is for small text like labels, hints, and metadata.
        </Text>
        
        <div style={{ 
          padding: 'var(--space-6)', 
          backgroundColor: 'white',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: 'var(--space-4)'
        }}>
          <Caption>Default muted caption</Caption>
          <Text as="span"> • </Text>
          <Caption color="primary">Primary caption</Caption>
          <Text as="span"> • </Text>
          <Caption color="secondary">Secondary caption</Caption>
        </div>
      </div>
    </Section>
  );
}