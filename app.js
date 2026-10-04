/**
 * =========================================================================
 * PORTFOLIO APPLICATION LOGIC
 * =========================================================================
 * Author: Nireeksha Prakash Kulkarni
 * Technologies: Vanilla JavaScript (ES6+), Web Animations, Canvas API
 * Features:
 *   - Dark/Light Theme Switching with LocalStorage persistence
 *   - Scroll Progress Indicator & Sticky Glass Navbar
 *   - Scroll Spy with active link highlight
 *   - Dynamic Rendering from data.js
 *   - Filterable Skills & Projects
 *   - Project Details Interactive Modal
 *   - Contact Form Real-time Validation & Feedback Toast
 *   - Subtle Interactive Particle Canvas Background
 *   - Accessible Keyboard Navigation & Reduced Motion Respect
 * =========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Check if data is available
  const data = window.PORTFOLIO_DATA || {};

  // Initialize all subsystems
  initTheme();
  initScrollEffects();
  initMobileNav();
  initCanvas();
  renderAllSections(data);
  initProjectModal(data);
  initContactForm(data);
  initCopyButtons();
});

/* -------------------------------------------------------------------------
 * 1. THEME MANAGER (Dark / Light Mode)
 * ------------------------------------------------------------------------- */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('nk_portfolio_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const currentTheme = savedTheme || (prefersDark ? 'dark' : 'dark'); // Dark-first design
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme, themeIcon);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const active = document.documentElement.getAttribute('data-theme');
      const target = active === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', target);
      localStorage.setItem('nk_portfolio_theme', target);
      updateThemeIcon(target, themeIcon);
    });
  }
}

function updateThemeIcon(theme, iconEl) {
  if (!iconEl) return;
  if (theme === 'light') {
    // Show Moon icon (switch to dark)
    iconEl.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
    iconEl.setAttribute('aria-label', 'Switch to dark mode');
  } else {
    // Show Sun icon (switch to light)
    iconEl.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
    iconEl.setAttribute('aria-label', 'Switch to light mode');
  }
}

/* -------------------------------------------------------------------------
 * 2. SCROLL EFFECTS, PROGRESS BAR & SCROLL SPY
 * ------------------------------------------------------------------------- */
function initScrollEffects() {
  const navbar = document.getElementById('navbar');
  const scrollProgress = document.getElementById('scroll-progress');
  const backToTop = document.getElementById('back-to-top');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollY / (docHeight || 1)) * 100;

    // Update progress bar
    if (scrollProgress) {
      scrollProgress.style.width = `${progress}%`;
    }

    // Sticky Navbar blur
    if (navbar) {
      if (scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Back to top button
    if (backToTop) {
      if (scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }

    // Active Section Scroll Spy
    let currentId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* -------------------------------------------------------------------------
 * 3. MOBILE NAVIGATION DRAWER
 * ------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !navMenu) return;

  const toggle = () => {
    const isOpen = navMenu.classList.contains('open');
    if (isOpen) {
      navMenu.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    } else {
      navMenu.classList.add('open');
      toggleBtn.setAttribute('aria-expanded', 'true');
    }
  };

  toggleBtn.addEventListener('click', toggle);

  // Close when clicking any nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
      navMenu.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/* -------------------------------------------------------------------------
 * 4. DYNAMIC SECTION RENDERING
 * ------------------------------------------------------------------------- */
function renderAllSections(data) {
  renderAbout(data.about);
  renderSkills(data.skills);
  renderProjects(data.projects);
  renderExperience(data.experience);
  renderEducation(data.education);
}

function renderAbout(about) {
  if (!about) return;

  const highlightsContainer = document.getElementById('about-highlights-grid');
  if (highlightsContainer && about.highlights) {
    highlightsContainer.innerHTML = about.highlights.map(h => `
      <div class="highlight-card">
        <div class="highlight-icon-wrap">
          ${getIconSvg(h.icon)}
        </div>
        <h3 class="highlight-title">${escapeHtml(h.title)}</h3>
        <p class="highlight-desc">${escapeHtml(h.description)}</p>
      </div>
    `).join('');
  }

  const quickFactsGrid = document.getElementById('quick-facts-grid');
  if (quickFactsGrid && about.quickFacts) {
    quickFactsGrid.innerHTML = about.quickFacts.map(q => `
      <div class="fact-item">
        <span class="fact-label">${escapeHtml(q.label)}</span>
        <span class="fact-value">${escapeHtml(q.value)}</span>
      </div>
    `).join('');
  }
}

function renderSkills(skillsData) {
  if (!skillsData || !skillsData.items) return;

  const filterNav = document.getElementById('skills-filter-nav');
  const skillsGrid = document.getElementById('skills-grid');

  if (filterNav && skillsData.categories) {
    filterNav.innerHTML = skillsData.categories.map((cat, i) => `
      <button class="filter-btn ${i === 0 ? 'active' : ''}" data-cat="${cat.id}">
        ${escapeHtml(cat.label)}
      </button>
    `).join('');

    filterNav.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        filterNav.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-cat');
        displaySkillCards(skillsData.items, cat, skillsGrid);
      });
    });
  }

  displaySkillCards(skillsData.items, 'all', skillsGrid);
}

