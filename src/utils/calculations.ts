// Basic financial calculation utilities
// Phase 2A: Foundation & Basic Calculations

/**
 * Calculate net monthly savings
 * US-SIM-01: Basic Financial Calculator
 */
export function calculateNetMonthlySavings(monthlySalary: number, monthlyExpenses: number): number {
  return monthlySalary - monthlyExpenses;
}

/**
 * Convert monthly savings to annual savings
 * US-SIM-02: Annual Projections
 */
export function calculateAnnualSavings(monthlySavings: number): number {
  return monthlySavings * 12;
}

/**
 * Calculate compound interest for investment growth preview
 * US-SIM-03: Investment Growth Preview
 */
export function calculateCompoundGrowth(
  monthlyContribution: number,
  annualReturnRate: number,
  years: number
): number {
  const monthlyRate = annualReturnRate / 12;
  const totalMonths = years * 12;
  
  if (monthlyRate === 0) {
    return monthlyContribution * totalMonths;
  }
  
  // Future value of annuity formula
  const futureValue = monthlyContribution * 
    (((1 + monthlyRate) ** totalMonths - 1) / monthlyRate);
  
  return futureValue;
}

/**
 * Calculate simple investment growth for multiple time periods
 * US-SIM-03: Investment Growth Preview
 */
export interface InvestmentGrowthResult {
  year: number;
  totalValue: number;
  principalContributed: number;
  investmentGrowth: number;
}

export function calculateInvestmentGrowthPreview(
  monthlySavings: number,
  annualReturnRate: number,
  timeHorizons: number[] = [1, 5, 10]
): InvestmentGrowthResult[] {
  return timeHorizons.map(years => {
    const totalValue = calculateCompoundGrowth(monthlySavings, annualReturnRate, years);
    const principalContributed = monthlySavings * 12 * years;
    const investmentGrowth = totalValue - principalContributed;
    
    return {
      year: years,
      totalValue,
      principalContributed,
      investmentGrowth
    };
  });
}

/**
 * Format currency values with proper commas and dollar sign
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format percentage values
 */
export function formatPercentage(decimal: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(decimal);
}