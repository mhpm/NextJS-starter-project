import { useMemo, ComponentPropsWithoutRef } from 'react';

type ButtonProps = {
  /**
   * variation of button'style
   */
  variation?: 'primary' | 'secondary';
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label?: string;
  /**
   * Button loading
   */
  loading?: boolean;
  /**
   * Button disabled
   */
  disable?: boolean;
  /**
   * Button custom classes
   */
  className?: string;
  /**
   * Button children content
   */
  children?: React.ReactNode;
  /**
   * Button click handler
   */
  onClick?: () => void;
} & ComponentPropsWithoutRef<'button'>;

const sizes: any = {
  small: 'px-4 py-1 text-sm',
  medium: 'px-6 py-2',
  large: 'px-8 py-3 text-lg',
};

const variations: any = {
  primary: 'bg-primary active:bg-primary/80',
  secondary: 'bg-secondary active:bg-secondary/70',
};

/**
 * Primary UI component for user interaction
 */
const Button = ({
  variation = 'primary',
  size = 'medium',
  label,
  loading = false,
  disable = false,
  className = '',
  children,
  onClick,
}: ButtonProps): JSX.Element => {
  console.log('Button');

  const computedClasses = useMemo(() => {
    const variationClass = variations[variation];
    const sizeClass = sizes[size];

    return [variationClass, sizeClass].join(' ');
  }, [variation, size]);

  return (
    <button
      disabled={disable || loading}
      type="button"
      className={`rounded-md border-none ${computedClasses} ${className}`}
      onClick={onClick}
    >
      {loading ? 'loading...' : label ? label : children}
    </button>
  );
};

export default Button;
