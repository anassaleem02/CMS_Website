/* ============================================
   FM's Power Solar - Main JavaScript
   ============================================ */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all modules
  initThemeToggle();
  initPageLoader();
  initHeader();
  initMobileNav();
  initScrollReveal();
  initTestimonialsCarousel();
  initContactForm();
  initBackToTop();
  initSmoothScroll();
  initCounterAnimation();
  initProductFilters();
  initGallery();
  initAccordion();
});

/* ==========================================
   THEME TOGGLE
   ========================================== */
function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const htmlElement = document.documentElement;

  // Check for saved theme preference or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  htmlElement.setAttribute('data-theme', savedTheme);

  if (!themeToggle) return;

  themeToggle.addEventListener('click', function() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Add a subtle animation to the toggle button
    themeToggle.style.transform = 'scale(0.9)';
    setTimeout(function() {
      themeToggle.style.transform = '';
    }, 150);
  });
}

/* ==========================================
   PAGE LOADER
   ========================================== */
function initPageLoader() {
  const loader = document.getElementById('pageLoader');
  if (!loader) return;

  window.addEventListener('load', function() {
    setTimeout(function() {
      loader.classList.add('loaded');
    }, 500);
  });

  // Fallback: hide loader after 3 seconds max
  setTimeout(function() {
    loader.classList.add('loaded');
  }, 3000);
}

/* ==========================================
   HEADER SCROLL EFFECT
   ========================================== */
function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  let lastScroll = 0;
  const scrollThreshold = 50;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });
}

/* ==========================================
   MOBILE NAVIGATION
   ========================================== */
function initMobileNav() {
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuToggle || !mobileNav) return;

  menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
  });

  // Close mobile nav when a link is clicked
  mobileNavLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Close mobile nav on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
      menuToggle.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

/* ==========================================
   SCROLL REVEAL ANIMATIONS
   ========================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  if (!revealElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute('data-delay') || 0;
        setTimeout(function() {
          entry.target.classList.add('revealed');
        }, parseInt(delay));
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(function(element) {
    observer.observe(element);
  });
}

/* ==========================================
   TESTIMONIALS CAROUSEL
   ========================================== */
function initTestimonialsCarousel() {
  const track = document.getElementById('testimonialsTrack');
  const dots = document.getElementById('testimonialsDots');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (!track || !dots) return;

  const slides = track.querySelectorAll('.testimonial-slide');
  const dotElements = dots.querySelectorAll('.carousel-dot');
  let currentIndex = 0;
  let autoPlayInterval;
  const autoPlayDelay = 5000;

  function goToSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    currentIndex = index;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update dots
    dotElements.forEach(function(dot, i) {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, autoPlayDelay);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  // Event listeners
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      nextSlide();
      stopAutoPlay();
      startAutoPlay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      prevSlide();
      stopAutoPlay();
      startAutoPlay();
    });
  }

  // Dot navigation
  dotElements.forEach(function(dot, index) {
    dot.addEventListener('click', function() {
      goToSlide(index);
      stopAutoPlay();
      startAutoPlay();
    });
  });

  // Pause on hover
  track.addEventListener('mouseenter', stopAutoPlay);
  track.addEventListener('mouseleave', startAutoPlay);

  // Touch/swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
    stopAutoPlay();
  }, { passive: true });

  track.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    startAutoPlay();
  }, { passive: true });

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  }

  // Start autoplay
  startAutoPlay();
}

