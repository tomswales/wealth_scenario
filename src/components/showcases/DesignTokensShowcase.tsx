import { Heading, Section } from '../ui';

export function DesignTokensShowcase() {
  return (
    <Section spacing="md">
      <Heading level={2}>Design Tokens</Heading>
      
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
  );
}