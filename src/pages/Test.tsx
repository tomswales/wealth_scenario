export function Test() {
  return (
    <div>
      <h1>Design System Test Page</h1>
      <p>This page showcases all design system components as they are built.</p>
      
      <nav style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-8)' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/'); window.dispatchEvent(new PopStateEvent('popstate')); }}>
          ← Back to Home
        </a>
      </nav>

      {/* Design Tokens Showcase */}
      <section style={{ marginBottom: 'var(--space-12)' }}>
        <h2>Design Tokens</h2>
        
        {/* Color Palette */}
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <h3>Color Palette</h3>
          
          <div style={{ marginBottom: 'var(--space-6)' }}>
            <h4>Primary Colors</h4>
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
            <h4>Neutral Colors</h4>
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
            <h4>Semantic Colors</h4>
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
          <h3>Typography Scale</h3>
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
          <h3>Spacing Scale</h3>
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
          <h3>Shadow System</h3>
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
          <h3>Border Radius</h3>
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
        <h2>Test Status</h2>
        <p>✅ Basic test page is working</p>
        <p>✅ Design tokens are implemented and showcased</p>
        <p>⏳ Component library will appear here as components are built</p>
      </div>
    </div>
  );
}