import { useState } from 'preact/hooks';

export interface RangeProps {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  size?: 'sm' | 'base' | 'lg';
  disabled?: boolean;
  showValue?: boolean;
  showMinMax?: boolean;
  valuePrefix?: string;
  valueSuffix?: string;
  formatValue?: (value: number) => string;
  id?: string;
  name?: string;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  className?: string;
  style?: Record<string, string | number>;
}

export function Range({
  value,
  defaultValue = 50,
  min = 0,
  max = 100,
  step = 1,
  size = 'base',
  disabled = false,
  showValue = true,
  showMinMax = false,
  valuePrefix = '',
  valueSuffix = '',
  formatValue,
  id,
  name,
  onChange,
  onInput,
  className = '',
  style = {}
}: RangeProps) {
  
  const [currentValue, setCurrentValue] = useState(value !== undefined ? value : defaultValue);
  
  // Use controlled value if provided, otherwise use internal state
  const displayValue = value !== undefined ? value : currentValue;
  
  // Calculate percentage for styling
  const percentage = ((displayValue - min) / (max - min)) * 100;
  
  const formatDisplayValue = (val: number): string => {
    if (formatValue) {
      return formatValue(val);
    }
    return `${valuePrefix}${val.toLocaleString()}${valueSuffix}`;
  };

  const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const newValue = parseFloat(target.value);
    
    if (value === undefined) {
      setCurrentValue(newValue);
    }
    
    if (onChange) {
      onChange(event);
    }
  };

  const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const newValue = parseFloat(target.value);
    
    if (value === undefined) {
      setCurrentValue(newValue);
    }
    
    if (onInput) {
      onInput(event);
    }
  };

  // Size-based dimensions
  const trackHeight = {
    sm: '4px',
    base: '6px',
    lg: '8px'
  };

  const thumbSize = {
    sm: '16px',
    base: '20px',
    lg: '24px'
  };



  return (
    <>
      {/* Custom CSS for this range instance */}
      <style>{`
        .range-container-${size} {
          width: 100%;
        }
        
        .range-input-${size} {
          width: 100%;
          height: ${trackHeight[size]};
          appearance: none;
          background: transparent;
          cursor: ${disabled ? 'not-allowed' : 'pointer'};
          outline: none;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          z-index: 2;
        }
        
        .range-input-${size}::-webkit-slider-thumb {
          appearance: none;
          width: ${thumbSize[size]};
          height: ${thumbSize[size]};
          border-radius: 50%;
          background-color: ${disabled ? 'var(--color-neutral-500)' : 'var(--color-primary-600)'};
          border: 2px solid white;
          box-shadow: ${disabled ? 'var(--shadow-sm)' : 'var(--shadow-md)'};
          cursor: ${disabled ? 'not-allowed' : 'grab'};
          transition: all 0.15s ease-in-out;
        }
        
        .range-input-${size}::-webkit-slider-thumb:hover:not(:disabled) {
          background-color: var(--color-primary-700);
          transform: scale(1.1);
        }
        
        .range-input-${size}::-webkit-slider-thumb:active:not(:disabled) {
          cursor: grabbing;
          transform: scale(0.95);
        }
        
        .range-input-${size}::-moz-range-thumb {
          width: ${thumbSize[size]};
          height: ${thumbSize[size]};
          border-radius: 50%;
          background-color: ${disabled ? 'var(--color-neutral-500)' : 'var(--color-primary-600)'};
          border: 2px solid white;
          box-shadow: ${disabled ? 'var(--shadow-sm)' : 'var(--shadow-md)'};
          cursor: ${disabled ? 'not-allowed' : 'grab'};
          transition: all 0.15s ease-in-out;
        }
        
        .range-input-${size}::-moz-range-track {
          background: transparent;
          border: none;
          height: ${trackHeight[size]};
        }
        
        .range-input-${size}:disabled {
          opacity: 0.6;
        }
      `}</style>

      <div className={`range-container-${size} ${className}`} style={style}>
        {(showValue || showMinMax) && (
          <div style={{
            display: 'flex',
            justifyContent: showMinMax ? 'space-between' : 'flex-start',
            alignItems: 'center',
            marginBottom: 'var(--space-2)'
          }}>
            {showValue && (
              <span style={{
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
                color: disabled ? 'var(--color-neutral-400)' : 'var(--color-neutral-700)'
              }}>
                {formatDisplayValue(displayValue)}
              </span>
            )}
            
            {showMinMax && (
              <div style={{
                display: 'flex',
                gap: 'var(--space-4)',
                fontSize: 'var(--font-size-xs)',
                color: 'var(--color-neutral-500)',
                marginLeft: showValue ? 'auto' : '0'
              }}>
                <span>{formatDisplayValue(min)}</span>
                <span>{formatDisplayValue(max)}</span>
              </div>
            )}
          </div>
        )}
        
        <div style={{ position: 'relative', width: '100%' }}>
          {/* Track background */}
          <div style={{
            width: '100%',
            height: trackHeight[size],
            backgroundColor: disabled ? 'var(--color-neutral-200)' : 'var(--color-neutral-300)',
            borderRadius: 'var(--radius-full)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Progress fill */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: `${percentage}%`,
              backgroundColor: disabled ? 'var(--color-neutral-400)' : 'var(--color-primary-500)',
              borderRadius: 'var(--radius-full)',
              transition: 'width 0.15s ease-in-out'
            }} />
          </div>
          
          {/* Range input */}
          <input
            type="range"
            id={id}
            name={name}
            min={min}
            max={max}
            step={step}
            value={displayValue}
            disabled={disabled}
            onChange={handleChange}
            onInput={handleInput}
            className={`range-input-${size}`}
          />
        </div>
      </div>
    </>
  );
}
