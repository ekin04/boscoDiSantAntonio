export function toggle(buttonSelector: string, menuSelector: string) {
  const buttonElement: HTMLElement | null = document.querySelector(buttonSelector);
  const menuElement: HTMLElement | null = document.querySelector(menuSelector);

  if (buttonElement && menuElement) {
    const handler = () => {
      const isHidden = menuElement.classList.toggle("hidden");
      buttonElement.setAttribute("aria-expanded", String(!isHidden));
    };

    if ((buttonElement as any)._toggleHandler) {
      buttonElement.removeEventListener("click", (buttonElement as any)._toggleHandler);
    }
    (buttonElement as any)._toggleHandler = handler;
    buttonElement.addEventListener("click", handler);
  }
}

