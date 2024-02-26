import Link from "next/link";
import React from "react";

interface LinkButtonProps {
  to: string;
  children: React.ReactNode;
}

const LinkButton = ({ to, children }: LinkButtonProps) => {
  return (
    <Link
      href={to}
      className="bg-primary text-white hover:bg-opacity-70 py-2 px-4 rounded"
    >
      {children}
    </Link>
  );
};

export default LinkButton;
