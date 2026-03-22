import { cn } from "@/lib/utils";
import React, { ComponentPropsWithoutRef } from "react";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply to the container.
   */
  className?: string;
  /**
   * Reverse the direction of the marquee.
   * @default false
   */
  reverse?: boolean;
  /**
   * Pause the marquee when hovering over it.
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * The content to loop and scroll.
   */
  children?: React.ReactNode;
  /**
   * Scroll vertically instead of horizontally.
   * @default false
   */
  vertical?: boolean;
  /**
   * The number of times to duplicate the children to ensure seamless looping.
   * Expand this number if there is empty space at the end of the marquee.
   * @default 4
   */
  repeat?: number;
  /**
   * Apply edge fading via CSS mask.
   * @default false
   */
  fade?: boolean;
  /**
   * The duration of the animation in seconds.
   * @default 40
   */
  duration?: number;
  /**
   * The gap between items in rem.
   * @default 1
   */
  gap?: number;
  /**
   * Optional array of items to render. Useful for rendering a list mapping easily.
   */
  items?: React.ReactNode[];
  /**
   * Vertical (or horizontal if vertical=true) alignment of items.
   * @default "center"
   */
  align?: "start" | "center" | "end" | "stretch";
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  fade = false,
  duration = 40,
  gap = 1,
  items,
  align = "center",
  style,
  ...props
}: MarqueeProps) {
  // Use either the `items` array or extract children into an array
  const elements = items || React.Children.toArray(children);

  // Map each individual item into a flex shrink-0 container
  const content = elements.map((item: React.ReactNode, idx: number) => (
    <div key={idx} className="shrink-0 flex items-center justify-center">
      {item}
    </div>
  ));

  return (
    <div
      {...props}
      style={
        {
          "--duration": `${duration}s`,
          "--gap": `${gap}rem`,
          ...style,
        } as React.CSSProperties
      }
      className={cn(
        "group flex overflow-hidden p-2 gap-(--gap)",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
          "items-start": align === "start",
          "items-center": align === "center",
          "items-end": align === "end",
          "items-stretch": align === "stretch",
        },
        fade &&
          (vertical
            ? "mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
            : "mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"),
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            // Removed justify-around to strictly enforce the requested `--gap` between all items
            className={cn("flex shrink-0 gap-(--gap)", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:paused": pauseOnHover,
              "direction-[reverse]": reverse,
              "items-start": align === "start",
              "items-center": align === "center",
              "items-end": align === "end",
              "items-stretch": align === "stretch",
            })}
          >
            {content}
          </div>
        ))}
    </div>
  );
}
