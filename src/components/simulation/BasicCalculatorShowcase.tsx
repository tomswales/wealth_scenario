import { useState } from 'preact/hooks';
import { Card, Heading, Text, Input, Label } from '../ui';
import { calculateNetMonthlySavings, formatCurrency } from '../../utils/calculations';

/**
 * US-SIM-01: Basic Financial Calculator
 * As a user, I want to see my net monthly savings so that I understand my available investment capacity
 */
export function BasicCalculatorShowcase() {
  const [monthlySalary, setMonthlySalary] = useState(5000);
  const [monthlyExpenses, setMonthlyExpenses] = useState(3500);

  const netMonthlySavings = calculateNetMonthlySavings(monthlySalary, monthlyExpenses);
  const isNegative = netMonthlySavings < 0;

  return (
    <Card style={{ marginBottom: 'var(--space-8)' }}>
      <Heading level={3}>Basic Financial Calculator</Heading>
      <Text>Display net monthly savings with real-time calculation</Text>
      
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

      <div style={{ 
        marginTop: 'var(--space-6)', 
        padding: 'var(--space-4)', 
        backgroundColor: isNegative ? 'var(--color-error-50)' : 'var(--color-success-50)',
        borderRadius: 'var(--radius-md)',
        border: `1px solid ${isNegative ? 'var(--color-error-200)' : 'var(--color-success-200)'}`
      }}>
        <Text style={{ 
          fontSize: 'var(--font-size-lg)', 
          fontWeight: 'var(--font-weight-semibold)',
          color: isNegative ? 'var(--color-error-700)' : 'var(--color-success-700)'
        }}>
          Net Monthly Savings: {formatCurrency(netMonthlySavings)}
        </Text>
        {isNegative && (
          <Text style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-error-600)', marginTop: 'var(--space-2)' }}>
            ⚠️ You're spending more than you earn
          </Text>
        )}
      </div>

      <div style={{ marginTop: 'var(--space-4)', fontSize: 'var(--font-size-sm)', color: 'var(--color-neutral-600)' }}>
        <strong>Test Case:</strong> Salary $5,000, Expenses $3,500 → Expected: $1,500 net savings
      </div>
    </Card>
  );
}