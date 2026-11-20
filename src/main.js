function initializeMobileNavigation() {
  const mobileMenuButton = document.querySelector("#mobile-menu-button");
  const mainNav = document.querySelector("#main-nav");

  if (!mobileMenuButton || !mainNav) {
    return;
  }

  const menuIcon = mobileMenuButton.querySelector(
    ".material-symbols-outlined",
  );
  const desktopViewport = window.matchMedia("(min-width: 1024px)");

  const setMenuOpen = (isOpen) => {
    mainNav.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
    mobileMenuButton.setAttribute("aria-expanded", String(isOpen));
    mobileMenuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu",
    );
    if (menuIcon) {
      menuIcon.textContent = isOpen ? "close" : "menu";
    }
  };

  mobileMenuButton.addEventListener("click", () => {
    setMenuOpen(mobileMenuButton.getAttribute("aria-expanded") !== "true");
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (
      target instanceof Node &&
      !mainNav.contains(target) &&
      !mobileMenuButton.contains(target)
    ) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuOpen(false);
    }
  });

  desktopViewport.addEventListener("change", () => setMenuOpen(false));
}

function initializeProductImageModal() {
  const productImages = document.querySelectorAll("#presentaciones img");
  const imageDialog = document.querySelector("#product-image-modal");
  const imageFrame = document.querySelector("#product-image-modal-frame");
  const closeButton = document.querySelector("#product-image-modal-close");
  const enlargedImage = document.querySelector("#product-image-modal-image");

  if (
    productImages.length === 0 ||
    !imageDialog ||
    !imageFrame ||
    !closeButton ||
    !enlargedImage
  ) {
    return;
  }

  const desktopViewport = window.matchMedia("(min-width: 1024px)");
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  );
  let activeImage = null;
  let closeTimeout = null;

  const setImageDialogVisible = (isVisible) => {
    imageDialog.classList.toggle("opacity-0", !isVisible);
    imageDialog.classList.toggle("opacity-100", isVisible);
    imageDialog.classList.toggle("scale-[0.985]", !isVisible);
    imageDialog.classList.toggle("scale-100", isVisible);
    imageDialog.classList.toggle("backdrop:bg-black/0", !isVisible);
    imageDialog.classList.toggle("backdrop:bg-black/50", isVisible);
    imageFrame.classList.toggle("opacity-0", !isVisible);
    imageFrame.classList.toggle("opacity-100", isVisible);
    imageFrame.classList.toggle("scale-[0.94]", !isVisible);
    imageFrame.classList.toggle("scale-100", isVisible);
  };

  const closeImageDialog = (animate = true) => {
    if (!imageDialog.open) {
      return;
    }

    setImageDialogVisible(false);
    window.clearTimeout(closeTimeout);

    if (!animate || reducedMotion.matches) {
      imageDialog.close();
      imageDialog.classList.add("hidden");
      return;
    }

    closeTimeout = window.setTimeout(() => {
      imageDialog.close();
      imageDialog.classList.add("hidden");
    }, 300);
  };

  const openImageDialog = (image) => {
    if (!desktopViewport.matches || imageDialog.open) {
      return;
    }

    activeImage = image;
    enlargedImage.src = image.currentSrc || image.src;
    enlargedImage.alt = image.alt;
    imageDialog.classList.remove("hidden");
    imageDialog.showModal();

    window.requestAnimationFrame(() => {
      if (imageDialog.open) {
        setImageDialogVisible(true);
        closeButton.focus();
      }
    });
  };

  const updateImageAccessibility = (isDesktop) => {
    productImages.forEach((image) => {
      if (isDesktop) {
        image.tabIndex = 0;
        image.setAttribute("role", "button");
        image.setAttribute(
          "aria-label",
          `Ampliar imagen: ${image.alt || "producto"}`,
        );
      } else {
        image.removeAttribute("tabindex");
        image.removeAttribute("role");
        image.removeAttribute("aria-label");
      }
    });
  };

  productImages.forEach((image) => {
    image.addEventListener("click", () => openImageDialog(image));
    image.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openImageDialog(image);
      }
    });
  });

  closeButton.addEventListener("click", () => closeImageDialog());
  imageDialog.addEventListener("click", (event) => {
    if (event.target === imageDialog) {
      closeImageDialog();
    }
  });
  imageDialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeImageDialog();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && imageDialog.open) {
      event.preventDefault();
      closeImageDialog();
    }
  });
  imageDialog.addEventListener("close", () => {
    window.clearTimeout(closeTimeout);
    imageDialog.classList.add("hidden");
    setImageDialogVisible(false);

    if (activeImage && activeImage.isConnected && desktopViewport.matches) {
      activeImage.focus();
    }
    activeImage = null;
  });

  desktopViewport.addEventListener("change", (event) => {
    updateImageAccessibility(event.matches);

    if (!event.matches) {
      closeImageDialog(false);
    }
  });

  updateImageAccessibility(desktopViewport.matches);
}

