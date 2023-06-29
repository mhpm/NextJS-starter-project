import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const FlyOut = ({ children, className = '' }: Props) => {
  return (
    <div className="fixed z-50 backdrop-blur bg-black/50 w-screen h-full flex justify-center items-center">
      <div
        className={`w-3/4 md:w-1/2 lg:w-1/3 rounded-lg overflow-hidden bg-neutral-600 border-[1px] border-neutral-500 ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

FlyOut.Header = function Header({ children, className = '' }: Props) {
  return (
    <div className={`bg-neutral-800 p-4 text-center text-2xl ${className}`}>
      {children}
    </div>
  );
};

FlyOut.Body = function Body({ children, className = '' }: Props) {
  return <div className={`p-6 ${className}`}>{children}</div>;
};

FlyOut.Footer = function Footer({ children, className = '' }: Props) {
  return (
    <div
      className={`flex justify-around border-t border-neutral-500 p-4 m-2 ${className}`}
    >
      {children}
    </div>
  );
};

export default FlyOut;
