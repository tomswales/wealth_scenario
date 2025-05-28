import { Heading, Text, Caption, Section, Card, CardHeader, CardBody, CardFooter, Button, Input, Label, Grid } from '../ui';

export function CardShowcase() {
  return (
    <Section spacing="md">
      <Heading level={2}>Card Components</Heading>
      
      <div style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={3}>Card Component</Heading>
        <Text color="secondary" style={{ marginBottom: 'var(--space-6)' }}>
          The Card component provides a flexible container for grouping related content with consistent styling.
        </Text>
        
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <Heading level={4} style={{ marginBottom: 'var(--space-4)' }}>Card Variants</Heading>
          <div style={{ display: 'grid', gap: 'var(--space-6)', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            
            <Card variant="default">
              <Heading level={5} style={{ marginBottom: 'var(--space-2)' }}>Default Card</Heading>
              <Text size="sm" color="secondary" style={{ marginBottom: 'var(--space-4)' }}>Light shadow with subtle border</Text>
              <Text>This is a default card with standard shadow and border styling. Perfect for most use cases.</Text>
            </Card>

            <Card variant="elevated">
              <Heading level={5} style={{ marginBottom: 'var(--space-2)' }}>Elevated Card</Heading>
              <Text size="sm" color="secondary" style={{ marginBottom: 'var(--space-4)' }}>Strong shadow, no border</Text>
              <Text>This is an elevated card with a stronger shadow and no border. Great for highlighting important content.</Text>
            </Card>

            <Card variant="outlined">
              <Heading level={5} style={{ marginBottom: 'var(--space-2)' }}>Outlined Card</Heading>
              <Text size="sm" color="secondary" style={{ marginBottom: 'var(--space-4)' }}>Strong border, no shadow</Text>
              <Text>This is an outlined card with a prominent border and no shadow. Useful for clean, minimal designs.</Text>
            </Card>
          </div>
        </div>

        <div style={{ marginBottom: 'var(--space-6)' }}>
          <Heading level={4} style={{ marginBottom: 'var(--space-4)' }}>Card Padding Sizes</Heading>
          <div style={{ display: 'grid', gap: 'var(--space-4)', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            
            <Card padding="sm">
              <Heading level={6} style={{ marginBottom: 'var(--space-1)' }}>Small Padding</Heading>
              <Caption>16px padding</Caption>
            </Card>

            <Card padding="base">
              <Heading level={6} style={{ marginBottom: 'var(--space-1)' }}>Base Padding</Heading>
              <Caption>24px padding (default)</Caption>
            </Card>

            <Card padding="lg">
              <Heading level={6} style={{ marginBottom: 'var(--space-1)' }}>Large Padding</Heading>
              <Caption>32px padding</Caption>
            </Card>

            <Card padding="none">
              <div style={{ padding: 'var(--space-4)' }}>
                <Heading level={6} style={{ marginBottom: 'var(--space-1)' }}>No Padding</Heading>
                <Caption>Custom padding applied manually</Caption>
              </div>
            </Card>
          </div>
        </div>

        <div style={{ marginBottom: 'var(--space-6)' }}>
          <Heading level={4} style={{ marginBottom: 'var(--space-4)' }}>Structured Cards</Heading>
          <div style={{ display: 'grid', gap: 'var(--space-6)', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
            
            <Card padding="none">
              <CardHeader>
                <Heading level={5} style={{ marginBottom: 'var(--space-1)' }}>Card with Header</Heading>
                <Caption color="secondary">Header section with border</Caption>
              </CardHeader>
              <CardBody>
                <Text>This card demonstrates the header section which is visually separated from the body content with a border.</Text>
              </CardBody>
            </Card>

            <Card padding="none">
              <CardBody>
                <Heading level={5} style={{ marginBottom: 'var(--space-2)' }}>Card with Footer</Heading>
                <Text>This card has a footer section that's perfect for actions or additional information.</Text>
              </CardBody>
              <CardFooter>
                <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                  <Button size="sm" variant="primary">Primary Action</Button>
                  <Button size="sm" variant="secondary">Secondary</Button>
                </div>
              </CardFooter>
            </Card>

            <Card padding="none" variant="elevated">
              <CardHeader>
                <Heading level={5} style={{ marginBottom: 'var(--space-1)' }}>Complete Card</Heading>
                <Caption color="secondary">Header, body, and footer sections</Caption>
              </CardHeader>
              <CardBody>
                <Text style={{ marginBottom: 'var(--space-4)' }}>This card demonstrates all three sections working together: header, body, and footer.</Text>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  <div>
                    <Label htmlFor="card-input">Sample Input</Label>
                    <Input id="card-input" placeholder="Cards can contain any content..." />
                  </div>
                </div>
              </CardBody>
              <CardFooter>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Caption color="secondary">Footer with actions</Caption>
                  <Button size="sm">Save Changes</Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div>
          <Heading level={4} style={{ marginBottom: 'var(--space-4)' }}>Use Case Examples</Heading>
          <div style={{ display: 'grid', gap: 'var(--space-6)', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            
            <Card variant="outlined">
              <div style={{ textAlign: 'center' }}>
                <Heading level={3} style={{ marginBottom: 'var(--space-1)', color: 'var(--color-primary-600)' }}>$125,430</Heading>
                <Text size="sm" color="secondary" style={{ marginBottom: 'var(--space-2)' }}>Total Investment Value</Text>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)' }}>
                  <Caption color="success">↗ +12.5%</Caption>
                  <Caption color="secondary">this month</Caption>
                </div>
              </div>
            </Card>

            <Card>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'var(--color-primary-100)',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px'
                }}>
                  📊
                </div>
                <div style={{ flex: 1 }}>
                  <Heading level={5} style={{ marginBottom: 'var(--space-2)' }}>Wealth Tracking</Heading>
                  <Text size="sm" color="secondary">Monitor your investment portfolio and track wealth growth over time with detailed analytics.</Text>
                </div>
              </div>
            </Card>

            <Card variant="elevated" style={{ borderLeft: '4px solid var(--color-warning-500)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                <div style={{
                  color: 'var(--color-warning-600)',
                  fontSize: '20px',
                  marginTop: 'var(--space-1)'
                }}>
                  ⚠️
                </div>
                <div>
                  <Heading level={6} style={{ marginBottom: 'var(--space-1)' }}>Market Alert</Heading>
                  <Text size="sm">Your portfolio allocation may need rebalancing based on recent market changes.</Text>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <Caption>
          Usage: Card with variant (default, elevated, outlined), padding (none, sm, base, lg), and optional CardHeader, CardBody, CardFooter components
        </Caption>
        
        {/* Test Grid - should be visible */}
        <div style={{ marginTop: 'var(--space-6)', padding: 'var(--space-4)', backgroundColor: 'var(--color-error-50)', borderRadius: 'var(--radius-md)' }}>
          <Text style={{ marginBottom: 'var(--space-2)' }}>🧪 Grid Test (should see 3 cards in a row):</Text>
          <Grid columns={3} gap="base">
            <Card padding="sm">
              <Text>Grid Test 1</Text>
            </Card>
            <Card padding="sm">
              <Text>Grid Test 2</Text>
            </Card>
            <Card padding="sm">
              <Text>Grid Test 3</Text>
            </Card>
          </Grid>
        </div>
      </div>
    </Section>
  );
}