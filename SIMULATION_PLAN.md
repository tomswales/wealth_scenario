# Simulation Engine Development Plan
## Incremental User Stories with Testable Outcomes

### **Epic 2: Core Simulation Engine**
*Build the financial modeling engine using the simulation library with System Dynamics approach*

---

## **Phase 2A: Foundation & Basic Calculations**

### **US-SIM-01: Basic Financial Calculator**
**As a user, I want to see my net monthly savings so that I understand my available investment capacity**

**Acceptance Criteria:**
- Display a simple form with Monthly Salary and Monthly Expenses inputs
- Calculate and display Net Monthly Savings (Salary - Expenses)
- Show calculation in real-time as user types
- Handle negative values (spending more than earning) with appropriate styling

**Testable Outcome:** 
- User can input salary ($5,000) and expenses ($3,500) and immediately see Net Monthly Savings ($1,500)
- Negative values show in red with warning styling

**Implementation:**
```tsx
// Create src/utils/calculations.ts with basic math functions
// Create simple FinancialCalculator component with two inputs and result display
// Test on main Home page
```

---

### **US-SIM-02: Annual Projections**
**As a user, I want to see my total annual savings potential so that I can understand my yearly capacity**

**Acceptance Criteria:**
- Convert monthly savings to annual savings (Monthly × 12)
- Display both monthly and annual figures
- Format currency properly with commas
- Handle edge cases (zero, negative amounts)

**Testable Outcome:**
- Monthly savings of $1,500 correctly shows $18,000 annual savings
- Currency formatting displays as "$18,000" not "18000"

**Implementation:**
```tsx
// Extend calculations.ts with annual conversion functions
// Add currency formatting utility
// Update FinancialCalculator to show both timeframes
```

---

### **US-SIM-03: Investment Growth Preview**
**As a user, I want to see a simple preview of my investment growth so that I understand compound interest basics**

**Acceptance Criteria:**
- Add Expected Annual Return input (percentage)
- Calculate simple compound interest for 1 year, 5 years, 10 years
- Display results in a clear table format
- Use realistic default values (7% return rate)

**Testable Outcome:**
- $1,500/month at 7% return shows correct values:
  - 1 year: ~$18,700
  - 5 years: ~$108,000  
  - 10 years: ~$248,000

**Implementation:**
```tsx
// Add compound interest calculation functions
// Create simple results table component
// Add annual return rate input to form
```

---

## **Phase 2B: Simulation Library Integration**

### **US-SIM-04: System Dynamics Model Setup**
**As a developer, I want to implement the simulation library so that I can create sophisticated financial models**

**Acceptance Criteria:**
- Install and configure simulation library
- Create basic wealth accumulation model with Stocks and Flows
- Replace manual calculations with simulation model
- Maintain same UI but powered by simulation engine

**Testable Outcome:**
- Same calculator interface produces identical results
- But now powered by System Dynamics model instead of manual math
- Console logging shows simulation model structure

**Implementation:**
```tsx
// Create src/models/wealth.ts using simulation library
// Define Stocks: TotalWealth, AnnualSalary
// Define Flows: MonthlySavings, InvestmentGrowth
// Replace manual calculations with model.simulate()
```

---

### **US-SIM-05: Time-Series Simulation**
**As a user, I want to see my wealth growth over time so that I can visualize my financial journey**

**Acceptance Criteria:**
- Generate wealth accumulation data for each year (up to 30 years)
- Display year-by-year breakdown in a data table
- Show Principal vs Growth separately
- Allow user to adjust time horizon

**Testable Outcome:**
- User can set 25-year timeline and see table with 25 rows
- Each year shows: Year, Principal Added, Investment Growth, Total Wealth
- Values are mathematically correct and accumulate properly

**Implementation:**
```tsx
// Enhance wealth model to generate time-series data
// Create WealthTable component to display year-by-year results
// Add time horizon input to form
// Run simulation for specified number of years
```

---

### **US-SIM-06: Interactive Parameter Updates**
**As a user, I want my projections to update in real-time as I adjust parameters so that I can explore different scenarios**

**Acceptance Criteria:**
- Use Range sliders for all financial inputs
- Projections update immediately when any slider moves
- Smooth performance even with complex calculations
- Visual feedback during updates

**Testable Outcome:**
- Moving salary slider from $5,000 to $6,000 immediately updates all projections
- No lag or performance issues during rapid slider adjustments
- Loading indicators show during calculations if needed

**Implementation:**
```tsx
// Replace text inputs with Range components
// Implement debounced updates to avoid excessive calculations
// Add loading states for better UX
// Connect Range components to simulation model
```

---

## **Phase 2C: Advanced Financial Modeling**

### **US-SIM-07: Tax Considerations**
**As a user, I want to account for investment taxes so that I get realistic wealth projections**

**Acceptance Criteria:**
- Add Tax Rate on Investment Gains input (percentage)
- Calculate taxes on investment returns (not principal)
- Show after-tax wealth accumulation
- Display tax amount paid over time

