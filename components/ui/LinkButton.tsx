import Link from "next/link";
import React from "react";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
}

const LinkButton = ({ href, children }: LinkButtonProps) => {
  return (
    <Link
      href={href}
      className="bg-primary text-white hover:bg-opacity-70 py-2 px-4 rounded"
    >
      {children}
    </Link>
  );
};

export default LinkButton;
