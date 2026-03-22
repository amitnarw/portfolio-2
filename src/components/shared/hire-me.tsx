"use client";

import { PremiumButton } from "./premium-button";

export function HireMe({
  reverse = false,
  className,
  textClassName,
}: {
  reverse?: boolean;
  className?: string;
  textClassName?: string;
}) {
  const openMail = () => {
    window.open("mailto:amitnarwal115@gmail.com");
  };
  return (
    <PremiumButton
      text="Hire Me"
      reverse={reverse}
      onClick={openMail}
      className={className}
      textClassName={textClassName}
    />
  );
}
