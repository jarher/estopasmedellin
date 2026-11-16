document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.querySelector("#mobile-menu-button");
  const mainNav = document.querySelector("#main-nav");

  if (mobileMenuButton && mainNav) {
    // Selects the menu icon to change it based on the state.
    const menuIcon = mobileMenuButton.querySelector(
      ".material-symbols-outlined",
    );
    // Detects whether the view is already desktop to close the menu automatically.
    const desktopViewport = window.matchMedia("(min-width: 1024px)");

    // Updates the visual and accessible state of the mobile menu.
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

    // Toggles the menu when the mobile button is clicked.
    mobileMenuButton.addEventListener("click", () => {
      setMenuOpen(mobileMenuButton.getAttribute("aria-expanded") !== "true");
    });

    // Closes the menu when a nav link is selected.
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuOpen(false));
    });

    // Closes the menu if a click occurs outside the nav or the button.
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

    // Closes the menu with the Escape key.
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    });

    // If the view switches to desktop, it ensures the mobile menu is closed.
    desktopViewport.addEventListener("change", () => setMenuOpen(false));
  }

  const productImages = document.querySelectorAll("#presentaciones img");

  if (productImages.length > 0) {
    const desktopViewport = window.matchMedia("(min-width: 1024px)");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const imageDialog = document.createElement("dialog");
    const imageFrame = document.createElement("div");
    const closeButton = document.createElement("button");
    const closeIcon = document.createElement("span");
    const enlargedImage = document.createElement("img");
    let activeImage = null;
    let closeTimeout = null;

    imageDialog.className = "product-image-modal";
    imageDialog.setAttribute("aria-label", "Imagen ampliada del producto");
    imageFrame.className = "product-image-modal__frame";
    closeButton.className = "product-image-modal__close";
    closeButton.type = "button";
    closeButton.setAttribute("aria-label", "Cerrar imagen ampliada");
    closeIcon.className = "material-symbols-outlined";
    closeIcon.setAttribute("aria-hidden", "true");
    closeIcon.textContent = "close";
    enlargedImage.className = "product-image-modal__image";

    closeButton.append(closeIcon);
    imageFrame.append(closeButton, enlargedImage);
    imageDialog.append(imageFrame);
    document.body.append(imageDialog);

    const closeImageDialog = (animate = true) => {
      if (!imageDialog.open) {
        return;
      }

      imageDialog.classList.remove("is-visible");
      window.clearTimeout(closeTimeout);

      if (!animate || reducedMotion.matches) {
        imageDialog.close();
        return;
      }

      closeTimeout = window.setTimeout(() => imageDialog.close(), 300);
    };

    const openImageDialog = (image) => {
      if (!desktopViewport.matches || imageDialog.open) {
        return;
      }

      activeImage = image;
      enlargedImage.src = image.currentSrc || image.src;
      enlargedImage.alt = image.alt;
      imageDialog.showModal();

      window.requestAnimationFrame(() => {
        if (imageDialog.open) {
          imageDialog.classList.add("is-visible");
          closeButton.focus();
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
      imageDialog.classList.remove("is-visible");

      if (activeImage && activeImage.isConnected && desktopViewport.matches) {
        activeImage.focus();
      }
      activeImage = null;
    });
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

    desktopViewport.addEventListener("change", (event) => {
      updateImageAccessibility(event.matches);

      if (!event.matches) {
        closeImageDialog(false);
      }
    });

    updateImageAccessibility(desktopViewport.matches);
  }

  // Scroll reveal observer
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

          revealElements.forEach((el) => revealObserver.observe(el));
        } else {
          revealElements.forEach((el) => el.classList.add("revealed"));
        }

        // Show the WhatsApp shortcut once the product section enters the viewport.
        const whatsappWidget = document.querySelector(".wa-widget");
        const productsSection = document.querySelector("#productos");

        if (whatsappWidget && productsSection) {
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
          } else {
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
        }

        // Active link highlighting on scroll
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
              if (
                scrollY >= sectionTop &&
                scrollY < sectionTop + sectionHeight
              ) {
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

        // Smooth single-open behavior for FAQ details
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
      });