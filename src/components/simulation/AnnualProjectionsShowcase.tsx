import { useState } from 'preact/hooks';
import { Card, Heading, Text, Input, Label } from '../ui';
import { 
  calculateNetMonthlySavings, 
  calculateAnnualSavings, 
  formatCurrency 
} from '../../utils/calculations';

/**
 * Annual Projections
 * As a user, I want to see my total annual savings potential so that I can understand my yearly capacity
 */
export function AnnualProjectionsShowcase() {
  const [monthlySalary, setMonthlySalary] = useState(5000);
  const [monthlyExpenses, setMonthlyExpenses] = useState(3500);

  const netMonthlySavings = calculateNetMonthlySavings(monthlySalary, monthlyExpenses);
  const annualSavings = calculateAnnualSavings(netMonthlySavings);

  return (
    <Card style={{ marginBottom: 'var(--space-8)' }}>
      <Heading level={3}>Annual Projections</Heading>
      <Text>Convert monthly savings to annual with proper currency formatting</Text>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)', marginTop: 'var(--space-4)' }}>
        <div>
          <Label>Monthly Salary</Label>
          <Input 
            type="number" 
            value={monthlySalary} 
            onChange={(e) => setMonthlySalary(Number((e.target as HTMLInputElement).value))}
          />
        </div>
        <div>
          <Label>Monthly Expenses</Label>
          <Input 
            type="number" 
            value={monthlyExpenses} 
            onChange={(e) => setMonthlyExpenses(Number((e.target as HTMLInputElement).value))}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)', marginTop: 'var(--space-6)' }}>
        <div style={{ 
          padding: 'var(--space-4)', 
          backgroundColor: 'var(--color-neutral-50)',
          borderRadius: 'var(--radius-md)',
          textAlign: 'center'
        }}>
          <Text style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-neutral-600)' }}>Monthly Savings</Text>
          <Text style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', marginTop: 'var(--space-1)' }}>
            {formatCurrency(netMonthlySavings)}
          </Text>
        </div>
        <div style={{ 
          padding: 'var(--space-4)', 
          backgroundColor: 'var(--color-primary-50)',
          borderRadius: 'var(--radius-md)',
          textAlign: 'center'
        }}>
          <Text style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-primary-600)' }}>Annual Savings</Text>
          <Text style={{ 
            fontSize: 'var(--font-size-xl)', 
            fontWeight: 'var(--font-weight-bold)', 
            color: 'var(--color-primary-700)',
            marginTop: 'var(--space-1)'
          }}>
            {formatCurrency(annualSavings)}
          </Text>
        </div>
      </div>

      <div style={{ marginTop: 'var(--space-4)', fontSize: 'var(--font-size-sm)', color: 'var(--color-neutral-600)' }}>
        <strong>Test Case:</strong> $1,500 monthly → Expected: $18,000 annual (formatted as "$18,000")
      </div>
    </Card>
  );
}