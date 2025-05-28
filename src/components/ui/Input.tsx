export interface InputProps {
  type?: 'text' | 'number' | 'email' | 'password';
  size?: 'sm' | 'base' | 'lg';
  state?: 'default' | 'error' | 'success';
  placeholder?: string;
  value?: string | number;
  defaultValue?: string | number;
  disabled?: boolean;
  required?: boolean;
  id?: string;
  name?: string;
  onChange?: (event: Event) => void;
  onBlur?: (event: Event) => void;
  onFocus?: (event: Event) => void;
  className?: string;
  style?: Record<string, string | number>;
}

export function Input({
  type = 'text',
  size = 'base',
  state = 'default',
  placeholder,
  value,
  defaultValue,
  disabled = false,
  required = false,
  id,
  name,
  onChange,
  onBlur,
  onFocus,
  className = '',
  style = {}
}: InputProps) {
  
  const baseStyles: Record<string, string | number> = {
    fontFamily: 'var(--font-family-sans)',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--color-neutral-300)',
    backgroundColor: disabled ? 'var(--color-neutral-100)' : 'white',
    color: disabled ? 'var(--color-neutral-500)' : 'var(--color-neutral-900)',
    cursor: disabled ? 'not-allowed' : 'text',
    transition: 'all 0.2s ease-in-out',
    outline: 'none',
    width: '100%',
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
      padding: 'var(--space-4) var(--space-5)',
      minHeight: '48px'
    }
  };

  const stateStyles = {
    default: {
      borderColor: 'var(--color-neutral-300)',
    },
    error: {
      borderColor: 'var(--color-error-500)',
      boxShadow: '0 0 0 3px var(--color-error-50)',
    },
    success: {
      borderColor: 'var(--color-success-500)',
      boxShadow: '0 0 0 3px var(--color-success-50)',
    }
  };

  const inputStyles = {
    ...baseStyles,
    ...sizeStyles[size],
    ...stateStyles[state]
  };

  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      required={required}
      className={className}
      style={inputStyles}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      onFocusCapture={(e) => {
        if (disabled) return;
        const target = e.target as HTMLInputElement;
        if (state === 'default') {
          target.style.borderColor = 'var(--color-primary-500)';
          target.style.boxShadow = '0 0 0 3px var(--color-primary-50)';
        }
        onFocus?.(e);
      }}
      onBlurCapture={(e) => {
        if (disabled) return;
        const target = e.target as HTMLInputElement;
        if (state === 'default') {
          target.style.borderColor = 'var(--color-neutral-300)';
          target.style.boxShadow = 'none';
        }
        onBlur?.(e);
      }}
    />
  );
}