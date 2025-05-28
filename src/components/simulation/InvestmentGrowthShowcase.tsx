import { useState } from 'preact/hooks';
import { Card, Heading, Text, Input, Label } from '../ui';
import { 
  calculateNetMonthlySavings,
  calculateInvestmentGrowthPreview,
  formatCurrency,
  formatPercentage,
  type InvestmentGrowthResult
} from '../../utils/calculations';

/**
 * Investment Growth Preview
 * As a user, I want to see a simple preview of my investment growth so that I understand compound interest basics
 */
export function InvestmentGrowthShowcase() {
  const [monthlySalary, setMonthlySalary] = useState(5000);
  const [monthlyExpenses, setMonthlyExpenses] = useState(3500);
  const [annualReturnRate, setAnnualReturnRate] = useState(0.07); // 7%

  const monthlySavings = calculateNetMonthlySavings(monthlySalary, monthlyExpenses);
  const growthResults = calculateInvestmentGrowthPreview(monthlySavings, annualReturnRate, [1, 5, 10]);

  return (
    <Card style={{ marginBottom: 'var(--space-8)' }}>
      <Heading level={3}>Investment Growth Preview</Heading>
      <Text>Simple preview of investment growth using compound interest</Text>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--space-4)', marginTop: 'var(--space-4)' }}>
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
        <div>
          <Label>Expected Annual Return</Label>
          <Input 
            type="number" 
            value={annualReturnRate * 100}
            step="0.1"
            onChange={(e) => setAnnualReturnRate(Number((e.target as HTMLInputElement).value) / 100)}
          />
          <Text style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-neutral-500)', marginTop: 'var(--space-1)' }}>
            %
          </Text>
        </div>
      </div>

      <div style={{ 
        marginTop: 'var(--space-6)', 
        padding: 'var(--space-4)', 
        backgroundColor: 'var(--color-neutral-50)',
        borderRadius: 'var(--radius-md)',
        textAlign: 'center'
      }}>
        <Text style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-neutral-600)' }}>
          Monthly Investment Available
        </Text>
        <Text style={{ 
          fontSize: 'var(--font-size-lg)', 
          fontWeight: 'var(--font-weight-bold)', 
          marginTop: 'var(--space-1)',
          color: monthlySavings < 0 ? 'var(--color-error-700)' : 'var(--color-neutral-900)'
        }}>
          {formatCurrency(monthlySavings)} at {formatPercentage(annualReturnRate)}
        </Text>
      </div>

      <div style={{ marginTop: 'var(--space-6)' }}>
        <Text style={{ fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--space-4)' }}>
          Growth Projections
        </Text>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--space-4)' }}>
          {growthResults.map((result: InvestmentGrowthResult) => (
            <div 
              key={result.year}
              style={{ 
                padding: 'var(--space-4)', 
                backgroundColor: 'var(--color-primary-50)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-primary-200)'
              }}
            >
              <Text style={{ 
                fontSize: 'var(--font-size-sm)', 
                color: 'var(--color-primary-600)',
                fontWeight: 'var(--font-weight-semibold)'
              }}>
                {result.year} Year{result.year !== 1 ? 's' : ''}
              </Text>
              
              <Text style={{ 
                fontSize: 'var(--font-size-lg)', 
                fontWeight: 'var(--font-weight-bold)', 
                color: 'var(--color-primary-700)',
                marginTop: 'var(--space-2)'
              }}>
                {formatCurrency(result.totalValue)}
              </Text>
              
              <div style={{ marginTop: 'var(--space-3)', fontSize: 'var(--font-size-xs)', color: 'var(--color-neutral-600)' }}>
                <div>Principal: {formatCurrency(result.principalContributed)}</div>
                <div>Growth: {formatCurrency(result.investmentGrowth)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 'var(--space-4)', fontSize: 'var(--font-size-sm)', color: 'var(--color-neutral-600)' }}>
        <strong>Test Case:</strong> $1,500/month at 7% return → 1yr: ~$18,700, 5yr: ~$108,000, 10yr: ~$248,000
      </div>
    </Card>
  );
}