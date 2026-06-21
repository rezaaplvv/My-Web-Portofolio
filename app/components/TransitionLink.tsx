"use client";

import React from "react";
import { usePageTransition } from "./PageTransitionProvider";

interface TransitionLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export default function TransitionLink({ href, children, ...props }: TransitionLinkProps) {
  const transition = usePageTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // Jika berupa tautan hash/anchor internal (misal #services), jalankan behavior bawaan browser
    if (href.startsWith("#")) {
      return;
    }

    e.preventDefault();
    transition.triggerTransition(href);
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
