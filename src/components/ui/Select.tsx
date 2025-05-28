export interface SelectProps {
  options: Array<{
    value: string | number;
    label: string;
    disabled?: boolean;
  }>;
  value?: string | number;
  defaultValue?: string | number;
  placeholder?: string;
  size?: 'sm' | 'base' | 'lg';
  state?: 'default' | 'error' | 'success';
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

export function Select({
  options,
  value,
  defaultValue,
  placeholder = 'Select an option...',
  size = 'base',
  state = 'default',
  disabled = false,
  required = false,
  id,
  name,
  onChange,
  onBlur,
  onFocus,
  className = '',
  style = {}
}: SelectProps) {
  
  const baseStyles: Record<string, string | number> = {
    fontFamily: 'var(--font-family-sans)',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--color-neutral-300)',
    backgroundColor: disabled ? 'var(--color-neutral-100)' : 'white',
    color: disabled ? 'var(--color-neutral-500)' : 'var(--color-neutral-900)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease-in-out',
    outline: 'none',
    width: '100%',
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
    backgroundPosition: 'right 12px center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '16px',
    paddingRight: 'var(--space-10)',
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

  const selectStyles: Record<string, string | number> = {
    ...baseStyles,
    ...sizeStyles[size],
    ...stateStyles[state]
  };

  // Adjust padding for different sizes to account for dropdown arrow
  const paddingRightAdjustment = {
    sm: 'var(--space-8)',
    base: 'var(--space-10)', 
    lg: 'var(--space-12)'
  };
  
  selectStyles.paddingRight = paddingRightAdjustment[size];

  return (
    <select
      id={id}
      name={name}
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      required={required}
      className={className}
      style={selectStyles}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      onFocusCapture={(e) => {
        if (disabled) return;
        const target = e.target as HTMLSelectElement;
        if (state === 'default') {
          target.style.borderColor = 'var(--color-primary-500)';
          target.style.boxShadow = '0 0 0 3px var(--color-primary-50)';
        }
        onFocus?.(e);
      }}
      onBlurCapture={(e) => {
        if (disabled) return;
        const target = e.target as HTMLSelectElement;
        if (state === 'default') {
          target.style.borderColor = 'var(--color-neutral-300)';
          target.style.boxShadow = 'none';
        }
        onBlur?.(e);
      }}
    >
      {placeholder && (
        <option value="" disabled hidden>
          {placeholder}
        </option>
      )}
      {options.map((option, index) => (
        <option
          key={`${option.value}-${index}`}
          value={option.value}
          disabled={option.disabled}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}