import { Heading, Text, Caption } from '../components/ui';

export function Test() {
  return (
    <div>
      <Heading level={1}>Design System Test Page</Heading>
      <Text>This page showcases all design system components as they are built.</Text>
      
      <nav style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-8)' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/'); window.dispatchEvent(new PopStateEvent('popstate')); }}>
          ← Back to Home
        </a>
      </nav>

      {/* Typography Components Showcase */}
      <section style={{ marginBottom: 'var(--space-12)' }}>
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
          
          <Caption>
            Usage: &lt;Heading level={'{1-6}'}&gt;Your heading text&lt;/Heading&gt;
          </Caption>
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
            <Heading level={4}>Text Sizes</Heading>
            <Text size="xl">Extra Large Text (xl)</Text>
            <Text size="lg">Large Text (lg)</Text>
            <Text size="base">Base Text (base) - Default</Text>
            <Text size="sm">Small Text (sm)</Text>
            <Text size="xs" style={{ marginBottom: 'var(--space-6)' }}>Extra Small Text (xs)</Text>

            <Heading level={4}>Text Weights</Heading>
            <Text weight="light">Light Weight Text</Text>
            <Text weight="normal">Normal Weight Text (default)</Text>
            <Text weight="medium">Medium Weight Text</Text>
            <Text weight="semibold">Semibold Weight Text</Text>
            <Text weight="bold" style={{ marginBottom: 'var(--space-6)' }}>Bold Weight Text</Text>

            <Heading level={4}>Text Colors</Heading>
            <Text color="primary">Primary color text (default)</Text>
            <Text color="secondary">Secondary color text</Text>
            <Text color="muted">Muted color text</Text>
            <Text color="success">Success color text</Text>
            <Text color="warning">Warning color text</Text>
            <Text color="error" style={{ marginBottom: 'var(--space-6)' }}>Error color text</Text>

            <Heading level={4}>Text as Different Elements</Heading>
            <Text as="div">Text rendered as div element</Text>
            <Text as="span">Text rendered as span element</Text>
            <Text as="p" style={{ marginBottom: '0' }}>Text rendered as paragraph (default)</Text>
          </div>
          
          <Caption>
            Usage: &lt;Text size="lg" weight="medium" color="primary"&gt;Your text&lt;/Text&gt;
          </Caption>
        </div>

        {/* Caption Component */}
        <div style={{ marginBottom: 'var(--space-8)' }}>
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
            <div style={{ marginBottom: 'var(--space-4)' }}>
              <Text style={{ marginBottom: 'var(--space-2)' }}>Default muted caption:</Text>
              <Caption>This is a muted caption for additional information</Caption>
            </div>
            
            <div style={{ marginBottom: 'var(--space-4)' }}>
              <Text style={{ marginBottom: 'var(--space-2)' }}>Primary caption:</Text>
              <Caption color="primary">This is a primary colored caption</Caption>
            </div>
            
            <div>
              <Text style={{ marginBottom: 'var(--space-2)' }}>Secondary caption:</Text>
              <Caption color="secondary">This is a secondary colored caption</Caption>
            </div>
          </div>
          
          <Caption>
            Usage: &lt;Caption color="muted"&gt;Small text content&lt;/Caption&gt;
          </Caption>
        </div>

        {/* Combined Example */}
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <Heading level={3}>Combined Typography Example</Heading>
          <Text color="secondary" style={{ marginBottom: 'var(--space-6)' }}>
            Here's how the typography components work together in a real layout.
          </Text>
          
          <div style={{ 
            padding: 'var(--space-6)', 
            backgroundColor: 'white',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: 'var(--space-4)'
          }}>
            <Heading level={2}>Financial Planning Basics</Heading>
            <Caption color="secondary">Published on March 15, 2024 • 5 min read</Caption>
            
            <Text style={{ marginTop: 'var(--space-4)' }}>
              Building wealth requires a systematic approach to saving and investing. 
              The key is to start early and remain consistent with your contributions.
            </Text>
            
            <Heading level={3}>Key Principles</Heading>
            <Text>
              <Text as="span" weight="semibold">Pay yourself first:</Text> Always save a portion of your income before spending on discretionary items.
            </Text>
            <Text>
              <Text as="span" weight="semibold">Compound interest:</Text> Time is your greatest asset when it comes to growing wealth.
            </Text>
            
            <div style={{ 
              padding: 'var(--space-4)', 
              backgroundColor: 'var(--color-primary-50)',
              borderRadius: 'var(--radius-md)',
              borderLeft: '4px solid var(--color-primary-500)'
            }}>
              <Text weight="medium" color="primary" style={{ marginBottom: 'var(--space-2)' }}>
                Pro Tip
              </Text>
              <Text size="sm" style={{ marginBottom: '0' }}>
                Start with just 10% of your income and gradually increase as your salary grows.
              </Text>
            </div>
          </div>
          
          <Caption>
            This example shows headings, body text, captions, and emphasized text working together.
          </Caption>
        </div>
      </section>

      {/* Design Tokens Showcase - keeping from previous story */}
      <section style={{ marginBottom: 'var(--space-12)' }}>
        <Heading level={2}>Design Tokens</Heading>
        
        {/* Color Palette */}
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <Heading level={3}>Color Palette</Heading>
          
          <div style={{ marginBottom: 'var(--space-6)' }}>
            <Heading level={4}>Primary Colors</Heading>
            <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(shade => (
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
            <Heading level={4}>Neutral Colors</Heading>
            <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(shade => (
                <div key={shade} style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: `var(--color-neutral-${shade})`,
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  paddingBottom: 'var(--space-1)',
                  fontSize: 'var(--font-size-xs)',
                  color: shade >= 500 ? 'white' : 'var(--color-neutral-900)',
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

        {/* Typography Scale */}
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <Heading level={3}>Typography Scale</Heading>
          {[
            { name: '5xl', size: 'var(--font-size-5xl)' },
            { name: '4xl', size: 'var(--font-size-4xl)' },
            { name: '3xl', size: 'var(--font-size-3xl)' },
            { name: '2xl', size: 'var(--font-size-2xl)' },
            { name: 'xl', size: 'var(--font-size-xl)' },
            { name: 'lg', size: 'var(--font-size-lg)' },
            { name: 'base', size: 'var(--font-size-base)' },
            { name: 'sm', size: 'var(--font-size-sm)' },
            { name: 'xs', size: 'var(--font-size-xs)' }
          ].map(({ name, size }) => (
            <div key={name} style={{ 
              fontSize: size, 
              marginBottom: 'var(--space-2)',
              display: 'flex',
              alignItems: 'baseline',
              gap: 'var(--space-4)'
            }}>
              <span>The quick brown fox ({name})</span>
              <code style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-neutral-600)' }}>{size}</code>
            </div>
          ))}
        </div>

        {/* Spacing Scale */}
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <Heading level={3}>Spacing Scale</Heading>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            {[1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24].map(space => (
              <div key={space} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                <code style={{ fontSize: 'var(--font-size-sm)', minWidth: '80px' }}>space-{space}</code>
                <div style={{
                  width: `var(--space-${space})`,
                  height: 'var(--space-4)',
                  backgroundColor: 'var(--color-primary-500)',
                  borderRadius: 'var(--radius-sm)'
                }} />
                <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-neutral-600)' }}>
                  {space === 1 ? '4px' : space === 2 ? '8px' : space === 3 ? '12px' : space === 4 ? '16px' : 
                   space === 5 ? '20px' : space === 6 ? '24px' : space === 8 ? '32px' : space === 10 ? '40px' :
                   space === 12 ? '48px' : space === 16 ? '64px' : space === 20 ? '80px' : '96px'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Shadows */}
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <Heading level={3}>Shadow System</Heading>
          <div style={{ display: 'flex', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
            {['sm', 'base', 'md', 'lg', 'xl'].map(shadow => (
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

        {/* Border Radius */}
        <div>
          <Heading level={3}>Border Radius</Heading>
          <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
            {['sm', 'base', 'md', 'lg', 'xl', '2xl'].map(radius => (
              <div key={radius} style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--color-primary-100)',
                border: '2px solid var(--color-primary-300)',
                borderRadius: `var(--radius-${radius})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--color-primary-700)'
              }}>
                {radius}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ 
        border: `1px solid var(--color-neutral-300)`, 
        padding: 'var(--space-4)', 
        marginTop: 'var(--space-8)',
        borderRadius: 'var(--radius-lg)',
        backgroundColor: 'var(--color-neutral-50)'
      }}>
        <Heading level={2} style={{ marginBottom: 'var(--space-2)' }}>Test Status</Heading>
        <Text style={{ marginBottom: 'var(--space-2)' }}>✅ Basic test page is working</Text>
        <Text style={{ marginBottom: 'var(--space-2)' }}>✅ Design tokens are implemented and showcased</Text>
        <Text style={{ marginBottom: 'var(--space-2)' }}>✅ Typography components (Heading, Text, Caption) are complete</Text>
        <Text style={{ marginBottom: '0' }}>⏳ More components will appear here as they are built</Text>
      </div>
    </div>
  );
}