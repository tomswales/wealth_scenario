import { Heading, Text } from '../components/ui';
import { TestError } from '../components/ui/TestError';
import { 
  LayoutShowcase, 
  TypographyShowcase, 
  ButtonShowcase, 
  FormShowcase, 
  CardShowcase, 
  GridShowcase,
  DesignTokensShowcase, 
  StatusShowcase 
} from '../components/showcases';

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

      <TestError />
      <LayoutShowcase />
      <TypographyShowcase />
      <ButtonShowcase />
      <FormShowcase />
      <CardShowcase />
      <GridShowcase />
      <DesignTokensShowcase />
      <StatusShowcase />
    </div>
  );
}