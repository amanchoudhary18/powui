import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import './Button.css';
import { Spinner } from './Spinner';

/** Mirrors theme.ts's button-shaped entries; ghost/link aren't wired up yet. */
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'gamma'
  | 'vision'
  | 'villain'
  | 'cosmic'
  | 'mutant'
  | 'vibranium';

export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonShadow = 'none' | 'sm' | 'md' | 'lg';

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'disabled'
> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shadow?: ButtonShadow;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
};

const variantClass: Record<ButtonVariant, string> = {
  primary: 'pow-button-variant-primary',
  secondary: 'pow-button-variant-secondary',
  outline: 'pow-button-variant-outline',
  gamma: 'pow-button-variant-gamma',
  vision: 'pow-button-variant-vision',
  villain: 'pow-button-variant-villain',
  cosmic: 'pow-button-variant-cosmic',
  mutant: 'pow-button-variant-mutant',
  vibranium: 'pow-button-variant-vibranium',
};

const sizeClass: Record<ButtonSize, string> = {
  sm: 'pow-button-size-sm',
  md: 'pow-button-size-md',
  lg: 'pow-button-size-lg',
};

const shadowClass: Record<ButtonShadow, string> = {
  none: 'pow-button-shadow-none',
  sm: 'pow-button-shadow-sm',
  md: 'pow-button-shadow-md',
  lg: 'pow-button-shadow-lg',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = 'primary',
      size = 'md',
      shadow = 'sm',
      leadingIcon,
      trailingIcon,
      loading = false,
      disabled = false,
      type = 'button',
      className,
      children,
      ...rest
    },
    ref,
  ) {
    const isDisabled = disabled || loading;
    const classes = [
      'pow-button',
      variantClass[variant],
      sizeClass[size],
      shadowClass[shadow],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        {...rest}
        ref={ref}
        type={type}
        className={classes}
        disabled={isDisabled}
        aria-busy={loading || undefined}
      >
        {loading ? (
          <Spinner className="pow-button-spinner" />
        ) : (
          leadingIcon && <span className="pow-button-icon">{leadingIcon}</span>
        )}
        {children}
        {!loading && trailingIcon && (
          <span className="pow-button-icon">{trailingIcon}</span>
        )}
      </button>
    );
  },
);
