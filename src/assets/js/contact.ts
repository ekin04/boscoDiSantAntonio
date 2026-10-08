import { Modal } from "flowbite";

let modalComponent: Modal | null = null;
let currentModalEl: HTMLElement | null = null;

export function getModalInstance(): Modal | null {
  if (typeof document === "undefined") return null;
  const modalEl = document.querySelector("#authentication-modal") as HTMLElement | null;
  if (!modalEl) return null;
  if (!modalComponent || currentModalEl !== modalEl) {
    modalComponent = new Modal(modalEl);
    currentModalEl = modalEl;
  }
  return modalComponent;
}

export function openContactModal() {
  const modal = getModalInstance();
  modal?.show();
}

export function closeContactModal() {
  const modal = getModalInstance();
  modal?.hide();
}

export function toggleContactModal() {
  const modal = getModalInstance();
  modal?.toggle();
}

let isInitialized = false;

export function contact() {
  if (typeof document === "undefined") return;

  if (!isInitialized) {
    isInitialized = true;

    document.addEventListener("click", (e) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const contactBtn = target.closest(".contactButton");
      if (contactBtn) {
        e.preventDefault();
        openContactModal();
        return;
      }

      const closeBtn =
        target.closest("#closeModal") ||
        target.closest('[data-modal-hide="authentication-modal"]');
      if (closeBtn) {
        e.preventDefault();
        closeContactModal();
        return;
      }

      const modalEl = document.querySelector("#authentication-modal");
      if (target === modalEl) {
        closeContactModal();
        return;
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeContactModal();
      }
    });
  }
}