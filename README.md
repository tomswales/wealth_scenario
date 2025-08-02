# Wealth Scenario App

A client-side wealth simulation application built with Preact, using the simulation library for financial modeling and Chart.js for data visualization.

## 🚀 Live Demo

The app is deployed on GitHub Pages: [https://tomswales.github.io/wealth_scenario/](https://tomswales.github.io/wealth_scenario/)

## 🛠️ Development

### Local Development
```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Debug Logging
The app includes a built-in logging system for development:
- **Access**: Click the "🐛 Debug Logs" button (bottom-right corner)
- **Usage**: `import { error, warn, info, debug } from './utils/logger'`
- **Features**: Auto-captures errors, filter by level, export logs
- **Reset**: Logs clear automatically on dev server restart

### Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

**Deployment happens automatically when you:**
1. Push changes to the `main` branch
2. GitHub Actions will build and deploy the site
3. Visit the Actions tab to monitor deployment status

**Manual deployment:**
- Go to the Actions tab in GitHub
- Click "Deploy static content to Pages"
- Click "Run workflow"

## 📁 Project Structure

```
src/
├── components/
│   └── ui/           # Design system components
├── pages/
│   ├── Home.tsx      # Main page
│   └── Test.tsx      # Design system test page
├── styles/
│   └── design-system.css  # Design tokens
└── app.tsx           # Main app component
```

## 🎨 Design System

Visit `/test` route to see the design system components and tokens in action.

## 🔧 Configuration

- **Vite Config**: Configured with base path for GitHub Pages deployment
- **GitHub Actions**: Automated deployment on push to main branch
- **TypeScript**: Full type safety with strict configuration
- **Debug Logging**: Built-in logging system for development debugging (resets on startup)

## 📊 Features (Planned)

- Financial parameter input forms
- Wealth accumulation visualization
- Income stream comparisons
- Multiple scenario analysis
- Export capabilities

## 🧪 Development Status

Currently building the design system foundation. Check the `/test` page to see progress on components and design tokens.

### Design System Progress

#### ✅ Completed Components
- Core layout components (Container, Section, Grid)
- Typography system (Heading, Text, Caption)
- Form components (Input, Label, Select, Range)
- Button components with variants
- Card components
- Design tokens and CSS variables

#### 🚧 Remaining Design System User Stories

**Form Components - Final Polish**
- US-DS-07: Form validation states and error messaging
- US-DS-08: Loading states and progress indicators
- US-DS-09: Notifications and alerts

**Interactive Components**
- US-DS-10: Tooltips and popovers for contextual help
- US-DS-11: Modal dialogs for focused tasks

**Data Display Components**
- US-DS-12: Data tables for structured financial information
- US-DS-13: Badges and status indicators

**Layout & Navigation**
- US-DS-14: Consistent navigation components

**Documentation**
- US-DS-15: Comprehensive component documentation
