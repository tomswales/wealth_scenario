import { Heading, Text, Caption, Section, Button } from '../ui';

export function ButtonShowcase() {
  return (
    <Section spacing="md">
      <Heading level={2}>Button Components</Heading>
      
      <div style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={3}>Button Component</Heading>
        <Text color="secondary" style={{ marginBottom: 'var(--space-6)' }}>
          The Button component provides consistent interactive elements with multiple variants and states.
        </Text>
        
        <div style={{ 
          padding: 'var(--space-6)', 
          backgroundColor: 'white',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: 'var(--space-6)'
        }}>
          <div style={{ marginBottom: 'var(--space-6)' }}>
            <Heading level={4} style={{ marginBottom: 'var(--space-4)' }}>Button Variants</Heading>
            <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', alignItems: 'center' }}>
              <Button variant="primary" onClick={() => alert('Primary button clicked!')}>Primary</Button>
              <Button variant="secondary" onClick={() => alert('Secondary button clicked!')}>Secondary</Button>
              <Button variant="ghost" onClick={() => alert('Ghost button clicked!')}>Ghost</Button>
              <Button variant="danger" onClick={() => alert('Danger button clicked!')}>Danger</Button>
            </div>
          </div>

          <div style={{ marginBottom: 'var(--space-6)' }}>
            <Heading level={4} style={{ marginBottom: 'var(--space-4)' }}>Button Sizes</Heading>
            <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', alignItems: 'center' }}>
              <Button size="sm" onClick={() => alert('Small button clicked!')}>Small</Button>
              <Button size="base" onClick={() => alert('Base button clicked!')}>Base (Default)</Button>
              <Button size="lg" onClick={() => alert('Large button clicked!')}>Large</Button>
            </div>
          </div>

          <div style={{ marginBottom: 'var(--space-6)' }}>
            <Heading level={4} style={{ marginBottom: 'var(--space-4)' }}>Button States</Heading>
            <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', alignItems: 'center' }}>
              <Button onClick={() => alert('Normal button clicked!')}>Normal</Button>
              <Button disabled>Disabled</Button>
              <Button loading>Loading</Button>
              <Button variant="secondary" loading>Loading Secondary</Button>
            </div>
          </div>

          <div>
            <Heading level={4} style={{ marginBottom: 'var(--space-4)' }}>Mixed Examples</Heading>
            <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', alignItems: 'center' }}>
              <Button size="sm" variant="ghost">Small Ghost</Button>
              <Button size="lg" variant="danger">Large Danger</Button>
              <Button variant="secondary" disabled>Disabled Secondary</Button>
              <Button size="sm" loading variant="primary">Small Loading</Button>
            </div>
          </div>
        </div>
        
        <Caption>
          Usage: Button with variant (primary, secondary, ghost, danger), size (sm, base, lg), and state props (disabled, loading)
        </Caption>
      </div>
    </Section>
  );
}