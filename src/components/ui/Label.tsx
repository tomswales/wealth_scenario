export interface LabelProps {
  children: any;
  htmlFor?: string;
  required?: boolean;
  size?: 'sm' | 'base' | 'lg';
  className?: string;
  style?: Record<string, string | number>;
}

export function Label({
  children,
  htmlFor,
  required = false,
  size = 'base',
  className = '',
  style = {}
}: LabelProps) {
  
  const baseStyles: Record<string, string | number> = {
    fontFamily: 'var(--font-family-sans)',
    fontWeight: 'var(--font-weight-medium)',
    color: 'var(--color-neutral-700)',
    display: 'inline-block',
    marginBottom: 'var(--space-2)',
    ...style
  };

  const sizeStyles = {
    sm: {
      fontSize: 'var(--font-size-sm)',
    },
    base: {
      fontSize: 'var(--font-size-base)',
    },
    lg: {
      fontSize: 'var(--font-size-lg)',
    }
  };

  const labelStyles = {
    ...baseStyles,
    ...sizeStyles[size]
  };

  return (
    <label
      htmlFor={htmlFor}
      className={className}
      style={labelStyles}
    >
      {children}
      {required && (
        <span style={{
          color: 'var(--color-error-600)',
          marginLeft: 'var(--space-1)',
          fontSize: 'inherit'
        }}>
          *
        </span>
      )}
    </label>
  );
}