/* ==========================================
   CONTACT FORM
   ========================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form elements
    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const phoneInput = form.querySelector('#phone');
    const messageInput = form.querySelector('#message');
    const submitBtn = form.querySelector('button[type="submit"]');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');

    // Reset errors
    clearFormErrors(form);

    // Validate
    let isValid = true;

    if (!nameInput.value.trim()) {
      showFieldError(nameInput);
      isValid = false;
    }

    if (!isValidEmail(emailInput.value)) {
      showFieldError(emailInput);
      isValid = false;
    }

    if (!phoneInput.value.trim()) {
      showFieldError(phoneInput);
      isValid = false;
    }

    if (!messageInput.value.trim()) {
      showFieldError(messageInput);
      isValid = false;
    }

    if (!isValid) return;

    // Show loading state
    if (btnText) btnText.classList.add('hidden');
    if (btnLoader) btnLoader.classList.remove('hidden');
    submitBtn.disabled = true;

    // Simulate form submission (replace with actual API call)
    setTimeout(function() {
      // Reset form
      form.reset();

      // Reset button
      if (btnText) btnText.classList.remove('hidden');
      if (btnLoader) btnLoader.classList.add('hidden');
      submitBtn.disabled = false;

      // Show success message
      showNotification('Thank you! Your message has been sent successfully. We will contact you soon.', 'success');
    }, 2000);
  });

  // Real-time validation
  const inputs = form.querySelectorAll('.form-input, .form-textarea');
  inputs.forEach(function(input) {
    input.addEventListener('blur', function() {
      validateField(input);
    });

    input.addEventListener('input', function() {
      if (input.closest('.form-group').classList.contains('has-error')) {
        validateField(input);
      }
    });
  });
}

function validateField(input) {
  const group = input.closest('.form-group');
  if (!group) return;

  let isValid = true;

  if (input.type === 'email') {
    isValid = isValidEmail(input.value);
  } else {
    isValid = input.value.trim() !== '';
  }

  if (isValid) {
    group.classList.remove('has-error');
    input.classList.remove('error');
    input.classList.add('success');
  } else {
    showFieldError(input);
  }
}

function showFieldError(input) {
  const group = input.closest('.form-group');
  if (group) {
    group.classList.add('has-error');
    input.classList.add('error');
    input.classList.remove('success');
  }
}

function clearFormErrors(form) {
  form.querySelectorAll('.form-group').forEach(function(group) {
    group.classList.remove('has-error');
  });
  form.querySelectorAll('.form-input, .form-textarea').forEach(function(input) {
    input.classList.remove('error', 'success');
  });
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showNotification(message, type) {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
        ${type === 'success'
          ? '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'
          : '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'}
      </svg>
      <span>${message}</span>
    </div>
    <button class="notification-close" aria-label="Close">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>
  `;

  // Add styles if not already present
  if (!document.getElementById('notification-styles')) {
    const styles = document.createElement('style');
    styles.id = 'notification-styles';
    styles.textContent = `
      .notification {
        position: fixed;
        top: 100px;
        right: 20px;
        max-width: 400px;
        padding: 16px 20px;
        background: var(--glass-bg);
        border: 1px solid var(--glass-border);
        border-radius: var(--radius-xl);
        backdrop-filter: var(--glass-blur);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        z-index: 1000;
        animation: slideInRight 0.3s ease-out;
      }
      .notification-success {
        border-color: var(--color-success);
      }
      .notification-success svg {
        color: var(--color-success);
      }
      .notification-error {
        border-color: var(--color-error);
      }
      .notification-error svg {
        color: var(--color-error);
      }
      .notification-content {
        display: flex;
        align-items: center;
        gap: 12px;
        color: var(--text-primary);
        font-size: var(--text-sm);
      }
      .notification-close {
        color: var(--text-muted);
        transition: color 0.15s;
      }
      .notification-close:hover {
        color: var(--text-primary);
      }
      @keyframes slideInRight {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(styles);
  }

  document.body.appendChild(notification);

  // Close button
  notification.querySelector('.notification-close').addEventListener('click', function() {
    notification.remove();
  });

  // Auto remove after 5 seconds
  setTimeout(function() {
    if (notification.parentNode) {
      notification.remove();
    }
  }, 5000);
}

/* ==========================================
   BACK TO TOP BUTTON
   ========================================== */
function initBackToTop() {
  const backToTop = document.getElementById('backToTop');
  if (!backToTop) return;

  const showThreshold = 400;

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > showThreshold) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  backToTop.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================
   SMOOTH SCROLL
   ========================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerHeight = document.getElementById('header')?.offsetHeight || 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ==========================================
   COUNTER ANIMATION
   ========================================== */
function initCounterAnimation() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observerOptions = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach(function(counter) {
    observer.observe(counter);
  });
}

