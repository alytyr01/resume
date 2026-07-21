import * as React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'secondary' | 'destructive';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const variantStyles: Record<string, React.CSSProperties> = {
  default: {
    background: '#0f172a',
    color: '#fff',
    border: 'none',
    boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
  },
  secondary: {
    background: '#F1F5F9',
    color: '#0f172a',
    border: 'none',
  },
  outline: {
    background: 'transparent',
    color: '#0f172a',
    border: '1.5px solid #E2E8F0',
  },
  ghost: {
    background: 'transparent',
    color: '#64748b',
    border: 'none',
  },
  destructive: {
    background: '#DC2626',
    color: '#fff',
    border: 'none',
  },
};

const sizeStyles: Record<string, React.CSSProperties> = {
  default: { height: 40, padding: '8px 16px', fontSize: 14 },
  sm: { height: 32, padding: '4px 12px', fontSize: 13 },
  lg: { height: 48, padding: '12px 32px', fontSize: 16 },
  icon: { height: 36, width: 36, padding: 0 },
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', size = 'default', style, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          whiteSpace: 'nowrap',
          borderRadius: 8,
          fontWeight: 500,
          fontFamily: 'sans-serif',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.5 : 1,
          transition: 'all 0.15s ease',
          lineHeight: 1,
          ...variantStyles[variant],
          ...sizeStyles[size],
          ...style,
        }}
        onMouseEnter={(e) => {
          if (!disabled && variant === 'default') {
            e.currentTarget.style.background = '#1e293b';
          }
        }}
        onMouseLeave={(e) => {
          if (!disabled && variant === 'default') {
            e.currentTarget.style.background = '#0f172a';
          }
        }}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
export type { ButtonProps };