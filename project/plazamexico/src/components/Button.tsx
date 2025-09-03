import React from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

type Props =
  | ({ to: string; href?: never; onClick?: never } & BaseProps)
  | ({ href: string; to?: never; onClick?: never } & BaseProps)
  | ({ onClick: () => void; to?: never; href?: never } & BaseProps);

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
  target?: string;
  rel?: string;
};

const sizeMap: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-xl',
  md: 'px-5 py-2.5 text-base rounded-2xl',
  lg: 'px-7 py-3.5 text-lg rounded-full',
};

const variantMap: Record<Variant, string> = {
  primary:
    'bg-chili text-white shadow-sm hover:shadow-md hover:bg-chili/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chili',
  outline:
    'border border-chili text-chili hover:bg-chili/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chili',
  ghost:
    'text-white/90 hover:text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
};

function Button(props: Props) {
  const { children, className = '', variant = 'primary', size = 'md' } = props;
  const classes = `${sizeMap[size]} ${variantMap[variant]} transition-all duration-200 inline-flex items-center justify-center gap-2 ${className}`;

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    );
  }
  if ('href' in props && props.href) {
    return (
      <a href={props.href} target={props.target} rel={props.rel} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={'onClick' in props ? props.onClick : undefined} className={classes}>
      {children}
    </button>
  );
}

export default Button;
