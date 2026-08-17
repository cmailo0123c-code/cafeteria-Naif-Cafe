/**
 * Naif Café Las Condes — main.js
 * All content is rendered from window.cafeConfig (js/data.js) so the
 * markup never hardcodes business info in more than one place.
 *
 * PLACEHOLDER PHOTOGRAPHY NOTE
 * -----------------------------------------------------------------
 * cafeConfig.gallery items and the hero/coffee/final-cta backgrounds
 * currently render as textured placeholder panels (see .ph-block /
 * .hero__placeholder in styles.css) because no real photography was
 * supplied. To go live:
 *   1. Add real photo files (optimized WebP/AVIF, correct aspect ratio).
 *   2. Set `src` on each cafeConfig.gallery item.
 *   3. Swap the .hero__placeholder / .ph-block divs for <img> or
 *      <picture> elements using those files (srcset + sizes, lazy
 *      loading below the fold, preload only on the hero image).
 * -----------------------------------------------------------------
 */
(function () {
  "use strict";

  const cfg = window.cafeConfig;
  if (!cfg) return;

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  /* ============================================================
     Render: Nav
     ============================================================ */
  function renderNav() {
    const navHTML = cfg.nav
      .map((item) => `<a href="${item.href}">${item.label}</a>`)
      .join("");
    $("#navLinks").innerHTML = navHTML;
    $("#mobileNavLinks").innerHTML = navHTML;
  }

  /* ============================================================
     Render: Hero
     ============================================================ */
  function renderHero() {
    $("#heroEyebrow").textContent = cfg.hero.eyebrow;
    $("#heroTitle").textContent = cfg.hero.title;
    $("#heroSubtitle").textContent = cfg.hero.subtitle;
    $("#heroCta").textContent = cfg.hero.cta;
    $("#heroCtaSecondary").textContent = cfg.hero.ctaSecondary;
  }

  /* ============================================================
     Render: Experience + Coffee + Why + Final CTA
     ============================================================ */
  function renderTextSections() {
    $("#expEyebrow").textContent = cfg.experience.eyebrow;
    $("#expTitle").textContent = cfg.experience.title;
    $("#expBody").textContent = cfg.experience.body;

    $("#coffeeEyebrow").textContent = cfg.coffeeSection.eyebrow;
    $("#coffeeTitle").textContent = cfg.coffeeSection.title;
    $("#coffeeBody").textContent = cfg.coffeeSection.body;

    $("#whyEyebrow").textContent = cfg.whyNaif.eyebrow;
    $("#whyGrid").innerHTML = cfg.whyNaif.items
      .map((i) => `<div class="why__item reveal"><h3>${i.title}</h3><p>${i.body}</p></div>`)
      .join("");

    $("#finalCtaTitle").textContent = cfg.finalCta.title;
    $("#finalCtaPrimary").textContent = cfg.finalCta.ctaPrimary;
    $("#finalCtaSecondary").textContent = cfg.finalCta.ctaSecondary;
  }

  /* ============================================================
     Render: Gallery
     ============================================================ */
  function renderGallery() {
    const grid = $("#galleryGrid");
    grid.innerHTML = cfg.gallery
      .map(
        (item, i) => `
      <div class="gallery__item reveal" data-size="${item.size}" data-index="${i}" role="button" tabindex="0" aria-label="Ver fotografía: ${item.alt}">
        <span class="gallery__tag">${item.tag}</span>
        <div class="ph-block"><span class="ph-caption">${item.alt}</span></div>
      </div>`
      )
      .join("");

    $$(".gallery__item", grid).forEach((el) => {
      el.addEventListener("click", () => openLightbox(Number(el.dataset.index)));
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(Number(el.dataset.index));
        }
      });
    });
  }

  /* ============================================================
     Lightbox
     ============================================================ */
  let lightboxIndex = 0;
  function openLightbox(index) {
    lightboxIndex = index;
    renderLightboxFigure();
    const lb = $("#lightbox");
    lb.hidden = false;
    document.body.style.overflow = "hidden";
    $("#lightboxClose").focus();
  }
  function closeLightbox() {
    $("#lightbox").hidden = true;
    document.body.style.overflow = "";
  }
  function renderLightboxFigure() {
    const item = cfg.gallery[lightboxIndex];
    $("#lightboxFigure").innerHTML = `<div class="ph-block"><span class="ph-caption">${item.alt}</span></div>`;
  }
  function stepLightbox(delta) {
    lightboxIndex = (lightboxIndex + delta + cfg.gallery.length) % cfg.gallery.length;
    renderLightboxFigure();
  }

  function initLightbox() {
    $("#lightboxClose").addEventListener("click", closeLightbox);
    $("#lightboxPrev").addEventListener("click", () => stepLightbox(-1));
    $("#lightboxNext").addEventListener("click", () => stepLightbox(1));
    document.addEventListener("keydown", (e) => {
      if ($("#lightbox").hidden) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") stepLightbox(-1);
      if (e.key === "ArrowRight") stepLightbox(1);
    });
    $("#lightbox").addEventListener("click", (e) => {
      if (e.target.id === "lightbox") closeLightbox();
    });
  }

  /* ============================================================
     Render: Menu tabs + panels
     ============================================================ */
  function renderMenu() {
    const tabsEl = $("#menuTabs");
    const panelsEl = $("#menuPanels");

    tabsEl.innerHTML = cfg.menu.categories
      .map(
        (cat, i) => `<button role="tab" id="tab-${cat.id}" aria-controls="panel-${cat.id}" aria-selected="${i === 0}" class="${i === 0 ? "is-active" : ""}" data-target="${cat.id}">${cat.label}</button>`
      )
      .join("");

    panelsEl.innerHTML = cfg.menu.categories
      .map(
        (cat, i) => `
      <div class="menu-panel ${i === 0 ? "is-active" : ""}" id="panel-${cat.id}" role="tabpanel" aria-labelledby="tab-${cat.id}">
        <div class="menu-list">
          ${cat.items
            .map(
              (item) => `
            <div class="menu-list__item">
              <div>
                <p class="menu-list__name">${item.name}</p>
                <p class="menu-list__desc">${item.description}</p>
              </div>
              <span class="menu-list__price">$${item.price}</span>
            </div>`
            )
            .join("")}
        </div>
      </div>`
      )
      .join("");

    $$("button", tabsEl).forEach((btn) => {
      btn.addEventListener("click", () => {
        $$("button", tabsEl).forEach((b) => {
          b.classList.remove("is-active");
          b.setAttribute("aria-selected", "false");
        });
        btn.classList.add("is-active");
        btn.setAttribute("aria-selected", "true");
        $$(".menu-panel", panelsEl).forEach((p) => p.classList.remove("is-active"));
        $(`#panel-${btn.dataset.target}`, panelsEl).classList.add("is-active");
      });
    });

    $("#menuPdfLink").href = cfg.menuPdfUrl;
    $("#footerMenuLink").href = cfg.menuPdfUrl;
  }

  /* ============================================================
     Render: Reviews
     ============================================================ */
  function renderReviews() {
    const body = $("#reviewsBody");
    if (cfg.reviews.isPlaceholder || !cfg.reviews.items.length) {
      body.innerHTML = `<div class="reviews__pending">${cfg.reviews.aggregateNote}</div>`;
    } else {
      body.innerHTML = `<div class="reviews__track">${cfg.reviews.items
        .map(
          (r) => `
        <div class="review-card">
          <div class="review-card__stars">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</div>
          <p class="review-card__text">${r.text}</p>
          <p class="review-card__meta">${r.author}${r.date ? " · " + r.date : ""}</p>
        </div>`
        )
        .join("")}</div>`;
    }
    $("#reviewsLink").href = cfg.reviews.googleReviewsUrl;
  }

  /* ============================================================
     Render: Location + Map on demand + Footer
     ============================================================ */
  function renderLocation() {
    $("#locAddress").textContent = cfg.address.full;
    const phoneLink = $("#locPhone");
    phoneLink.textContent = cfg.phone.display;
    phoneLink.href = cfg.phone.href;
    $("#locHours").innerHTML = cfg.hoursSummary.map((h) => `${h.label}: ${h.value}`).join("<br>");

    $("#locDirections").href = cfg.directionsUrl;
    $("#locCall").href = cfg.phone.href;
    $("#locMaps").href = cfg.mapsUrl;

    $("#navCta").href = cfg.mapsUrl;
    $("#mobileCta").href = cfg.mapsUrl;

    const trigger = $("#mapTrigger");
    trigger.addEventListener("click", () => {
      const embed = $("#mapEmbed");
      embed.innerHTML = `<iframe title="Ubicación de Naif Café Las Condes" loading="lazy" src="https://www.google.com/maps?q=${cfg.coordinates.lat},${cfg.coordinates.lng}&z=16&output=embed" allowfullscreen></iframe>`;
      embed.hidden = false;
      trigger.hidden = true;
    });
  }

  function renderFooter() {
    $("#footerAddress").innerHTML = `<span>${cfg.address.full}</span><a href="${cfg.mapsUrl}" target="_blank" rel="noopener">Ver en Google Maps</a>`;
    $("#footerContact").innerHTML = `<a href="${cfg.phone.href}">${cfg.phone.display}</a><a href="${cfg.instagram.url}" target="_blank" rel="noopener">${cfg.instagram.handle}</a>`;
    $("#footerHours").innerHTML = cfg.hoursSummary.map((h) => `<span>${h.label} · ${h.value}</span>`).join("");
    $("#footerCopy").textContent = `© ${new Date().getFullYear()} ${cfg.fullName}.`;
  }

  /* ============================================================
     Navbar scroll state
     ============================================================ */
  function initNavbarScroll() {
    const navbar = $("#navbar");
    const onScroll = () => {
      navbar.classList.toggle("is-scrolled", window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ============================================================
     Mobile menu
     ============================================================ */
  function initMobileMenu() {
    const menu = $("#mobileMenu");
    const toggle = $("#menuToggle");
    const close = $("#menuClose");

    function open() {
      menu.classList.add("is-open");
      menu.setAttribute("aria-hidden", "false");
      toggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      close.focus();
    }
    function shut() {
      menu.classList.remove("is-open");
      menu.setAttribute("aria-hidden", "true");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      toggle.focus();
    }

    toggle.addEventListener("click", open);
    close.addEventListener("click", shut);
    $$("a", menu).forEach((a) => a.addEventListener("click", shut));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menu.classList.contains("is-open")) shut();
    });
  }

  /* ============================================================
     Scroll reveal (IntersectionObserver)
     ============================================================ */
  function initReveal() {
    $$(".experience__text, .coffee__content, .menu-section__head, .why__eyebrow, .reviews__head, .location__info").forEach((el) =>
      el.classList.add("reveal")
    );
    const els = $$(".reveal");
    if (!("IntersectionObserver" in window) || !els.length) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
  }

  /* ============================================================
     Init
     ============================================================ */
  function init() {
    renderNav();
    renderHero();
    renderTextSections();
    renderGallery();
    renderMenu();
    renderReviews();
    renderLocation();
    renderFooter();

    initNavbarScroll();
    initMobileMenu();
    initLightbox();
    initReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
