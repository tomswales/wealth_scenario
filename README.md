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

## 📊 Features (Planned)

- Financial parameter input forms
- Wealth accumulation visualization
- Income stream comparisons
- Multiple scenario analysis
- Export capabilities

## 🧪 Development Status

Currently building the design system foundation. Check the `/test` page to see progress on components and design tokens.
