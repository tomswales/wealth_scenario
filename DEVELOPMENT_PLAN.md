# Wealth Scenario App - Development Plan

## Project Overview

A client-side wealth simulation application built with Preact, using the simulation library for financial modeling and Chart.js for data visualization. The app allows users to input financial parameters and visualize wealth accumulation and income streams over time.

## Tech Stack
- **Preact** (^10.26.5) - UI framework
- **Simulation** (^6.0.0) - Financial modeling engine
- **Chart.js** (^4.4.9) - Data visualization
- **TypeScript** (~5.8.3) - Type safety
- **Vite** (^6.3.5) - Build tool
- **Custom CSS** - Design system (no external styling libraries)

## Architecture Overview

### Core Components Structure
```
src/
├── components/
│   ├── ui/           # Design system components
│   ├── forms/        # Input parameter forms
│   ├── charts/       # Chart components
│   └── layout/       # Layout components
├── pages/
│   ├── Home.tsx      # Main simulation page
│   └── Design.tsx    # Design system showcase
├── models/
│   └── wealth.ts     # Wealth simulation model using simulation library
├── utils/
│   ├── calculations.ts
│   └── formatters.ts
├── styles/
│   ├── design-system.css  # Core design tokens
│   ├── components.css     # Component styles
│   └── layout.css         # Layout styles
└── types/
    └── wealth.ts     # TypeScript type definitions
```

## Design System Requirements

### Core Design Tokens
- **Colors**: Primary, secondary, neutral palette, success/warning/error states
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: Consistent spacing scale (4px, 8px, 16px, 24px, 32px, etc.)
- **Shadows**: Elevation system for cards and modals
- **Border radius**: Consistent corner radius system
- **Breakpoints**: Responsive design breakpoints

### Reusable Components
1. **Form Components**
   - Input (text, number, currency)
   - Label
   - Select dropdown
   - Range slider
   - Button (primary, secondary, ghost)
   - Form group/fieldset

2. **Layout Components**
   - Container
   - Grid system
   - Card
   - Header/Navigation
   - Section

3. **Data Display**
   - Chart container
   - Data table
   - Key metrics cards
   - Progress indicators

4. **Feedback Components**
   - Loading states
   - Error messages
   - Tooltips
   - Notifications

## Feature Implementation Plan

