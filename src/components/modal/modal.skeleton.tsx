import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({
  children,
  className = '',
  onClick,
}: { onClick?: () => void } & Props) => {
  return (
    <div
      onClick={onClick}
      className="fixed z-10 backdrop-blur bg-black/50 w-full h-screen flex justify-center items-center"
    >
      <div
        className={`w-3/4 md:w-1/2 lg:w-1/3 text-center absolute rounded-md overflow-hidden bg-neutral-600 border-[1px] border-neutral-500 ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export const Header = function Header({ children, className = '' }: Props) {
  return (
    <div className={`border-b border-neutral-500 p-2 ${className}`}>
      {children}
    </div>
  );
};

export const Body = function Body({ children, className = '' }: Props) {
  return (
    <div className={`p-4 max-h-[80vh] overflow-y-scroll ${className}`}>
      {children}
    </div>
  );
};

export const Footer = function Footer({ children, className = '' }: Props) {
  return (
    <div className={`border-t border-neutral-500 p-4 ${className}`}>
      {children}
    </div>
  );
};
