export interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: any;
  className?: string;
  style?: Record<string, string | number>;
}

export function Heading({ level, children, className = '', style = {} }: HeadingProps) {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  
  const baseStyles: Record<string, string | number> = {
    fontFamily: 'var(--font-family-sans)',
    fontWeight: 'var(--font-weight-semibold)',
    lineHeight: 'var(--line-height-tight)',
    color: 'var(--color-neutral-900)',
    marginBottom: 'var(--space-4)',
    ...style
  };

  const sizeStyles = {
    1: { fontSize: 'var(--font-size-4xl)' },
    2: { fontSize: 'var(--font-size-3xl)' },
    3: { fontSize: 'var(--font-size-2xl)' },
    4: { fontSize: 'var(--font-size-xl)' },
    5: { fontSize: 'var(--font-size-lg)' },
    6: { fontSize: 'var(--font-size-base)' }
  };

  return (
    <Tag 
      className={className}
      style={{ ...baseStyles, ...sizeStyles[level] }}
    >
      {children}
    </Tag>
  );
}