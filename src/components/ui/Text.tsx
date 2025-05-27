export interface TextProps {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'primary' | 'secondary' | 'muted' | 'success' | 'warning' | 'error';
  children: any;
  className?: string;
  style?: Record<string, string | number>;
  as?: 'p' | 'span' | 'div' | 'strong' | 'em';
}

export function Text({ 
  size = 'base',
  weight = 'normal',
  color = 'primary',
  children,
  className = '',
  style = {},
  as: Tag = 'p'
}: TextProps) {
  
  const sizeStyles = {
    xs: { fontSize: 'var(--font-size-xs)' },
    sm: { fontSize: 'var(--font-size-sm)' },
    base: { fontSize: 'var(--font-size-base)' },
    lg: { fontSize: 'var(--font-size-lg)' },
    xl: { fontSize: 'var(--font-size-xl)' }
  };

  const weightStyles = {
    light: { fontWeight: 'var(--font-weight-light)' },
    normal: { fontWeight: 'var(--font-weight-normal)' },
    medium: { fontWeight: 'var(--font-weight-medium)' },
    semibold: { fontWeight: 'var(--font-weight-semibold)' },
    bold: { fontWeight: 'var(--font-weight-bold)' }
  };

  const colorStyles = {
    primary: { color: 'var(--color-neutral-900)' },
    secondary: { color: 'var(--color-neutral-700)' },
    muted: { color: 'var(--color-neutral-500)' },
    success: { color: 'var(--color-success-700)' },
    warning: { color: 'var(--color-warning-700)' },
    error: { color: 'var(--color-error-700)' }
  };

  const baseStyles: Record<string, string | number> = {
    fontFamily: 'var(--font-family-sans)',
    lineHeight: 'var(--line-height-normal)',
    marginBottom: Tag === 'p' ? 'var(--space-4)' : '0',
    ...sizeStyles[size],
    ...weightStyles[weight],
    ...colorStyles[color],
    ...style
  };

  return (
    <Tag 
      className={className}
      style={baseStyles}
    >
      {children}
    </Tag>
  );
}