function displaySkillCards(items, category, container) {
  if (!container) return;

  const filtered = category === 'all' 
    ? items 
    : items.filter(item => item.category === category);

  container.innerHTML = filtered.map(skill => `
    <div class="skill-card">
      <div class="skill-icon-box">
        ${getIconSvg(skill.icon)}
      </div>
      <div class="skill-details">
        <span class="skill-name">${escapeHtml(skill.name)}</span>
        <span class="skill-tag">${escapeHtml(skill.tag || skill.level)}</span>
      </div>
    </div>
  `).join('');
}

function renderProjects(projects) {
  if (!projects || !projects.length) return;

  const filterBar = document.getElementById('projects-filter-bar');
  const projectsGrid = document.getElementById('projects-grid');

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "agentic-ai", label: "Agentic AI" },
    { id: "ai", label: "AI & NLP" },
    { id: "blockchain", label: "Blockchain" },
    { id: "data", label: "Data & Systems" }
  ];

  if (filterBar) {
    filterBar.innerHTML = categories.map((cat, i) => `
      <button class="project-filter-btn ${i === 0 ? 'active' : ''}" data-cat="${cat.id}">
        ${cat.label}
      </button>
    `).join('');

    filterBar.querySelectorAll('.project-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        filterBar.querySelectorAll('.project-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-cat');
        displayProjectCards(projects, cat, projectsGrid);
      });
    });
  }

  displayProjectCards(projects, 'all', projectsGrid);
}

