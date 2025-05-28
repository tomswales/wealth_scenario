export interface GridProps {
  children: any;
  columns?: number | 'auto-fit' | 'auto-fill';
  gap?: 'none' | 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  minWidth?: string;
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
  responsive?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  className?: string;
  style?: Record<string, string | number>;
}

export interface GridItemProps {
  children: any;
  span?: number | 'full';
  start?: number;
  end?: number;
  className?: string;
  style?: Record<string, string | number>;
}

// Main Grid Component
export function Grid({
  children,
  columns = 'auto-fit',
  gap = 'base',
  minWidth = '250px',
  align = 'stretch',
  justify = 'start',
  responsive,
  className = '',
  style = {}
}: GridProps) {
  
  const gapStyles = {
    none: '0',
    xs: 'var(--space-1)',
    sm: 'var(--space-2)',
    base: 'var(--space-4)',
    lg: 'var(--space-6)',
    xl: 'var(--space-8)'
  };

  const getGridTemplateColumns = () => {
    if (typeof columns === 'number') {
      return `repeat(${columns}, 1fr)`;
    }
    
    if (columns === 'auto-fit' || columns === 'auto-fill') {
      return `repeat(${columns}, minmax(${minWidth}, 1fr))`;
    }
    
    return columns;
  };

  const baseStyles: Record<string, string | number> = {
    display: 'grid',
    gridTemplateColumns: getGridTemplateColumns(),
    gap: gapStyles[gap],
    alignItems: align,
    justifyContent: justify,
    width: '100%',
    ...style
  };

  // Add responsive grid template columns
  const responsiveStyles: Record<string, string> = {};
  if (responsive) {
    if (responsive.sm) {
      responsiveStyles['@media (min-width: 640px)'] = `repeat(${responsive.sm}, 1fr)`;
    }
    if (responsive.md) {
      responsiveStyles['@media (min-width: 768px)'] = `repeat(${responsive.md}, 1fr)`;
    } 
    if (responsive.lg) {
      responsiveStyles['@media (min-width: 1024px)'] = `repeat(${responsive.lg}, 1fr)`;
    }
    if (responsive.xl) {
      responsiveStyles['@media (min-width: 1280px)'] = `repeat(${responsive.xl}, 1fr)`;
    }
  }

  return (
    <div
      className={className}
      style={baseStyles}
    >
      {children}
    </div>
  );
}

// Grid Item Component
export function GridItem({
  children,
  span = 1,
  start,
  end,
  className = '',
  style = {}
}: GridItemProps) {
  
  const baseStyles: Record<string, string | number> = {
    ...style
  };

  // Handle grid column span
  if (span === 'full') {
    baseStyles.gridColumn = '1 / -1';
  } else if (typeof span === 'number' && span > 1) {
    baseStyles.gridColumn = `span ${span}`;
  }

  // Handle specific start/end positions
  if (start && end) {
    baseStyles.gridColumn = `${start} / ${end}`;
  } else if (start) {
    baseStyles.gridColumnStart = start;
  } else if (end) {
    baseStyles.gridColumnEnd = end;
  }

  return (
    <div
      className={className}
      style={baseStyles}
    >
      {children}
    </div>
  );
}