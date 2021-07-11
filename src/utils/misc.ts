// Viewport breakpoint from desktop to mobile/tablet in px
export const breakpoint = 959;

// Scroll behaviour when clicking nav links
export const scrollWithOffset = (el: HTMLElement) => {
  setTimeout(() => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -15;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  }, 200);
};
