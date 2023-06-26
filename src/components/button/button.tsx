import { useMemo, ComponentPropsWithoutRef } from 'react';

interface ButtonProps {
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
  label: string;
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
   * Optional click handler
   */
  onClick?: () => void;
}

const sizes: any = {
  small: 'px-4 py-1 text-sm',
  medium: 'px-6 py-2',
  large: 'px-8 py-3 text-lg',
};

const variations: any = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
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
}: ButtonProps): JSX.Element => {
  const computedClasses = useMemo(() => {
    const variationClass = variations[variation];
    const sizeClass = sizes[size];

    return [variationClass, sizeClass].join(' ');
  }, [variation, size]);

  return (
    <button
      disabled={disable || loading}
      type="button"
      className={`rounded-md ${computedClasses} ${className}`}
    >
      {loading ? 'loading...' : label}
    </button>
  );
};

export default Button;
