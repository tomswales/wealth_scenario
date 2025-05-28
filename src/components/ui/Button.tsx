export interface ButtonProps {
  children: any;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'base' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  style?: Record<string, string | number>;
}

export function Button({
  children,
  variant = 'primary',
  size = 'base',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className = '',
  style = {}
}: ButtonProps) {
  
  const baseStyles: Record<string, string | number> = {
    fontFamily: 'var(--font-family-sans)',
    fontWeight: 'var(--font-weight-medium)',
    borderRadius: 'var(--radius-md)',
    border: 'none',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    transition: 'all 0.2s ease-in-out',
    textDecoration: 'none',
    opacity: disabled || loading ? 0.6 : 1,
    ...style
  };

  const sizeStyles = {
    sm: {
      fontSize: 'var(--font-size-sm)',
      padding: 'var(--space-2) var(--space-3)',
      minHeight: '32px'
    },
    base: {
      fontSize: 'var(--font-size-base)',
      padding: 'var(--space-3) var(--space-4)',
      minHeight: '40px'
    },
    lg: {
      fontSize: 'var(--font-size-lg)',
      padding: 'var(--space-4) var(--space-6)',
      minHeight: '48px'
    }
  };

  const variantStyles = {
    primary: {
      backgroundColor: 'var(--color-primary-600)',
      color: 'white',
    },
    secondary: {
      backgroundColor: 'var(--color-neutral-100)',
      color: 'var(--color-neutral-900)',
      border: '1px solid var(--color-neutral-300)'
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-primary-600)',
    },
    danger: {
      backgroundColor: 'var(--color-error-600)',
      color: 'white',
    }
  };

  const handleClick = (event: MouseEvent) => {
    if (disabled || loading) return;
    onClick?.(event);
  };

  const buttonStyles = {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant]
  };

  return (
    <button
      type={type}
      className={className}
      style={buttonStyles}
      onClick={handleClick}
      disabled={disabled || loading}
      onMouseEnter={(e) => {
        if (disabled || loading) return;
        const target = e.target as HTMLElement;
        if (variant === 'primary') {
          target.style.backgroundColor = 'var(--color-primary-700)';
        } else if (variant === 'secondary') {
          target.style.backgroundColor = 'var(--color-neutral-200)';
        } else if (variant === 'ghost') {
          target.style.backgroundColor = 'var(--color-primary-50)';
        } else if (variant === 'danger') {
          target.style.backgroundColor = 'var(--color-error-700)';
        }
      }}
      onMouseLeave={(e) => {
        if (disabled || loading) return;
        const target = e.target as HTMLElement;
        if (variant === 'primary') {
          target.style.backgroundColor = 'var(--color-primary-600)';
        } else if (variant === 'secondary') {
          target.style.backgroundColor = 'var(--color-neutral-100)';
        } else if (variant === 'ghost') {
          target.style.backgroundColor = 'transparent';
        } else if (variant === 'danger') {
          target.style.backgroundColor = 'var(--color-error-600)';
        }
      }}
    >
      {loading && (
        <div style={{
          width: '16px',
          height: '16px',
          border: '2px solid currentColor',
          borderTop: '2px solid transparent',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
      )}
      {children}
    </button>
  );
}