export interface CaptionProps {
  children: any;
  className?: string;
  style?: Record<string, string | number>;
  color?: 'muted' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

export function Caption({ 
  children, 
  className = '', 
  style = {},
  color = 'muted' 
}: CaptionProps) {
  
  const colorStyles = {
    muted: { color: 'var(--color-neutral-500)' },
    primary: { color: 'var(--color-neutral-700)' },
    secondary: { color: 'var(--color-neutral-600)' },
    success: { color: 'var(--color-success-700)' },
    warning: { color: 'var(--color-warning-700)' },
    error: { color: 'var(--color-error-700)' }
  };

  const baseStyles: Record<string, string | number> = {
    fontSize: 'var(--font-size-xs)',
    fontFamily: 'var(--font-family-sans)',
    fontWeight: 'var(--font-weight-normal)',
    lineHeight: 'var(--line-height-normal)',
    ...colorStyles[color],
    ...style
  };

  return (
    <span 
      className={className}
      style={baseStyles}
    >
      {children}
    </span>
  );
}