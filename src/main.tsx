import { render } from 'preact'
import './index.css'
import { App } from './app.tsx'
// Initialize logging system (will reset on every startup)
import { logger, info } from './utils/logger'

info('Application starting up');

render(<App />, document.getElementById('app')!)
