import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const CardLayout = ({ children, className = "" }: Props) => {
  return (
    <div
      className={`relative bg-custom-gray-900 rounded-2xl p-2 flex flex-col border border-custom-gray-800 hover:border-custom-gray-600 shadow-lg transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default CardLayout;
