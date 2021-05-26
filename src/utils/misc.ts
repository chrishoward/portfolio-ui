export const breakpoint = 959;

export const scrollWithOffset = (el: HTMLElement) => {
  setTimeout(() => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -15;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  }, 200);
};
