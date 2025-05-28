export interface CardProps {
  children: any;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'base' | 'lg';
  className?: string;
  style?: Record<string, string | number>;
}

export interface CardHeaderProps {
  children: any;
  className?: string;
  style?: Record<string, string | number>;
}

export interface CardBodyProps {
  children: any;
  className?: string;
  style?: Record<string, string | number>;
}

export interface CardFooterProps {
  children: any;
  className?: string;
  style?: Record<string, string | number>;
}

// Main Card Component
export function Card({
  children,
  variant = 'default',
  padding = 'base',
  className = '',
  style = {}
}: CardProps) {
  
  const baseStyles: Record<string, string | number> = {
    backgroundColor: 'white',
    borderRadius: 'var(--radius-lg)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    ...style
  };

  const variantStyles = {
    default: {
      border: '1px solid var(--color-neutral-200)',
      boxShadow: 'var(--shadow-sm)',
    },
    elevated: {
      border: 'none',
      boxShadow: 'var(--shadow-lg)',
    },
    outlined: {
      border: '2px solid var(--color-neutral-300)',
      boxShadow: 'none',
    }
  };

  const paddingStyles = {
    none: { padding: '0' },
    sm: { padding: 'var(--space-4)' },
    base: { padding: 'var(--space-6)' },
    lg: { padding: 'var(--space-8)' }
  };

  const cardStyles = {
    ...baseStyles,
    ...variantStyles[variant],
    ...paddingStyles[padding]
  };

  return (
    <div
      className={className}
      style={cardStyles}
    >
      {children}
    </div>
  );
}

// Card Header Component
export function CardHeader({
  children,
  className = '',
  style = {}
}: CardHeaderProps) {
  
  const headerStyles: Record<string, string | number> = {
    borderBottom: '1px solid var(--color-neutral-200)',
    padding: 'var(--space-6)',
    margin: '-var(--space-6) -var(--space-6) var(--space-6) -var(--space-6)',
    ...style
  };

  return (
    <div
      className={className}
      style={headerStyles}
    >
      {children}
    </div>
  );
}

// Card Body Component
export function CardBody({
  children,
  className = '',
  style = {}
}: CardBodyProps) {
  
  const bodyStyles: Record<string, string | number> = {
    flex: '1',
    ...style
  };

  return (
    <div
      className={className}
      style={bodyStyles}
    >
      {children}
    </div>
  );
}

// Card Footer Component
export function CardFooter({
  children,
  className = '',
  style = {}
}: CardFooterProps) {
  
  const footerStyles: Record<string, string | number> = {
    borderTop: '1px solid var(--color-neutral-200)',
    padding: 'var(--space-6)',
    margin: 'var(--space-6) -var(--space-6) -var(--space-6) -var(--space-6)',
    backgroundColor: 'var(--color-neutral-50)',
    ...style
  };

  return (
    <div
      className={className}
      style={footerStyles}
    >
      {children}
    </div>
  );
}