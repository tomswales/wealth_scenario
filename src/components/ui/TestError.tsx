// Test component to trigger errors for logging system validation
import { Button } from './Button';
import { error, warn, info, debug } from '../../utils/logger';

export function TestError() {
  const triggerError = () => {
    error('Test error triggered by user', { userAction: 'clicked test button' });
    throw new Error('This is a test error for the logging system');
  };

  const triggerWarning = () => {
    warn('Test warning triggered', { level: 'medium severity' });
  };

  const triggerInfo = () => {
    info('Test info message', { timestamp: Date.now() });
  };

  const triggerDebug = () => {
    debug('Test debug message', { detailed: true, context: 'testing' });
  };

  return (
    <div style={{ 
      padding: 'var(--space-4)', 
      border: '1px solid var(--color-warning-300)',
      borderRadius: 'var(--radius-md)',
      backgroundColor: 'var(--color-warning-50)'
    }}>
      <h3>Test Logging System</h3>
      <p>Use these buttons to test different log levels:</p>
      <div style={{ display: 'flex', gap: 'var(--space-2)', marginTop: 'var(--space-2)' }}>
        <Button onClick={triggerDebug} variant="secondary" size="sm">
          Debug Log
        </Button>
        <Button onClick={triggerInfo} variant="secondary" size="sm">
          Info Log
        </Button>
        <Button onClick={triggerWarning} variant="secondary" size="sm">
          Warning Log
        </Button>
        <Button onClick={triggerError} variant="secondary" size="sm">
          Error Log
        </Button>
      </div>
    </div>
  );
}