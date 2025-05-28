import { Heading, Text, Caption, Section, Grid, GridItem, Card, Button } from '../ui';

export function GridShowcase() {
  return (
    <Section spacing="md">
      <Heading level={2}>Grid Components</Heading>
      
      <div style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={3}>Grid System</Heading>
        <Text color="secondary" style={{ marginBottom: 'var(--space-6)' }}>
          The Grid component provides a flexible CSS Grid-based layout system for responsive designs.
        </Text>
        
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <Heading level={4} style={{ marginBottom: 'var(--space-4)' }}>Auto-Fit Grid (Default)</Heading>
          <Text size="sm" color="secondary" style={{ marginBottom: 'var(--space-4)' }}>
            Automatically fits as many columns as possible with a minimum width of 250px
          </Text>
          
          <Grid gap="base" minWidth="200px">
            <Card padding="sm">
              <Heading level={6} style={{ marginBottom: 'var(--space-1)' }}>Card 1</Heading>
              <Caption>Auto-fit grid item</Caption>
            </Card>
            <Card padding="sm">
              <Heading level={6} style={{ marginBottom: 'var(--space-1)' }}>Card 2</Heading>
              <Caption>Responsive width</Caption>
            </Card>
            <Card padding="sm">
              <Heading level={6} style={{ marginBottom: 'var(--space-1)' }}>Card 3</Heading>
              <Caption>Adapts to screen size</Caption>
            </Card>
            <Card padding="sm">
              <Heading level={6} style={{ marginBottom: 'var(--space-1)' }}>Card 4</Heading>
              <Caption>Minimum 200px width</Caption>
            </Card>
          </Grid>
        </div>

        <div style={{ marginBottom: 'var(--space-6)' }}>
          <Heading level={4} style={{ marginBottom: 'var(--space-4)' }}>Fixed Column Grid</Heading>
          <Text size="sm" color="secondary" style={{ marginBottom: 'var(--space-4)' }}>
            Grid with exactly 3 columns, each taking equal space
          </Text>
          
          <Grid columns={3} gap="lg">
            <Card padding="sm" variant="outlined">
              <div style={{ textAlign: 'center' }}>
                <Heading level={5} style={{ marginBottom: 'var(--space-1)', color: 'var(--color-primary-600)' }}>$15,420</Heading>
                <Caption>Stocks</Caption>
              </div>
            </Card>
            <Card padding="sm" variant="outlined">
              <div style={{ textAlign: 'center' }}>
                <Heading level={5} style={{ marginBottom: 'var(--space-1)', color: 'var(--color-success-600)' }}>$8,750</Heading>
                <Caption>Bonds</Caption>
              </div>
            </Card>
            <Card padding="sm" variant="outlined">
              <div style={{ textAlign: 'center' }}>
                <Heading level={5} style={{ marginBottom: 'var(--space-1)', color: 'var(--color-warning-600)' }}>$2,180</Heading>
                <Caption>Cash</Caption>
              </div>
            </Card>
          </Grid>
        </div>

        <div style={{ marginBottom: 'var(--space-6)' }}>
          <Heading level={4} style={{ marginBottom: 'var(--space-4)' }}>Grid with Different Gap Sizes</Heading>
          
          <div style={{ marginBottom: 'var(--space-4)' }}>
            <Caption style={{ marginBottom: 'var(--space-2)' }}>Small gap (8px)</Caption>
            <Grid columns={4} gap="sm">
              {[1, 2, 3, 4].map(i => (
                <div key={i} style={{
                  backgroundColor: 'var(--color-primary-100)',
                  padding: 'var(--space-3)',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'center'
                }}>
                  <Caption>Item {i}</Caption>
                </div>
              ))}
            </Grid>
          </div>

          <div style={{ marginBottom: 'var(--space-4)' }}>
            <Caption style={{ marginBottom: 'var(--space-2)' }}>Base gap (16px) - Default</Caption>
            <Grid columns={4} gap="base">
              {[1, 2, 3, 4].map(i => (
                <div key={i} style={{
                  backgroundColor: 'var(--color-success-100)',
                  padding: 'var(--space-3)',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'center'
                }}>
                  <Caption>Item {i}</Caption>
                </div>
              ))}
            </Grid>
          </div>

          <div>
            <Caption style={{ marginBottom: 'var(--space-2)' }}>Large gap (24px)</Caption>
            <Grid columns={4} gap="lg">
              {[1, 2, 3, 4].map(i => (
                <div key={i} style={{
                  backgroundColor: 'var(--color-warning-100)',
                  padding: 'var(--space-3)',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'center'
                }}>
                  <Caption>Item {i}</Caption>
                </div>
              ))}
            </Grid>
          </div>
        </div>

        <div style={{ marginBottom: 'var(--space-6)' }}>
          <Heading level={4} style={{ marginBottom: 'var(--space-4)' }}>Grid Items with Spanning</Heading>
          <Text size="sm" color="secondary" style={{ marginBottom: 'var(--space-4)' }}>
            GridItem component can span multiple columns or take full width
          </Text>
          
          <Grid columns={4} gap="base">
            <GridItem span="full">
              <Card padding="sm" variant="elevated">
                <Heading level={6} style={{ marginBottom: 'var(--space-1)' }}>Full Width Header</Heading>
                <Caption>This item spans all columns</Caption>
              </Card>
            </GridItem>
            
            <GridItem span={2}>
              <Card padding="sm">
                <Heading level={6} style={{ marginBottom: 'var(--space-1)' }}>Spans 2 Columns</Heading>
                <Caption>Takes up half the width</Caption>
              </Card>
            </GridItem>
            
            <GridItem>
              <Card padding="sm">
                <Heading level={6} style={{ marginBottom: 'var(--space-1)' }}>Single</Heading>
                <Caption>One column</Caption>
              </Card>
            </GridItem>
            
            <GridItem>
              <Card padding="sm">
                <Heading level={6} style={{ marginBottom: 'var(--space-1)' }}>Single</Heading>
                <Caption>One column</Caption>
              </Card>
            </GridItem>
          </Grid>
        </div>

        <div style={{ marginBottom: 'var(--space-6)' }}>
          <Heading level={4} style={{ marginBottom: 'var(--space-4)' }}>Real-World Example: Dashboard Layout</Heading>
          <Text size="sm" color="secondary" style={{ marginBottom: 'var(--space-4)' }}>
            A typical wealth management dashboard using the Grid system
          </Text>
          
          <Grid gap="lg" minWidth="300px">
            <Card padding="none" variant="elevated">
              <div style={{ padding: 'var(--space-6)' }}>
                <Heading level={5} style={{ marginBottom: 'var(--space-4)' }}>Portfolio Overview</Heading>
                <div style={{ textAlign: 'center', marginBottom: 'var(--space-4)' }}>
                  <Heading level={2} style={{ marginBottom: 'var(--space-1)', color: 'var(--color-primary-600)' }}>$156,750</Heading>
                  <Caption color="secondary">Total Portfolio Value</Caption>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-4)' }}>
                  <div>
                    <Caption color="success">+$12,430</Caption>
                    <Caption color="secondary"> this month</Caption>
                  </div>
                  <Caption color="success">+8.6%</Caption>
                </div>
                <Button size="sm" style={{ width: '100%' }}>View Details</Button>
              </div>
            </Card>

            <Card padding="none">
              <div style={{ padding: 'var(--space-6)' }}>
                <Heading level={5} style={{ marginBottom: 'var(--space-4)' }}>Monthly Savings</Heading>
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
                    <Caption>Goal: $2,500</Caption>
                    <Caption>$2,180</Caption>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '8px',
                    backgroundColor: 'var(--color-neutral-200)',
                    borderRadius: 'var(--radius-full)',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: '87%',
                      height: '100%',
                      backgroundColor: 'var(--color-success-500)',
                      borderRadius: 'var(--radius-full)'
                    }} />
                  </div>
                  <Caption color="secondary" style={{ marginTop: 'var(--space-1)' }}>87% of monthly goal</Caption>
                </div>
                <Button size="sm" variant="secondary" style={{ width: '100%' }}>Adjust Goal</Button>
              </div>
            </Card>

            <Card padding="none">
              <div style={{ padding: 'var(--space-6)' }}>
                <Heading level={5} style={{ marginBottom: 'var(--space-4)' }}>Recent Activity</Heading>
                <div style={{ marginBottom: 'var(--space-3)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-1)' }}>
                    <Text size="sm">VTSAX Purchase</Text>
                    <Text size="sm" color="primary">$500</Text>
                  </div>
                  <Caption color="secondary">2 days ago</Caption>
                </div>
                <div style={{ marginBottom: 'var(--space-3)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-1)' }}>
                    <Text size="sm">Dividend Received</Text>
                    <Text size="sm" color="success">+$47.20</Text>
                  </div>
                  <Caption color="secondary">5 days ago</Caption>
                </div>
                <Button size="sm" variant="ghost" style={{ width: '100%' }}>View All Activity</Button>
              </div>
            </Card>
          </Grid>
        </div>

        <Caption>
          Usage: Grid with columns (number, auto-fit, auto-fill), gap (none, xs, sm, base, lg, xl), minWidth, and GridItem with span props
        </Caption>
      </div>
    </Section>
  );
}