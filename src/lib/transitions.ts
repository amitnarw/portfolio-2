/**
 * Exact page slide transition extracted from sohub.digital
 * Uses native View Transitions API with Web Animations API
 */
export function slideInOut(
  isWorkPage = false,
  { reducedMotion = false }: { reducedMotion?: boolean } = {}
) {
  if (reducedMotion || typeof document === "undefined") return;

  if (document.documentElement.animate) {
    try {
      // 1. Old page: brightness down, blur out, slight translateY upwards
      document.documentElement.animate(
        [
          { filter: "brightness(1) blur(0px)", transform: "translateY(0)" },
          { filter: "brightness(0.1) blur(16px)", transform: "translateY(-35%)" },
        ],
        {
          duration: 1200,
          easing: "cubic-bezier(0.86, 0, 0.07, 1)",
          fill: "forwards",
          pseudoElement: "::view-transition-old(root)",
        }
      );

      // 2. View transition background flash
      document.documentElement.animate(
        [
          { backgroundColor: isWorkPage ? "rgba(12, 16, 22, 1)" : "#f0f6f8" },
          { backgroundColor: isWorkPage ? "rgba(12, 16, 22, 0.1)" : "#181919" },
        ],
        {
          duration: 1200,
          easing: "cubic-bezier(0.86, 0, 0.07, 1)",
          fill: "both",
          pseudoElement: "::view-transition",
        }
      );

      // 3. New page: sliding up from 100% with scale(0.85) up to scale(1)
      document.documentElement.animate(
        [
          { transform: "translateY(100%) scale(0.85)" },
          { transform: "translateY(0) scale(1)" },
        ],
        {
          duration: 1200,
          easing: "cubic-bezier(0.86, 0, 0.07, 1)",
          fill: "forwards",
          pseudoElement: "::view-transition-new(root)",
        }
      );

      // 4. Smooth rounding of the incoming screen corners
      document.documentElement.animate(
        [{ borderRadius: "4rem" }, { borderRadius: "0" }],
        {
          delay: 800,
          duration: 400,
          easing: "ease-out",
          fill: "forwards",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    } catch (e) {
      console.warn("View transition animation failed:", e);
    }
  }
}

/**
 * Robust navigation trigger executing sohub.digital slide transition
 */
export function navigateWithSlide(
  targetUrl: string,
  router: any,
  isWorkPage = false
) {
  if (typeof document !== "undefined" && "startViewTransition" in document) {
    try {
      const transition = (document as any).startViewTransition(async () => {
        router.push(targetUrl, { scroll: false });
        // Give Next.js router a frame to commit the route change
        await new Promise((resolve) => setTimeout(resolve, 80));
      });

      if (transition && transition.ready) {
        transition.ready.then(() => {
          slideInOut(isWorkPage);
        });
      }
      return;
    } catch {
      // Fallback to normal navigation
    }
  }

  router.push(targetUrl);
}
