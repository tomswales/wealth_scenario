import { Heading, Text, Caption, Container, Section } from '../ui';

export function LayoutShowcase() {
  return (
    <Section spacing="md">
      <Heading level={2}>Layout Components</Heading>
      
      {/* Container Component */}
      <div style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={3}>Container Component</Heading>
        <Text color="secondary" style={{ marginBottom: 'var(--space-6)' }}>
          The Container component provides consistent max-widths and horizontal padding for content.
        </Text>
        
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <Heading level={4}>Container Sizes</Heading>
          
          {/* Small Container */}
          <div style={{ marginBottom: 'var(--space-4)' }}>
            <Caption color="secondary" style={{ marginBottom: 'var(--space-2)' }}>Small (640px max-width)</Caption>
            <Container size="sm" style={{ 
              backgroundColor: 'var(--color-primary-50)', 
              border: '2px solid var(--color-primary-200)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-4)'
            }}>
              <Text size="sm" style={{ marginBottom: '0' }}>
                This content is inside a small container. It has a maximum width of 640px and will center itself with automatic margins.
              </Text>
            </Container>
          </div>

          {/* Medium Container */}
          <div style={{ marginBottom: 'var(--space-4)' }}>
            <Caption color="secondary" style={{ marginBottom: 'var(--space-2)' }}>Medium (768px max-width)</Caption>
            <Container size="md" style={{ 
              backgroundColor: 'var(--color-success-50)', 
              border: '2px solid var(--color-success-200)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-4)'
            }}>
              <Text size="sm" style={{ marginBottom: '0' }}>
                This content is inside a medium container with a 768px maximum width.
              </Text>
            </Container>
          </div>

          {/* Large Container */}
          <div style={{ marginBottom: 'var(--space-4)' }}>
            <Caption color="secondary" style={{ marginBottom: 'var(--space-2)' }}>Large (1024px max-width) - Default</Caption>
            <Container size="lg" style={{ 
              backgroundColor: 'var(--color-warning-50)', 
              border: '2px solid var(--color-warning-200)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-4)'
            }}>
              <Text size="sm" style={{ marginBottom: '0' }}>
                This is a large container (default size) with 1024px maximum width. This is the size used for the main app layout.
              </Text>
            </Container>
          </div>

          {/* Full Width Container */}
          <div>
            <Caption color="secondary" style={{ marginBottom: 'var(--space-2)' }}>Full Width (100%)</Caption>
            <Container size="full" style={{ 
              backgroundColor: 'var(--color-neutral-100)', 
              border: '2px solid var(--color-neutral-300)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-4)'
            }}>
              <Text size="sm" style={{ marginBottom: '0' }}>
                This container takes the full width of its parent element with no maximum width constraint.
              </Text>
            </Container>
          </div>
        </div>
        
        <Caption>
          Usage: Container with size prop - small, medium, large, extra-large, or full
        </Caption>
      </div>

      {/* Section Component */}
      <div style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={3}>Section Component</Heading>
        <Text color="secondary" style={{ marginBottom: 'var(--space-6)' }}>
          The Section component provides consistent vertical spacing for page sections.
        </Text>
        
        <div style={{ border: '1px dashed var(--color-neutral-300)', borderRadius: 'var(--radius-md)' }}>
          {/* Small Section */}
          <Section spacing="sm" style={{ backgroundColor: 'var(--color-primary-50)' }}>
            <Container size="md">
              <Heading level={4} style={{ marginBottom: 'var(--space-2)' }}>Small Section Spacing</Heading>
              <Caption>This section has small vertical padding (32px top/bottom)</Caption>
            </Container>
          </Section>

          {/* Medium Section */}
          <Section spacing="md" style={{ backgroundColor: 'var(--color-success-50)' }}>
            <Container size="md">
              <Heading level={4} style={{ marginBottom: 'var(--space-2)' }}>Medium Section Spacing</Heading>
              <Caption>This section has medium vertical padding (48px top/bottom) - Default</Caption>
            </Container>
          </Section>

          {/* Large Section */}
          <Section spacing="lg" style={{ backgroundColor: 'var(--color-warning-50)' }}>
            <Container size="md">
              <Heading level={4} style={{ marginBottom: 'var(--space-2)' }}>Large Section Spacing</Heading>
              <Caption>This section has large vertical padding (64px top/bottom)</Caption>
            </Container>
          </Section>

          {/* Extra Large Section */}
          <Section spacing="xl" style={{ backgroundColor: 'var(--color-neutral-100)' }}>
            <Container size="md">
              <Heading level={4} style={{ marginBottom: 'var(--space-2)' }}>Extra Large Section Spacing</Heading>
              <Caption>This section has extra large vertical padding (80px top/bottom)</Caption>
            </Container>
          </Section>
        </div>
        
        <Caption style={{ marginTop: 'var(--space-4)' }}>
          Usage: Section with spacing prop - small, medium, large, or extra-large
        </Caption>
      </div>
    </Section>
  );
}