function initializeScrollRevealEffects() {
  const revealElements = document.querySelectorAll(".reveal-on-scroll");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("revealed"));
  }
}

function initializeWhatsAppWidgetVisibility() {
  const whatsappWidget = document.querySelector(".wa-widget");
  const productsSection = document.querySelector("#productos");

  if (!whatsappWidget || !productsSection) {
    return;
  }

  if ("IntersectionObserver" in window) {
    const whatsappObserver = new IntersectionObserver(
      (entries, observer) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          whatsappWidget.classList.add("is-visible");
          observer.disconnect();
        }
      },
    );
    whatsappObserver.observe(productsSection);
    return;
  }

  const revealWhatsappWidget = () => {
    if (productsSection.getBoundingClientRect().top <= window.innerHeight) {
      whatsappWidget.classList.add("is-visible");
      window.removeEventListener("scroll", revealWhatsappWidget);
    }
  };

  window.addEventListener("scroll", revealWhatsappWidget, {
    passive: true,
  });
  revealWhatsappWidget();
}

function initializeActiveNavigation() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener(
    "scroll",
    () => {
      let current = "";
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active", "text-primary");
        link.classList.add("text-on-surface-variant");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active", "text-primary");
          link.classList.remove("text-on-surface-variant");
        }
      });
    },
    { passive: true },
  );
}

function initializeFaqAccordion() {
  const faqDetails = document.querySelectorAll("#faq details");

  faqDetails.forEach((detail) => {
    detail.addEventListener("toggle", () => {
      if (detail.open) {
        faqDetails.forEach((otherDetail) => {
          if (otherDetail !== detail && otherDetail.open) {
            otherDetail.removeAttribute("open");
          }
        });
      }
    });
  });
}

function initializeProcessVideoPlayback() {
  const video = document.querySelector("#proceso video");
  const videoSection = document.getElementById("proceso");

  if (!video || !videoSection) {
    return;
  }

  let isSectionVisible = false;
  let shouldResume = false;
  let automaticPause = false;

  const syncPlayback = () => {
    if (!isSectionVisible || document.hidden) {
      if (!video.paused) {
        shouldResume = true;
        automaticPause = true;
        video.pause();
      }
      return;
    }

    if (shouldResume && video.paused) {
      video.play().catch(() => {});
    }
  };

  video.addEventListener("play", () => {
    shouldResume = true;
    syncPlayback();
  });
  video.addEventListener("pause", () => {
    if (automaticPause) {
      automaticPause = false;
    } else {
      shouldResume = false;
    }
  });

  document.addEventListener("visibilitychange", syncPlayback);
  new IntersectionObserver(
    ([entry]) => {
      isSectionVisible = entry.isIntersecting;
      syncPlayback();
    },
    { threshold: 0.15 },
  ).observe(videoSection);
}

function initializeCompanyYearsCounter() {
  const yearsCounter = document.querySelector("#company-years-counter");

  if (!yearsCounter) {
    return;
  }

  const foundingYear = 1982;
  yearsCounter.textContent = `${new Date().getFullYear() - foundingYear}+`;
}

document.addEventListener("DOMContentLoaded", () => {
  initializeMobileNavigation();
  initializeProductImageModal();
  initializeScrollRevealEffects();
  initializeWhatsAppWidgetVisibility();
  initializeActiveNavigation();
  initializeFaqAccordion();
  initializeProcessVideoPlayback();
  initializeCompanyYearsCounter();
});
