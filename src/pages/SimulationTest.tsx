import { Heading, Text } from '../components/ui';
import { BasicCalculatorShowcase } from '../components/simulation';

export function SimulationTest() {
  return (
    <div>
      <Heading level={1}>Simulation Engine Test Page</Heading>
      <Text>This page showcases all simulation engine components as they are built, organized by user story.</Text>
      
      <nav style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-8)' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/wealth_scenario/'); window.dispatchEvent(new PopStateEvent('popstate')); }}>
          ← Back to Home
        </a>
        {' | '}
        <a href="#" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/wealth_scenario/test'); window.dispatchEvent(new PopStateEvent('popstate')); }}>
          Design System Test
        </a>
      </nav>

      {/* Phase 2A: Foundation & Basic Calculations */}
      <section style={{ marginBottom: 'var(--space-12)' }}>
        <Heading level={2}>Phase 2A: Foundation & Basic Calculations</Heading>
        
        <BasicCalculatorShowcase />

        <div style={{ marginBottom: 'var(--space-6)' }}>
          <Heading level={3}>Annual Projections</Heading>
          <Text>Test: Monthly savings of $1,500 → shows $18,000 annual savings with proper formatting</Text>
          <div style={{ padding: 'var(--space-4)', backgroundColor: 'var(--color-neutral-100)', borderRadius: 'var(--radius-md)', marginTop: 'var(--space-2)' }}>
            <Text style={{ fontStyle: 'italic' }}>🚧 Component not yet implemented</Text>
          </div>
        </div>

        <div style={{ marginBottom: 'var(--space-6)' }}>
          <Heading level={3}>Investment Growth Preview</Heading>
          <Text>Test: $1,500/month at 7% return shows 1yr: ~$18,700, 5yr: ~$108,000, 10yr: ~$248,000</Text>
          <div style={{ padding: 'var(--space-4)', backgroundColor: 'var(--color-neutral-100)', borderRadius: 'var(--radius-md)', marginTop: 'var(--space-2)' }}>
            <Text style={{ fontStyle: 'italic' }}>🚧 Component not yet implemented</Text>
          </div>
        </div>
      </section>

      {/* Phase 2B: Simulation Library Integration */}
      <section style={{ marginBottom: 'var(--space-12)' }}>
        <Heading level={2}>Phase 2B: Simulation Library Integration</Heading>
        
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <Heading level={3}>System Dynamics Model Setup</Heading>
          <Text>Test: Same calculator results but powered by System Dynamics model</Text>
          <div style={{ padding: 'var(--space-4)', backgroundColor: 'var(--color-neutral-100)', borderRadius: 'var(--radius-md)', marginTop: 'var(--space-2)' }}>
            <Text style={{ fontStyle: 'italic' }}>🚧 Component not yet implemented</Text>
          </div>
        </div>

        <div style={{ marginBottom: 'var(--space-6)' }}>
          <Heading level={3}>Time-Series Simulation</Heading>
          <Text>Test: 25-year timeline shows table with 25 rows (Year, Principal, Growth, Total)</Text>
          <div style={{ padding: 'var(--space-4)', backgroundColor: 'var(--color-neutral-100)', borderRadius: 'var(--radius-md)', marginTop: 'var(--space-2)' }}>
            <Text style={{ fontStyle: 'italic' }}>🚧 Component not yet implemented</Text>
          </div>
        </div>

        <div style={{ marginBottom: 'var(--space-6)' }}>
          <Heading level={3}>Interactive Parameter Updates</Heading>
          <Text>Test: Salary slider $5,000→$6,000 immediately updates all projections</Text>
          <div style={{ padding: 'var(--space-4)', backgroundColor: 'var(--color-neutral-100)', borderRadius: 'var(--radius-md)', marginTop: 'var(--space-2)' }}>
            <Text style={{ fontStyle: 'italic' }}>🚧 Component not yet implemented</Text>
          </div>
        </div>
      </section>

      {/* Phase 2C: Advanced Financial Modeling */}
      <section style={{ marginBottom: 'var(--space-12)' }}>
        <Heading level={2}>Phase 2C: Advanced Financial Modeling</Heading>
        
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <Heading level={3}>Tax Considerations</Heading>
          <Text>Test: 25% tax rate on 7% returns shows effective ~5.25% growth rate</Text>
          <div style={{ padding: 'var(--space-4)', backgroundColor: 'var(--color-neutral-100)', borderRadius: 'var(--radius-md)', marginTop: 'var(--space-2)' }}>
            <Text style={{ fontStyle: 'italic' }}>🚧 Component not yet implemented</Text>
          </div>
        </div>

        <div style={{ marginBottom: 'var(--space-6)' }}>
          <Heading level={3}>Inflation Adjustment</Heading>
          <Text>Test: $500k in 20 years at 3% inflation shows ~$302k in today's purchasing power</Text>
          <div style={{ padding: 'var(--space-4)', backgroundColor: 'var(--color-neutral-100)', borderRadius: 'var(--radius-md)', marginTop: 'var(--space-2)' }}>
            <Text style={{ fontStyle: 'italic' }}>🚧 Component not yet implemented</Text>
          </div>
        </div>

        <div style={{ marginBottom: 'var(--space-6)' }}>
          <Heading level={3}>Scenario Comparison</Heading>
          <Text>Test: Side-by-side comparison of "Safe 5%" vs "Risky 10%" scenarios</Text>
          <div style={{ padding: 'var(--space-4)', backgroundColor: 'var(--color-neutral-100)', borderRadius: 'var(--radius-md)', marginTop: 'var(--space-2)' }}>
            <Text style={{ fontStyle: 'italic' }}>🚧 Component not yet implemented</Text>
          </div>
        </div>
      </section>

      {/* Phase 2D: Data Validation & Edge Cases */}
      <section style={{ marginBottom: 'var(--space-12)' }}>
        <Heading level={2}>Phase 2D: Data Validation & Edge Cases</Heading>
        
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <Heading level={3}>Input Validation & Error Handling</Heading>
          <Text>Test: Negative salary shows error, 50% return shows warning</Text>
          <div style={{ padding: 'var(--space-4)', backgroundColor: 'var(--color-neutral-100)', borderRadius: 'var(--radius-md)', marginTop: 'var(--space-2)' }}>
            <Text style={{ fontStyle: 'italic' }}>🚧 Component not yet implemented</Text>
          </div>
        </div>

        <div style={{ marginBottom: 'var(--space-6)' }}>
          <Heading level={3}>Performance Optimization</Heading>
          <Text>Test: 30-year simulation completes under 100ms, no UI lag on rapid slider changes</Text>
          <div style={{ padding: 'var(--space-4)', backgroundColor: 'var(--color-neutral-100)', borderRadius: 'var(--radius-md)', marginTop: 'var(--space-2)' }}>
            <Text style={{ fontStyle: 'italic' }}>🚧 Component not yet implemented</Text>
          </div>
        </div>
      </section>
    </div>
  );
}