import { Heading, Text, Caption, Section, Input, Label } from '../ui';

export function FormShowcase() {
  return (
    <Section spacing="md">
      <Heading level={2}>Form Components</Heading>
      
      <div style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={3}>Input & Label Components</Heading>
        <Text color="secondary" style={{ marginBottom: 'var(--space-6)' }}>
          The Input and Label components work together to provide consistent form inputs with accessibility.
        </Text>
        
        <div style={{ 
          padding: 'var(--space-6)', 
          backgroundColor: 'white',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: 'var(--space-6)'
        }}>
          <div style={{ marginBottom: 'var(--space-6)' }}>
            <Heading level={4} style={{ marginBottom: 'var(--space-4)' }}>Input Types</Heading>
            <div style={{ display: 'grid', gap: 'var(--space-4)', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
              <div>
                <Label htmlFor="text-input">Text Input</Label>
                <Input id="text-input" type="text" placeholder="Enter some text..." />
              </div>
              <div>
                <Label htmlFor="number-input">Number Input</Label>
                <Input id="number-input" type="number" placeholder="Enter a number..." />
              </div>
              <div>
                <Label htmlFor="email-input">Email Input</Label>
                <Input id="email-input" type="email" placeholder="Enter your email..." />
              </div>
              <div>
                <Label htmlFor="password-input">Password Input</Label>
                <Input id="password-input" type="password" placeholder="Enter password..." />
              </div>
            </div>
          </div>

          <div style={{ marginBottom: 'var(--space-6)' }}>
            <Heading level={4} style={{ marginBottom: 'var(--space-4)' }}>Input Sizes</Heading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: '400px' }}>
              <div>
                <Label htmlFor="small-input" size="sm">Small Input</Label>
                <Input id="small-input" size="sm" placeholder="Small input..." />
              </div>
              <div>
                <Label htmlFor="base-input">Base Input (Default)</Label>
                <Input id="base-input" size="base" placeholder="Base input..." />
              </div>
              <div>
                <Label htmlFor="large-input" size="lg">Large Input</Label>
                <Input id="large-input" size="lg" placeholder="Large input..." />
              </div>
            </div>
          </div>

          <div style={{ marginBottom: 'var(--space-6)' }}>
            <Heading level={4} style={{ marginBottom: 'var(--space-4)' }}>Input States</Heading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: '400px' }}>
              <div>
                <Label htmlFor="normal-input">Normal State</Label>
                <Input id="normal-input" placeholder="Click to focus and see border change" />
              </div>
              <div>
                <Label htmlFor="error-input">Error State</Label>
                <Input id="error-input" state="error" placeholder="This input has an error" />
              </div>
              <div>
                <Label htmlFor="success-input">Success State</Label>
                <Input id="success-input" state="success" placeholder="This input is valid" />
              </div>
              <div>
                <Label htmlFor="disabled-input">Disabled State</Label>
                <Input id="disabled-input" disabled placeholder="This input is disabled" />
              </div>
            </div>
          </div>

          <div>
            <Heading level={4} style={{ marginBottom: 'var(--space-4)' }}>Required Labels</Heading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: '400px' }}>
              <div>
                <Label htmlFor="required-input" required>Required Field</Label>
                <Input id="required-input" required placeholder="This field is required" />
              </div>
              <div>
                <Label htmlFor="optional-input">Optional Field</Label>
                <Input id="optional-input" placeholder="This field is optional" />
              </div>
            </div>
          </div>
        </div>
        
        <Caption>
          Usage: Input with type (text, number, email, password), size (sm, base, lg), state (default, error, success), and Label with required prop
        </Caption>
      </div>
    </Section>
  );
}