import React from 'react';

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const baseClasses = "inline-block cursor-pointer rounded-full font-bold leading-none font-sans";
  const sizeClasses = {
    small: "py-2 px-4 text-xs",
    medium: "py-3 px-6 text-sm",
    large: "py-4 px-8 text-base"
  };
  const variantClasses = primary 
    ? "bg-indigo-600 text-white hover:bg-indigo-700" 
    : "bg-transparent text-gray-800 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.15)] hover:bg-gray-100";
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses}`;
  const buttonStyle = backgroundColor ? { backgroundColor } : {};
  return (
    <button
      type="button"
      className={buttonClasses}
      style={buttonStyle}
      {...props}
    >
      {label}
    </button>
  );
};