**Testable Outcome:**
- 25% tax rate on 7% returns shows effective ~5.25% growth rate
- Tax impact is clearly visible in projections
- Separate display of pre-tax vs after-tax wealth

**Implementation:**
```tsx
// Add tax calculation flows to wealth model
// Create TaxCalculation component
// Add tax rate input to parameter form
// Display tax impact in results
```

---

### **US-SIM-08: Inflation Adjustment**
**As a user, I want to see inflation-adjusted projections so that I understand real purchasing power**

**Acceptance Criteria:**
- Add Inflation Rate input (default 3%)
- Calculate both nominal and real (inflation-adjusted) wealth
- Display purchasing power in today's dollars
- Show the difference between nominal and real values

**Testable Outcome:**
- $500,000 in 20 years at 3% inflation shows ~$302,000 in today's purchasing power
- Clear labeling of "Nominal" vs "Real" values
- Inflation impact is visually apparent

**Implementation:**
```tsx
// Add inflation calculations to model
// Create InflationAdjustment component
// Display both nominal and real projections
// Add inflation rate parameter
```

---

### **US-SIM-09: Scenario Comparison**
**As a user, I want to compare different financial scenarios so that I can make informed decisions**

**Acceptance Criteria:**
- Save up to 3 different parameter sets as "scenarios"
- Display scenarios side-by-side in comparison table
- Name scenarios (e.g., "Conservative", "Aggressive", "Current Plan")
- Highlight key differences between scenarios

**Testable Outcome:**
- User can create "Safe 5%" and "Risky 10%" scenarios
- Side-by-side comparison shows dramatic difference in outcomes
- Easy to switch between scenarios and see impacts

**Implementation:**
```tsx
// Create ScenarioManager component
// Add scenario saving/loading functionality
// Create ScenarioComparison table component
// Implement scenario storage (in-memory for now)
```

---

## **Phase 2D: Data Validation & Edge Cases**

### **US-SIM-10: Input Validation & Error Handling**
**As a user, I want clear feedback when I enter invalid data so that I can correct mistakes**

**Acceptance Criteria:**
- Validate all numerical inputs (positive numbers, reasonable ranges)
- Show error messages for invalid inputs
- Prevent calculation with invalid data
- Suggest reasonable input ranges

**Testable Outcome:**
- Entering negative salary shows "Salary must be positive" error
- Entering 50% return rate shows "Return rate seems unrealistic (typical range: 1-15%)"
- Invalid inputs prevent simulation from running

**Implementation:**
```tsx
// Create validation utility functions
// Add error messaging to form components
// Implement input sanitization
// Add helpful validation messages
```

---

### **US-SIM-11: Performance Optimization**
**As a developer, I want optimal performance for complex simulations so that the app remains responsive**

**Acceptance Criteria:**
- Simulations complete within 100ms for 30-year projections
- Debounced input updates to prevent excessive calculations
- Loading states for longer operations
- Efficient re-rendering of results

**Testable Outcome:**
- Rapid slider adjustments don't cause UI lag
- 30-year simulation with monthly granularity completes quickly
- Memory usage remains stable during extended use

**Implementation:**
```tsx
// Optimize simulation model calculations
// Implement proper React memoization
// Add performance monitoring
// Profile and optimize bottlenecks
```

---

## **🎯 Development Milestones**

### **Milestone 1: Basic Calculator (US-SIM-01 to US-SIM-03)**
- **Timeline:** 2-3 days
- **Deliverable:** Working financial calculator on home page
- **Demo:** User can calculate savings potential and see growth projections

### **Milestone 2: Simulation Engine (US-SIM-04 to US-SIM-06)**
- **Timeline:** 3-4 days  
- **Deliverable:** Full simulation library integration with interactive controls
- **Demo:** Real-time wealth projections with range sliders

### **Milestone 3: Advanced Features (US-SIM-07 to US-SIM-09)**
- **Timeline:** 3-4 days
- **Deliverable:** Tax calculations, inflation adjustment, scenario comparison
- **Demo:** Sophisticated financial planning tool with multiple scenarios

### **Milestone 4: Polish & Performance (US-SIM-10 to US-SIM-11)**
- **Timeline:** 2-3 days
- **Deliverable:** Production-ready simulation engine
- **Demo:** Fast, validated, error-free financial modeling

---

## **🧪 Testing Strategy**

Each user story includes:
1. **Unit Tests:** Mathematical calculations accuracy
2. **Integration Tests:** Simulation model behavior  
3. **Visual Tests:** UI updates correctly with new data
4. **Performance Tests:** Simulation speed and memory usage
5. **User Tests:** Manual testing of complete workflows

## **📊 Success Metrics**

- **Accuracy:** Financial calculations match external calculators within 1%
- **Performance:** All simulations complete under 100ms
- **Usability:** Users can create meaningful projections within 2 minutes
- **Reliability:** Zero crashes or calculation errors during testing

This incremental approach ensures each story delivers immediate, testable value while building toward a sophisticated financial simulation engine.
