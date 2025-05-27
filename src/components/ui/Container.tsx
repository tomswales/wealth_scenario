export interface ContainerProps {
  children: any;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
  style?: Record<string, string | number>;
}

export function Container({ 
  children, 
  size = 'lg',
  className = '', 
  style = {} 
}: ContainerProps) {
  
  const sizeStyles = {
    sm: { maxWidth: '640px' },   // --breakpoint-sm
    md: { maxWidth: '768px' },   // --breakpoint-md  
    lg: { maxWidth: '1024px' },  // --breakpoint-lg
    xl: { maxWidth: '1280px' },  // --breakpoint-xl
    full: { maxWidth: '100%' }
  };

  const baseStyles: Record<string, string | number> = {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 'var(--space-4)',
    paddingRight: 'var(--space-4)',
    ...sizeStyles[size],
    ...style
  };

  return (
    <div 
      className={className}
      style={baseStyles}
    >
      {children}
    </div>
  );
}