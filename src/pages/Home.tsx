import { Heading, Text, Caption, Section } from '../components/ui';

export function Home() {
  return (
    <div>
      <Section spacing="md">
        <Heading level={1}>Wealth Scenario App</Heading>
        <Text size="lg" color="secondary">A financial simulation tool for wealth planning.</Text>
        
        <nav style={{ marginTop: 'var(--space-8)' }}>
          <a href="#" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/wealth_scenario/test'); window.dispatchEvent(new PopStateEvent('popstate')); }}>
            → Design System Test Page
          </a>
          {' | '}
          <a href="#" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/wealth_scenario/simulation-test'); window.dispatchEvent(new PopStateEvent('popstate')); }}>
            → Simulation Engine Test Page
          </a>
        </nav>
      </Section>

      <Section spacing="sm">
        <div style={{ 
          border: `1px solid var(--color-neutral-300)`, 
          padding: 'var(--space-6)', 
          borderRadius: 'var(--radius-lg)',
          backgroundColor: 'white',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <Heading level={2} style={{ marginBottom: 'var(--space-4)' }}>Development Status</Heading>
          <Text style={{ marginBottom: 'var(--space-2)' }}>🚧 This app is under development</Text>
          <Text style={{ marginBottom: 'var(--space-2)' }}>📋 Following the development plan step by step</Text>
          <Text style={{ marginBottom: 'var(--space-2)' }}>🎨 Currently building the design system</Text>
          <Caption color="secondary">Check the test page to see progress on component development</Caption>
        </div>
      </Section>
    </div>
  );
}