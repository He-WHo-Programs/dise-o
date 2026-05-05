import { motion, useReducedMotion } from "framer-motion";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type LandingButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "accent" | "ghost" | "ghost-dark";
};

export default function LandingButton({
  children,
  className = "",
  variant = "primary",
  ...props
}: LandingButtonProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      className={`landing-button landing-button-${variant} ${className}`}
      whileHover={reduceMotion ? undefined : { y: -2 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 22 }}
      {...props}
    >
      {children}
    </motion.a>
  );
}
