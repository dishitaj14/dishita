/**
 * DISHITA JAIN - PORTFOLIO INTERACTION ENGINE
 * Modern Vanilla JavaScript for UI interactions, animations, and modals
 */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // 1. Mobile Navigation Toggle
  // ------------------------------------------------------------------------
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const navbar = document.getElementById('navbar');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('mobile-open');
    });

    // Close menu when clicking any nav link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('mobile-open');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('mobile-open');
      }
    });
  }

  // ------------------------------------------------------------------------
  // 2. Navbar Scroll Styling & Active Link Highlighting
  // ------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const allNavLinks = document.querySelectorAll('.nav-link');

  function handleScroll() {
    const scrollY = window.pageYOffset;

    // Sticky navbar backdrop
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Back to top button visibility
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
      if (scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }

    // Active Section Detection
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        allNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // ------------------------------------------------------------------------
  // 3. Scroll to Top Action
  // ------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ------------------------------------------------------------------------
  // 4. Dynamic Typewriter Effect
  // ------------------------------------------------------------------------
  const typingElement = document.getElementById('typingText');
  if (typingElement) {
    const words = [
      "B.Tech CSE Student",
      "Aspiring Software Developer",
      "Tech Enthusiast",
      "Problem Solver & Quick Learner"
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 110;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        // Pause at end of word
        isDeleting = true;
        typingSpeed = 1800;
      } else if (isDeleting && charIndex === 0) {
        // Move to next word
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 400;
      }

      setTimeout(typeEffect, typingSpeed);
    }

    // Start typing after initial delay
    setTimeout(typeEffect, 600);
  }

  // ------------------------------------------------------------------------
  // 5. Skills Category Filter Tabs
  // ------------------------------------------------------------------------
  const tabButtons = document.querySelectorAll('.tab-btn');
  const skillGroups = document.querySelectorAll('.skills-category-group');

  if (tabButtons.length > 0 && skillGroups.length > 0) {
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetCategory = button.getAttribute('data-category');

        // Update active button state
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter category groups
        skillGroups.forEach(group => {
          const groupCategory = group.getAttribute('data-category');
          if (targetCategory === 'all' || groupCategory === targetCategory) {
            group.style.display = 'block';
            // Slight fade in
            group.style.opacity = '0';
            setTimeout(() => {
              group.style.transition = 'opacity 0.3s ease';
              group.style.opacity = '1';
            }, 20);
          } else {
            group.style.display = 'none';
          }
        });
      });
    });
  }

  // ------------------------------------------------------------------------
  // 6. Interactive Contact Form Submission & Toast
  // ------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const toastContainer = document.getElementById('toastContainer');

  function showToast(title, message) {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast toast-success show';
    toast.innerHTML = `
      <div class="toast-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div>
        <strong style="display:block; margin-bottom: 2px;">${title}</strong>
        <span style="color: #94A3B8; font-size: 0.85rem;">${message}</span>
      </div>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 4500);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('senderName');
      const emailInput = document.getElementById('senderEmail');
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const subject = subjectInput ? subjectInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }

      // Display positive feedback toast
      showToast(
        `Message Received, ${name}!`,
        `Thank you for connecting. Dishita will respond to your inquiry shortly.`
      );

      // Offer convenient direct mailto launch
      console.log('Form submission preview:', { name, email, subject, message });

      // Reset form
      contactForm.reset();
    });
  }

  // ------------------------------------------------------------------------
  // 7. Resume Modal Controls
  // ------------------------------------------------------------------------
  const resumeModal = document.getElementById('resumeModal');
  const openResumeBtns = document.querySelectorAll('.open-resume-modal');
  const closeResumeBtn = document.getElementById('closeResumeModal');

  function openResume() {
    if (resumeModal) {
      resumeModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeResume() {
    if (resumeModal) {
      resumeModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  openResumeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openResume();
    });
  });

  if (closeResumeBtn) {
    closeResumeBtn.addEventListener('click', closeResume);
  }

  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) {
        closeResume();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && resumeModal.classList.contains('active')) {
        closeResume();
      }
    });
  }

  // ------------------------------------------------------------------------
  // 8. Intersection Observer for Scroll Reveals
  // ------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('revealed'));
  }
});