function animateCounter(element) {
  const target = parseFloat(element.getAttribute('data-counter'));
  const duration = 2000;
  const steps = 60;
  const stepDuration = duration / steps;
  const increment = target / steps;
  let current = 0;
  let step = 0;

  // Preserve the text after the number (like +, %, MW)
  const originalHTML = element.innerHTML;
  const suffix = originalHTML.replace(/[\d.]+/, '');

  const timer = setInterval(function() {
    step++;
    current = Math.min(current + increment, target);

    // Format number
    let displayValue;
    if (target % 1 !== 0) {
      displayValue = current.toFixed(1);
    } else {
      displayValue = Math.round(current);
    }

    element.innerHTML = displayValue + suffix;

    if (step >= steps) {
      element.innerHTML = target + suffix;
      clearInterval(timer);
    }
  }, stepDuration);
}

/* ==========================================
   PRODUCT FILTERS
   ========================================== */
function initProductFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card[data-category]');

  if (!filterBtns.length || !productCards.length) return;

  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');

      // Update active button
      filterBtns.forEach(function(b) {
        b.classList.remove('active');
      });
      this.classList.add('active');

      // Filter products
      productCards.forEach(function(card) {
        const category = card.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          card.style.display = '';
          card.classList.remove('hidden');
          setTimeout(function() {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(function() {
            card.style.display = 'none';
            card.classList.add('hidden');
          }, 300);
        }
      });
    });
  });

  // Check URL for category filter
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get('category');
  if (categoryParam) {
    const targetBtn = document.querySelector(`.filter-btn[data-filter="${categoryParam}"]`);
    if (targetBtn) {
      targetBtn.click();
    }
  }
}

/* ==========================================
   IMAGE GALLERY
   ========================================== */
function initGallery() {
  const mainImage = document.querySelector('.gallery-main img');
  const thumbs = document.querySelectorAll('.gallery-thumb');

  if (!mainImage || !thumbs.length) return;

  thumbs.forEach(function(thumb) {
    thumb.addEventListener('click', function() {
      // Update active state
      thumbs.forEach(function(t) {
        t.classList.remove('active');
      });
      this.classList.add('active');

      // Update main image
      const newSrc = this.querySelector('img').getAttribute('src');
      const newAlt = this.querySelector('img').getAttribute('alt');

      mainImage.style.opacity = '0';
      setTimeout(function() {
        mainImage.src = newSrc;
        mainImage.alt = newAlt;
        mainImage.style.opacity = '1';
      }, 200);
    });
  });

  // Lightbox functionality
  const galleryMain = document.querySelector('.gallery-main');
  if (galleryMain) {
    galleryMain.addEventListener('click', function() {
      openLightbox(mainImage.src, mainImage.alt);
    });
  }
}

function openLightbox(src, alt) {
  // Create lightbox
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <img src="${src}" alt="${alt}">
    </div>
    <button class="lightbox-close" aria-label="Close lightbox">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>
  `;

  document.body.appendChild(lightbox);
  document.body.style.overflow = 'hidden';

  // Animate in
  requestAnimationFrame(function() {
    lightbox.classList.add('active');
  });

  // Close handlers
  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(function() {
      lightbox.remove();
    }, 300);
  }

  lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  }, { once: true });
}

/* ==========================================
   ACCORDION (FAQ)
   ========================================== */
function initAccordion() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  if (!accordionItems.length) return;

  accordionItems.forEach(function(item) {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', function() {
      const isActive = item.classList.contains('active');

      // Close all items (optional - remove for multi-open)
      accordionItems.forEach(function(i) {
        i.classList.remove('active');
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================
   3D CARD TILT EFFECT
   ========================================== */
function init3DCards() {
  const cards = document.querySelectorAll('.card-3d');

  cards.forEach(function(card) {
    card.addEventListener('mousemove', function(e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });

    card.addEventListener('mouseleave', function() {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
  });
}

// Initialize 3D cards after DOM is ready
document.addEventListener('DOMContentLoaded', init3DCards);

/* ==========================================
   UTILITY FUNCTIONS
   ========================================== */

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = function() {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(function() {
        inThrottle = false;
      }, limit);
    }
  };
}

// Check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
