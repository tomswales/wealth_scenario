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