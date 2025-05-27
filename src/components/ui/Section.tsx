export interface SectionProps {
  children: any;
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  style?: Record<string, string | number>;
}

export function Section({ 
  children, 
  spacing = 'md',
  className = '', 
  style = {} 
}: SectionProps) {
  
  const spacingStyles = {
    sm: { 
      paddingTop: 'var(--space-8)', 
      paddingBottom: 'var(--space-8)' 
    },
    md: { 
      paddingTop: 'var(--space-12)', 
      paddingBottom: 'var(--space-12)' 
    },
    lg: { 
      paddingTop: 'var(--space-16)', 
      paddingBottom: 'var(--space-16)' 
    },
    xl: { 
      paddingTop: 'var(--space-20)', 
      paddingBottom: 'var(--space-20)' 
    }
  };

  const baseStyles: Record<string, string | number> = {
    width: '100%',
    ...spacingStyles[spacing],
    ...style
  };

  return (
    <section 
      className={className}
      style={baseStyles}
    >
      {children}
    </section>
  );
}