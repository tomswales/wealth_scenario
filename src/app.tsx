import { useState, useEffect } from 'preact/hooks'
import { Home } from './pages/Home'
import { Test } from './pages/Test'
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
      case '/test':
        return <Test />
      case '/':
      default:
        return <Home />
    }
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      {renderPage()}
    </div>
  )
}