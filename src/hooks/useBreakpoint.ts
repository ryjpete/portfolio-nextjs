function useBreakpoint(): "mobile" | "landscape" | "default" {
  // Check matchMedia — no re-render on resize, only on breakpoint crossing
  const isMobile = useMediaQuery("(max-width: 640px) and (orientation: portrait)");
  const isLandscape = useMediaQuery("(orientation: landscape) and (max-height: 500px)");
  if (isMobile) return "mobile";
  if (isLandscape) return "landscape";
  return "default";
}
