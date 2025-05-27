export function Test() {
  return (
    <div>
      <h1>Design System Test Page</h1>
      <p>This page will showcase all design system components as they are built.</p>
      
      <nav style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/'); window.dispatchEvent(new PopStateEvent('popstate')); }}>
          ← Back to Home
        </a>
      </nav>

      <div style={{ border: '1px solid #ccc', padding: '1rem', marginTop: '2rem' }}>
        <h2>Test Status</h2>
        <p>✅ Basic test page is working</p>
        <p>⏳ Design system components will appear here as they're built</p>
      </div>
    </div>
  );
}