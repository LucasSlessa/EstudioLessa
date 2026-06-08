import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  children: React.ReactNode;
}

const shadowPrimary =
  '0 1px 2px 0 rgba(5,26,36,0.1), 0 4px 4px 0 rgba(5,26,36,0.09), 0 9px 6px 0 rgba(5,26,36,0.05), 0 17px 7px 0 rgba(5,26,36,0.01), 0 26px 7px 0 rgba(5,26,36,0), inset 0 2px 8px 0 rgba(255,255,255,0.5)';

const shadowSecondary =
  '0 0 0 0.5px rgba(0,0,0,0.05), 0 4px 30px rgba(0,0,0,0.08)';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  as: Tag = 'button',
  href,
  target,
  children,
  className = '',
  ...rest
}) => {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-all duration-200 cursor-pointer select-none';

  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-[#051A24] text-white hover:opacity-90 active:scale-[0.98]',
    secondary: 'bg-white text-[#051A24] hover:opacity-80 active:scale-[0.98]',
    tertiary: 'bg-white text-[#051A24] hover:opacity-80 active:scale-[0.98]',
  };

  const shadowStyle: Record<ButtonVariant, React.CSSProperties> = {
    primary: { boxShadow: shadowPrimary },
    secondary: { boxShadow: shadowSecondary },
    tertiary: {
      boxShadow:
        `${shadowPrimary.split(',').slice(0, 5).join(',')}, ${shadowSecondary}`,
    },
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (Tag === 'a') {
    return (
      <a href={href} target={target} className={cls} style={shadowStyle[variant]}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} style={{ boxShadow: shadowStyle[variant].boxShadow }} {...rest}>
      {children}
    </button>
  );
};
