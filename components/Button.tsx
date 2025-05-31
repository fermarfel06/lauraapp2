import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  to?: string; // For react-router Link
  variant?: 'primary' | 'secondary' | 'outline';
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  to,
  variant = 'primary',
  type = 'button',
  className = '',
  disabled = false
}) => {
  const baseStyles = "px-8 py-3 font-semibold rounded-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantStyles = {
    primary: "bg-[#E8B040] text-[#0E0E0E] hover:bg-opacity-90 focus:ring-[#E8B040]", // Hunyadi Yellow with Night Black text
    secondary: "bg-[#C6A664] text-[#0E0E0E] hover:bg-opacity-90 focus:ring-[#C6A664]", // Ecru with Night Black text
    outline: "bg-transparent text-[#0E0E0E] border-2 border-[#C6A664] hover:bg-[#C6A664] hover:text-[#FFFFFF] focus:ring-[#C6A664]",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed";

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${disabled ? disabledStyles : ''} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClassName} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
