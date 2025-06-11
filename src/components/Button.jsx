import React from 'react';

export default function Button({
  children,
  onClick,
  type = 'button',
  className = '',
  variant = 'default', // 'default', 'nav', 'inverse'
}) {
  const baseStyles = 'px-4 py-2 rounded-md transition-colors duration-200 whitespace-nowrap';

    const variants = {
        action: 'bg-[#654321] text-white hover:bg-[#4b2f1a] font-normal px-6 py-3',
        mocha: 'bg-[#FBEBD9] text-black hover:bg-[#654321] hover:text-white font-normal px-6 py-3',
        nav: 'bg-[#FBEBD9] text-black hover:bg-[#f5dcc4] font-normal px-4 py-2',
        inverse: 'bg-[#654321] text-white hover:bg-[#FBEBD9] hover:text-[#654321] font-normal px-6 py-3'
    };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
