export function Home() {
  return (
    <div>
      <h1>Wealth Scenario App</h1>
      <p>A financial simulation tool for wealth planning.</p>
      
      <nav style={{ marginTop: '2rem' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/test'); window.dispatchEvent(new PopStateEvent('popstate')); }}>
          → Go to Design System Test Page
        </a>
      </nav>

      <div style={{ border: '1px solid #ccc', padding: '1rem', marginTop: '2rem' }}>
        <h2>Development Status</h2>
        <p>🚧 This app is under development</p>
        <p>📋 Following the development plan step by step</p>
        <p>🎨 Currently building the design system</p>
      </div>
    </div>
  );
}