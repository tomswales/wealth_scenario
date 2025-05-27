import { Heading, Text, Caption, Container, Section, Button } from '../components/ui';

export function Test() {
  return (
    <div>
      <Heading level={1}>Design System Test Page</Heading>
      <Text>This page showcases all design system components as they are built.</Text>
      
      <nav style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-8)' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/wealth_scenario/'); window.dispatchEvent(new PopStateEvent('popstate')); }}>
          ← Back to Home
        </a>
      </nav>

      {/* Layout Components Showcase */}
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

      {/* Button Components Showcase */}
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

      {/* Typography Components Showcase */}
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
      </Section>

      {/* Button Components Showcase */}
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

        {/* Text Component - abbreviated */}
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

      {/* Design Tokens */}
      <Section spacing="md">
        <Heading level={2}>Design Tokens</Heading>
        
        {/* Abbreviated design tokens showcase */}
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <Heading level={3}>Color Palette</Heading>
          
          <div style={{ marginBottom: 'var(--space-6)' }}>
            <Heading level={4}>Primary Colors</Heading>
            <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
              {[100, 300, 500, 700, 900].map(shade => (
                <div key={shade} style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: `var(--color-primary-${shade})`,
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  paddingBottom: 'var(--space-1)',
                  fontSize: 'var(--font-size-xs)',
                  color: shade >= 600 ? 'white' : 'var(--color-neutral-900)',
                  fontWeight: 'var(--font-weight-medium)'
                }}>
                  {shade}
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 'var(--space-6)' }}>
            <Heading level={4}>Semantic Colors</Heading>
            <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
              <div style={{
                padding: 'var(--space-4)',
                backgroundColor: 'var(--color-success-50)',
                border: `2px solid var(--color-success-500)`,
                borderRadius: 'var(--radius-lg)',
                color: 'var(--color-success-700)'
              }}>
                Success
              </div>
              <div style={{
                padding: 'var(--space-4)',
                backgroundColor: 'var(--color-warning-50)',
                border: `2px solid var(--color-warning-500)`,
                borderRadius: 'var(--radius-lg)',
                color: 'var(--color-warning-700)'
              }}>
                Warning
              </div>
              <div style={{
                padding: 'var(--space-4)',
                backgroundColor: 'var(--color-error-50)',
                border: `2px solid var(--color-error-500)`,
                borderRadius: 'var(--radius-lg)',
                color: 'var(--color-error-700)'
              }}>
                Error
              </div>
            </div>
          </div>
        </div>

        {/* Shadows - abbreviated */}
        <div>
          <Heading level={3}>Shadow System</Heading>
          <div style={{ display: 'flex', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
            {['sm', 'base', 'lg', 'xl'].map(shadow => (
              <div key={shadow} style={{
                width: '120px',
                height: '80px',
                backgroundColor: 'white',
                boxShadow: `var(--shadow-${shadow})`,
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)'
              }}>
                {shadow}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Status section using layout components */}
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
            <Text style={{ marginBottom: '0' }}>⏳ More components will appear here as they are built</Text>
          </div>
        </Container>
      </Section>
    </div>
  );
}