function displayProjectCards(projects, category, container) {
  if (!container) return;

  const filtered = category === 'all' 
    ? projects 
    : projects.filter(p => p.category === category);

  container.innerHTML = filtered.map(p => `
    <article class="project-card" data-id="${p.id}">
      <div class="project-img-wrap">
        <img src="${p.image}" alt="${escapeHtml(p.title)}" class="project-img" loading="lazy" />
        <span class="project-category-badge">${escapeHtml(p.categoryLabel || p.category)}</span>
        ${p.badge ? `<span class="project-status-badge">${escapeHtml(p.badge)}</span>` : ''}
      </div>
      <div class="project-body">
        <h3 class="project-title">${escapeHtml(p.title)}</h3>
        <p class="project-desc">${escapeHtml(p.shortDescription)}</p>
        
        <ul class="project-highlights-list">
          ${(p.highlights || []).slice(0, 3).map(h => `
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>${escapeHtml(h)}</span>
            </li>
          `).join('')}
        </ul>

        <div class="tech-badges-wrap">
          ${(p.technologies || []).map(t => `<span class="tech-badge">${escapeHtml(t)}</span>`).join('')}
        </div>

        <div class="project-footer">
          <div class="project-links">
            ${p.githubUrl ? `
              <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" aria-label="GitHub Repository">
                ${getIconSvg('github', 16)} GitHub
              </a>
            ` : ''}
          </div>
          <button type="button" class="btn btn-primary btn-sm view-details-btn" data-project-id="${p.id}">
            View Details
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

function renderExperience(experiences) {
  const container = document.getElementById('timeline-list');
  if (!container || !experiences) return;

  container.innerHTML = experiences.map(exp => `
    <div class="timeline-item">
      <div class="timeline-dot">
        <div class="timeline-dot-inner"></div>
      </div>
      <div class="timeline-card">
        <div class="timeline-header">
          <h3 class="timeline-title">${escapeHtml(exp.title)}</h3>
          <span class="timeline-period">${escapeHtml(exp.period)}</span>
        </div>
        <div class="timeline-org">${escapeHtml(exp.organization)}</div>
        <p class="timeline-desc">${escapeHtml(exp.description)}</p>
        <div class="timeline-skills">
          ${(exp.skillsGained || []).map(s => `<span class="timeline-skill-pill">${escapeHtml(s)}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function renderEducation(educations) {
  const container = document.getElementById('education-wrap');
  if (!container || !educations || !educations.length) return;

  const edu = educations[0];
  container.innerHTML = `
    <div class="education-card">
      <div class="edu-top-row">
        <div>
          <h3 class="edu-institution">${escapeHtml(edu.institution)}</h3>
          <div class="edu-degree">${escapeHtml(edu.degree)} — ${escapeHtml(edu.field)}</div>
        </div>
        <span class="edu-period-badge">${escapeHtml(edu.duration)}</span>
      </div>

      <div class="edu-meta-grid">
        <div class="edu-meta-item">
          <span class="edu-meta-label">Current Academic Standing</span>
          <span class="edu-meta-val">${escapeHtml(edu.status)}</span>
        </div>
        <div class="edu-meta-item">
          <span class="edu-meta-label">Cumulative GPA</span>
          <span class="edu-meta-val">${escapeHtml(edu.cgpa)}</span>
        </div>
      </div>

      <div class="edu-coursework-title">Relevant Technical Coursework:</div>
      <div class="coursework-badges">
        ${(edu.coursework || []).map(c => `<span class="course-badge">${escapeHtml(c)}</span>`).join('')}
      </div>
    </div>
  `;
}

/* -------------------------------------------------------------------------
 * 5. PROJECT DETAILS MODAL
 * ------------------------------------------------------------------------- */
function initProjectModal(data) {
  const modalOverlay = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalGithubLink = document.getElementById('modal-github-link');
  const modalDemoLink = document.getElementById('modal-demo-link');

  if (!modalOverlay) return;

  const openModal = (projectId) => {
    const project = (data.projects || []).find(p => p.id === projectId);
    if (!project) return;

    if (modalTitle) modalTitle.textContent = project.title;

    if (modalBody) {
      modalBody.innerHTML = `
        <div class="modal-section">
          <h4 class="modal-section-title">Overview &amp; Problem Statement</h4>
          <p class="modal-desc" style="color: var(--text-secondary); line-height: 1.65;">
            ${escapeHtml(project.details?.problem || project.shortDescription)}
          </p>
        </div>

        <div class="modal-section">
          <h4 class="modal-section-title">Engineered Solution &amp; Key Innovations</h4>
          <p class="modal-desc" style="color: var(--text-secondary); line-height: 1.65; margin-bottom: 12px;">
            ${escapeHtml(project.details?.solution || '')}
          </p>
          <ul class="project-highlights-list" style="margin-top: 10px;">
            ${(project.highlights || []).map(h => `
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-emerald);">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>${escapeHtml(h)}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="modal-section">
          <h4 class="modal-section-title">Architecture &amp; Implementation Details</h4>
          <p class="modal-desc" style="color: var(--text-secondary); line-height: 1.65;">
            ${escapeHtml(project.details?.architecture || '')}
          </p>
        </div>

        <div class="modal-section">
          <h4 class="modal-section-title">Technologies Used</h4>
          <div class="tech-badges-wrap" style="margin-bottom: 0;">
            ${(project.technologies || []).map(t => `<span class="tech-badge">${escapeHtml(t)}</span>`).join('')}
          </div>
        </div>
      `;
    }

    if (modalGithubLink) {
      modalGithubLink.href = project.githubUrl || '#';
      modalGithubLink.style.display = project.githubUrl ? 'inline-flex' : 'none';
    }

    if (modalDemoLink) {
      modalDemoLink.href = project.liveUrl && project.liveUrl !== '#' ? project.liveUrl : '#';
      modalDemoLink.style.display = project.liveUrl && project.liveUrl !== '#' ? 'inline-flex' : 'none';
    }

    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  // Delegated click listener for all view-details-btn
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.view-details-btn');
    if (btn) {
      const pid = btn.getAttribute('data-project-id');
      openModal(pid);
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}

/* -------------------------------------------------------------------------
 * 6. CONTACT FORM VALIDATION & INTERACTION
 * ------------------------------------------------------------------------- */
function initContactForm(data) {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');

  if (!form) return;

  const validateField = (input, errorEl, validator) => {
    const valid = validator(input.value.trim());
    if (!valid.isValid) {
      input.classList.add('error');
      if (errorEl) {
        errorEl.textContent = valid.message;
        errorEl.classList.add('visible');
      }
      return false;
    } else {
      input.classList.remove('error');
      if (errorEl) {
        errorEl.textContent = '';
        errorEl.classList.remove('visible');
      }
      return true;
    }
  };

  const nameInput = document.getElementById('contact-name');
  const nameError = document.getElementById('name-error');
  const emailInput = document.getElementById('contact-email');
  const emailError = document.getElementById('email-error');
  const messageInput = document.getElementById('contact-message');
  const messageError = document.getElementById('message-error');

  // Realtime blur validation
  if (nameInput) {
    nameInput.addEventListener('blur', () => {
      validateField(nameInput, nameError, val => ({
        isValid: val.length >= 2,
        message: 'Please enter your name (at least 2 characters).'
      }));
    });
  }

  if (emailInput) {
    emailInput.addEventListener('blur', () => {
      validateField(emailInput, emailError, val => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return {
          isValid: emailRegex.test(val),
          message: 'Please enter a valid email address.'
        };
      });
    });
  }

  if (messageInput) {
    messageInput.addEventListener('blur', () => {
      validateField(messageInput, messageError, val => ({
        isValid: val.length >= 10,
        message: 'Please enter a message with at least 10 characters.'
      }));
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateField(nameInput, nameError, val => ({
      isValid: val.length >= 2,
      message: 'Please enter your name (at least 2 characters).'
    }));

    const isEmailValid = validateField(emailInput, emailError, val => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return {
        isValid: emailRegex.test(val),
        message: 'Please enter a valid email address.'
      };
    });

    const isMessageValid = validateField(messageInput, messageError, val => ({
      isValid: val.length >= 10,
      message: 'Please enter a message with at least 10 characters.'
    }));

    if (!isNameValid || !isEmailValid || !isMessageValid) {
      return;
    }

    // Simulate sending with loading state
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 1s linear infinite;">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
        <path d="M12 2a10 10 0 0 1 10 10"></path>
      </svg>
      Sending...
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();
      showToast('Thank you! Your message has been sent successfully. I will get back to you soon.');
    }, 1000);
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}

/* -------------------------------------------------------------------------
 * 7. COPY TO CLIPBOARD BUTTONS
 * ------------------------------------------------------------------------- */
function initCopyButtons() {
  const copyBtns = document.querySelectorAll('.copy-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied to clipboard: ${textToCopy}`);
        }).catch(() => {
          fallbackCopyText(textToCopy);
        });
      } else {
        fallbackCopyText(textToCopy);
      }
    });
  });
}

