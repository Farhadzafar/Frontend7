import React from "react";
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  paddingY?: string;
}

export default function Section({
  children,
  className,
  bgColor = "bg-white",
  paddingY = "py-20",
}: SectionProps) {
  return (
    <section className={`${paddingY} ${bgColor} ${className}`}>
      <div className="max-w-6xl mx-auto px-4">{children}</div>
    </section>
  );
}
