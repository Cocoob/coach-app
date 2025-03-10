import React from "react";
import Link from "next/link";

type CustomLinkProps = {
  href: string;
  text: string;
};

const CustomLink: React.FC<CustomLinkProps> = ({ href, text }) => {
  return (
    <Link href={href} className="text-[var(--color-fitness)] hover:underline">
      {text}
    </Link>
  );
};

export default CustomLink;
