// Debug panel component for viewing logs during development
import { useState } from 'preact/hooks';
import { logger } from '../../utils/logger';
import type { LogLevel } from '../../utils/logger';
import { Button } from './Button';
import { Heading } from './Heading';
import { Text } from './Text';

export function DebugPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<LogLevel | 'all'>('all');

  if (!isOpen) {
    return (
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000
      }}>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setIsOpen(true)}
        >
          🐛 Debug Logs
        </Button>
      </div>
    );
  }

  const logs = selectedLevel === 'all' 
    ? logger.getLogs() 
    : logger.getLogsByLevel(selectedLevel);

  const errorSummary = logger.getErrorSummary();

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '500px',
      height: '400px',
      backgroundColor: 'white',
      border: '1px solid var(--color-neutral-300)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header */}
      <div style={{
        padding: 'var(--space-4)',
        borderBottom: '1px solid var(--color-neutral-200)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Heading level={3}>Debug Logs</Heading>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </Button>
      </div>

      {/* Error Summary */}
      {errorSummary.totalErrors > 0 && (
        <div style={{
          padding: 'var(--space-4)',
          backgroundColor: 'var(--color-error-50)',
          borderBottom: '1px solid var(--color-neutral-200)'
        }}>
          <Text size="sm" style={{ color: 'var(--color-error-600)' }}>
            ⚠️ {errorSummary.totalErrors} error(s) detected
          </Text>
        </div>
      )}

      {/* Filter Controls */}
      <div style={{
        padding: 'var(--space-4)',
        borderBottom: '1px solid var(--color-neutral-200)',
        display: 'flex',
        gap: 'var(--space-2)',
        flexWrap: 'wrap'
      }}>
        {(['all', 'debug', 'info', 'warn', 'error'] as const).map(level => (
          <Button
            key={level}
            variant={selectedLevel === level ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => setSelectedLevel(level)}
          >
            {level} {level !== 'all' && `(${logger.getLogsByLevel(level).length})`}
          </Button>
        ))}
      </div>

      {/* Action Buttons */}
      <div style={{
        padding: 'var(--space-4)',
        borderBottom: '1px solid var(--color-neutral-200)',
        display: 'flex',
        gap: 'var(--space-2)'
      }}>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => logger.clear()}
        >
          Clear Logs
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => logger.exportLogs()}
        >
          Export Logs
        </Button>
      </div>

      {/* Logs Display */}
      <div style={{
        flex: 1,
        padding: 'var(--space-4)',
        overflow: 'auto',
        fontSize: '12px',
        fontFamily: 'monospace'
      }}>
        {logs.length === 0 ? (
          <Text size="sm" color="secondary">No logs to display</Text>
        ) : (
          logs.slice(-50).map((log, index) => (
            <div
              key={index}
              style={{
                marginBottom: 'var(--space-2)',
                padding: 'var(--space-2)',
                backgroundColor: getLogBackgroundColor(log.level),
                borderRadius: 'var(--radius-sm)',
                borderLeft: `3px solid ${getLogBorderColor(log.level)}`
              }}
            >
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                marginBottom: 'var(--space-1)'
              }}>
                <span style={{ fontWeight: 'bold', color: getLogTextColor(log.level) }}>
                  [{log.level.toUpperCase()}]
                </span>
                <span style={{ color: 'var(--color-neutral-500)' }}>
                  {new Date(log.timestamp).toLocaleTimeString()}
                </span>
              </div>
              <div style={{ marginBottom: 'var(--space-1)' }}>
                {log.message}
              </div>
              {log.data && (
                <div style={{ 
                  color: 'var(--color-neutral-600)',
                  fontSize: '11px',
                  marginTop: 'var(--space-1)'
                }}>
                  Data: {JSON.stringify(log.data, null, 2)}
                </div>
              )}
              {log.stack && (
                <details style={{ marginTop: 'var(--space-1)' }}>
                  <summary style={{ 
                    cursor: 'pointer',
                    color: 'var(--color-neutral-600)',
                    fontSize: '11px'
                  }}>
                    Stack trace
                  </summary>
                  <pre style={{ 
                    fontSize: '10px',
                    marginTop: 'var(--space-1)',
                    whiteSpace: 'pre-wrap'
                  }}>
                    {log.stack}
                  </pre>
                </details>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function getLogBackgroundColor(level: LogLevel): string {
  switch (level) {
    case 'error': return 'var(--color-error-50)';
    case 'warn': return 'var(--color-warning-50)';
    case 'info': return 'var(--color-primary-50)';
    case 'debug': return 'var(--color-neutral-50)';
    default: return 'var(--color-neutral-50)';
  }
}

function getLogBorderColor(level: LogLevel): string {
  switch (level) {
    case 'error': return 'var(--color-error-500)';
    case 'warn': return 'var(--color-warning-500)';
    case 'info': return 'var(--color-primary-500)';
    case 'debug': return 'var(--color-neutral-400)';
    default: return 'var(--color-neutral-400)';
  }
}

function getLogTextColor(level: LogLevel): string {
  switch (level) {
    case 'error': return 'var(--color-error-700)';
    case 'warn': return 'var(--color-warning-700)';
    case 'info': return 'var(--color-primary-700)';
    case 'debug': return 'var(--color-neutral-600)';
    default: return 'var(--color-neutral-600)';
  }
}