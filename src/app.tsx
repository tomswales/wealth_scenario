import { useState, useEffect } from 'preact/hooks'
import { Container } from './components/ui'
import { Home } from './pages/Home'
import { Test } from './pages/Test'
import { SimulationTest } from './pages/SimulationTest'
import './app.css'

export function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const renderPage = () => {
    switch (currentPath) {
      case '/wealth_scenario/test':
        return <Test />
      case '/wealth_scenario/simulation-test':
        return <SimulationTest />
      case '/wealth_scenario/':
      case '/wealth_scenario':
      default:
        return <Home />
    }
  }

  return (
    <Container size="lg" style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-8)' }}>
      {renderPage()}
    </Container>
  )
}