function fallbackCopyText(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(`Copied to clipboard: ${text}`);
  } catch (err) {
    showToast(`Email: ${text}`);
  }
  document.body.removeChild(textArea);
}

/* -------------------------------------------------------------------------
 * 8. INTERACTIVE CANVAS BACKGROUND (PARTICLE & MESH EFFECT)
 * ------------------------------------------------------------------------- */
function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  // Check prefers-reduced-motion
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none';
    return;
  }

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  let mouse = { x: -1000, y: -1000, radius: 120 };
  let particles = [];
  const particleCount = Math.min(Math.floor((width * height) / 22000), 55);

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.radius = Math.random() * 1.8 + 0.8;
      this.baseAlpha = Math.random() * 0.35 + 0.15;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse interaction
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius) {
        const force = (mouse.radius - dist) / mouse.radius;
        this.x -= (dx / dist) * force * 1.8;
        this.y -= (dy / dist) * force * 1.8;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(6, 182, 212, ${this.baseAlpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  let animationFrameId;
  let isRunning = true;

  function animate() {
    if (!isRunning) return;
    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          const alpha = (1 - dist / 110) * 0.18;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    animationFrameId = requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }, { passive: true });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  window.addEventListener('mouseout', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  // Pause when tab not visible to save CPU/battery
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
    } else {
      isRunning = true;
      animate();
    }
  });
}

/* -------------------------------------------------------------------------
 * 9. ICON HELPER UTILITIES
 * ------------------------------------------------------------------------- */
function getIconSvg(name, size = 22) {
  const icons = {
    code: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    cpu: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
    award: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
    'trending-up': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`,
    python: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c2.2 0 4 .8 4 2v2H8V4c0-1.2 1.8-2 4-2z"></path><path d="M12 22c-2.2 0-4-.8-4-2v-2h8v2c0 1.2-1.8 2-4 2z"></path><path d="M4 8h12c2.2 0 4 1.8 4 4v2c0 2.2-1.8 4-4 4H8"></path><path d="M20 16H8c-2.2 0-4-1.8-4-4V10c0-2.2 1.8-4 4-4h8"></path></svg>`,
    coffee: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`,
    'file-code': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><polyline points="10 13 8 15 10 17"></polyline><polyline points="14 13 16 15 14 17"></polyline></svg>`,
    terminal: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,
    database: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
    layout: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
    feather: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>`,
    smartphone: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`,
    server: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
    shuffle: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>`,
    bot: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="16" y1="16" x2="16.01" y2="16"></line></svg>`,
    zap: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
    layers: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
    activity: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
    'git-commit': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line></svg>`,
    'hard-drive': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line></svg>`,
    'git-branch': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>`,
    github: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
    edit: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`,
    crosshair: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg>`
  };

  return icons[name] || icons.code;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
