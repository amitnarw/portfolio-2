import type { SVGProps } from "react";

type MarqueeStarProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export default function MarqueeStar({
  size = 20,
  className,
  ...props
}: MarqueeStarProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M 100,10 
           L 106.89,83.37 
           L 133.94,66.06 
           L 116.63,93.11 
           L 190,100 
           L 116.63,106.89 
           L 133.94,133.94 
           L 106.89,116.63 
           L 100,190 
           L 93.11,116.63 
           L 66.06,133.94 
           L 83.37,106.89 
           L 10,100 
           L 83.37,93.11 
           L 66.06,66.06 
           L 93.11,83.37 Z"
        fill="currentColor"
      />
    </svg>
  );
}