### Phase 1: Foundation Setup
1. **Project Structure**
   - Set up folder structure as outlined above
   - Create TypeScript type definitions
   - Set up routing (likely using Preact's built-in capabilities or a lightweight router)

2. **Design System**
   - Create design tokens CSS file
   - Build core UI components
   - Create design system showcase page at `/design`
   - Implement responsive grid system

### Phase 2: Core Simulation Engine
1. **Wealth Model Implementation**
   - Create wealth simulation model using simulation library
   - Implement financial calculations:
     - Monthly to annual conversions
     - Compound interest calculations
     - Tax calculations on investment income
     - Progressive wealth accumulation over time

2. **Input Parameters**
   - Net monthly salary
   - Monthly expenses
   - Initial investment amount
   - Monthly investment contribution
   - Expected annual return on investments (%)
   - Tax rate on investment income (%)
   - Simulation time period (years)
   - Inflation rate (optional advanced parameter)

### Phase 3: User Interface
1. **Parameter Input Form**
   - Clean, intuitive form layout
   - Real-time validation
   - Currency formatting for monetary inputs
   - Percentage formatting for rates
   - Responsive design

2. **Results Dashboard**
   - Key metrics summary cards
   - Chart containers with proper sizing
   - Export/share functionality (if needed)

### Phase 4: Data Visualization
1. **Savings Accumulation Chart**
   - Line chart showing total wealth over time
   - Multiple scenarios comparison (if multiple parameter sets)
   - Interactive tooltips with exact values
   - Responsive chart sizing

2. **Income Streams Chart**
   - Multi-line chart showing:
     - Annual salary income
     - Annual investment income
     - Total annual income
   - Legend and proper labeling
   - Color coding consistent with design system

### Phase 5: Advanced Features & Polish
1. **Scenario Comparison**
   - Save multiple parameter sets
   - Compare scenarios side-by-side
   - Highlight differences between scenarios

2. **Export Capabilities**
   - Download charts as images
   - Export data as CSV
   - Print-friendly view

3. **Performance Optimization**
   - Lazy loading of charts
   - Debounced parameter updates
   - Efficient re-rendering

## Simulation Model Design

### Core Primitives
Using the simulation library's System Dynamics approach:

1. **Stocks (Accumulative Values)**
   - Total Wealth
   - Annual Salary (if it grows over time)
   - Investment Principal
   - Investment Returns

2. **Flows (Rates of Change)**
   - Monthly Savings Flow (Salary - Expenses)
   - Investment Contribution Flow
   - Investment Return Flow
   - Tax Flow (on investment income)

3. **Variables (Parameters)**
   - Monthly Net Salary
   - Monthly Expenses
   - Annual Return Rate
   - Tax Rate
   - Inflation Rate (optional)

### Calculation Logic
```
Annual Savings = (Monthly Salary - Monthly Expenses) * 12
Investment Growth = Principal * (1 + Annual Return Rate)
Investment Income = Investment Growth - Principal
Tax on Investment = Investment Income * Tax Rate
Net Investment Growth = Investment Growth - Tax on Investment
Total Wealth = Accumulated Savings + Net Investment Value
```

## Data Flow Architecture

1. **User Input** → Parameter validation → Update simulation model
2. **Simulation Model** → Run simulation → Generate time-series data
3. **Time-series Data** → Chart.js → Rendered visualizations
4. **Real-time Updates** → Debounced parameter changes → Re-run simulation

## Responsive Design Strategy

- **Mobile First**: Design for mobile, enhance for desktop
- **Breakpoints**: 
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- **Chart Responsiveness**: Charts adapt to container size
- **Form Layout**: Single column on mobile, multi-column on desktop

## Performance Considerations

1. **Simulation Performance**
   - Efficient model updates
   - Minimal re-calculations
   - Debounced user input

2. **Chart Performance**
   - Canvas-based rendering (Chart.js default)
   - Efficient data updates
   - Responsive chart destruction/recreation

3. **Bundle Size**
   - Tree-shaking for unused Chart.js components
   - Lazy loading of non-critical components

## Testing Strategy

1. **Unit Tests**
   - Financial calculation functions
   - Utility functions
   - Component logic

2. **Integration Tests**
   - Simulation model accuracy
   - Chart data rendering
   - Form validation

3. **Manual Testing**
   - Cross-browser compatibility
   - Responsive design validation
   - Accessibility testing

## Development Phases Timeline

1. **Phase 1** (Foundation): ~2-3 days
2. **Phase 2** (Simulation): ~2-3 days  
3. **Phase 3** (UI): ~3-4 days
4. **Phase 4** (Charts): ~2-3 days
5. **Phase 5** (Polish): ~2-3 days

**Total Estimated Time**: 11-16 days

## Prompt Instructions for Future Development

When resuming development of this project, use these instructions to recover context:

### Context Recovery Prompt
```
I'm working on a wealth scenario simulation app. Please read the following files to understand the current state:

1. /Users/taess/Desktop/dev/wealth_scenario/package.json - to understand dependencies
2. /Users/taess/Desktop/dev/wealth_scenario/DEVELOPMENT_PLAN.md - this development plan
3. Check the src/ directory structure to see what's already implemented
4. Review any existing components in src/components/

The app uses:
- Preact for UI
- simulation library (System Dynamics modeling) for financial calculations
- Chart.js for visualizations
- Custom CSS design system (no external styling libraries)
- TypeScript for type safety

Key features:
- Customizable financial parameters (salary, expenses, investments, returns, taxes)
- Savings accumulation chart over time
- Income streams chart (salary vs investment income)
- Design system showcase at /design route

Current development phase: [Specify which phase you're working on]
Next task: [Specify what needs to be implemented next]
```

### Key Implementation Notes
- Use simulation library's Model, Stock, Flow, and Variable primitives
- All monetary inputs should be properly formatted and validated
- Charts should be responsive and follow design system colors
- Design system components must be showcased on /design page
- App must work entirely client-side with no backend dependencies

## File Structure Checklist

Create these files/folders as development progresses:
- [ ] src/types/wealth.ts
- [ ] src/models/wealth.ts
- [ ] src/components/ui/ (all design system components)
- [ ] src/components/forms/ParameterForm.tsx
- [ ] src/components/charts/SavingsChart.tsx
- [ ] src/components/charts/IncomeChart.tsx
- [ ] src/pages/Home.tsx
- [ ] src/pages/Design.tsx
- [ ] src/styles/design-system.css
- [ ] src/styles/components.css
- [ ] src/styles/layout.css
- [ ] src/utils/calculations.ts
- [ ] src/utils/formatters.ts

This development plan serves as the single source of truth for the project architecture and implementation strategy.