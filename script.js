/**
 * Alex Rivera - Frontend Developer & Website Maintenance Specialist Portfolio
 * Interactive Script (Vanilla JavaScript)
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Mobile Navigation Drawer ---
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      mobileToggle.innerHTML = isOpen
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
      });
    });
  }

  // --- 2. Active Section Spy on Scroll ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    const scrollY = window.pageYOffset + 120;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // --- 3. Modal Management System ---
  const modals = document.querySelectorAll('.modal-overlay');
  const closeButtons = document.querySelectorAll('.modal-close, [data-close-modal]');

  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal(modal) {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function closeAllModals() {
    modals.forEach(modal => closeModal(modal));
  }

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetModal = btn.closest('.modal-overlay');
      closeModal(targetModal);
    });
  });

  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  // Attach Modal Triggers
  document.querySelectorAll('[data-open-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = trigger.getAttribute('data-open-modal');
      openModal(modalId);
    });
  });

  // --- 4. Interactive Live Demo Previews ---
  const projectDemoButtons = document.querySelectorAll('.trigger-demo');
  const demoModal = document.getElementById('demoModal');
  const demoTitle = document.getElementById('demoModalTitle');
  const demoContainer = document.getElementById('demoContainer');

  const demoData = {
    devdash: {
      title: 'DevDash App — Live Interactive Preview',
      html: `
        <div style="background:#0b1120; border-radius:8px; border:1px solid #334155; padding:20px; color:#f8fafc;">
          <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #1e293b; padding-bottom:14px; margin-bottom:16px;">
            <div style="display:flex; align-items:center; gap:10px;">
              <span style="display:inline-block; width:12px; height:12px; border-radius:50%; background:#10b981;"></span>
              <strong style="font-size:1.1rem;">Overview: Q4 Performance</strong>
            </div>
            <span style="font-family:monospace; font-size:0.8rem; background:#1e293b; padding:4px 10px; border-radius:4px; color:#10b981;">Live API Connected</span>
          </div>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(130px, 1fr)); gap:12px; margin-bottom:20px;">
            <div style="background:#1e293b; padding:14px; border-radius:8px; border:1px solid #334155;">
              <div style="font-size:0.75rem; color:#94a3b8;">Total Revenue</div>
              <div style="font-size:1.4rem; font-weight:700; color:#10b981;">$3.4M</div>
              <div style="font-size:0.7rem; color:#34d399;">+18.4% this mo</div>
            </div>
            <div style="background:#1e293b; padding:14px; border-radius:8px; border:1px solid #334155;">
              <div style="font-size:0.75rem; color:#94a3b8;">Active Users</div>
              <div style="font-size:1.4rem; font-weight:700;">45,890</div>
              <div style="font-size:0.7rem; color:#34d399;">+5.2% daily avg</div>
            </div>
            <div style="background:#1e293b; padding:14px; border-radius:8px; border:1px solid #334155;">
              <div style="font-size:0.75rem; color:#94a3b8;">Uptime SLA</div>
              <div style="font-size:1.4rem; font-weight:700; color:#10b981;">99.98%</div>
              <div style="font-size:0.7rem; color:#94a3b8;">0 dropped frames</div>
            </div>
          </div>
          <div style="background:#131d31; border:1px dashed #334155; border-radius:8px; padding:16px; text-align:center;">
            <p style="font-size:0.9rem; color:#94a3b8; margin-bottom:12px;">Interactive component test panel: Toggle dynamic metrics feed</p>
            <button id="btnRefreshStats" style="background:#10b981; color:#0f172a; font-weight:700; padding:8px 18px; border-radius:4px; border:none; cursor:pointer;">
              Simulate Metric Update
            </button>
          </div>
        </div>
      `
    },
    quantum: {
      title: 'Quantum Analytics — Interactive UI Preview',
      html: `
        <div style="background:#0b1120; border-radius:8px; border:1px solid #334155; padding:24px; color:#f8fafc;">
          <div style="text-align:center; max-width:540px; margin:0 auto 20px;">
            <span style="font-family:monospace; font-size:0.75rem; color:#10b981; text-transform:uppercase; letter-spacing:1px;">Enterprise Grade Engine</span>
            <h3 style="font-size:1.5rem; font-weight:800; margin:8px 0;">Unlock Data-Driven Growth with Intelligent Analytics</h3>
            <p style="font-size:0.85rem; color:#94a3b8;">Sub-second indexing, real-time aggregate charts, and effortless cross-browser compatibility.</p>
          </div>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:14px;">
            <div style="background:#1e293b; padding:16px; border-radius:8px; border-left:3px solid #10b981;">
              <h4 style="font-size:0.95rem; font-weight:700; margin-bottom:6px;">Real-Time Pipeline</h4>
              <p style="font-size:0.8rem; color:#94a3b8;">Stream data points with zero dropped frames.</p>
            </div>
            <div style="background:#1e293b; padding:16px; border-radius:8px; border-left:3px solid #10b981;">
              <h4 style="font-size:0.95rem; font-weight:700; margin-bottom:6px;">Responsive Grids</h4>
              <p style="font-size:0.8rem; color:#94a3b8;">Fluid typography & containers tested from 320px to 4K.</p>
            </div>
          </div>
        </div>
      `
    }
  };

  projectDemoButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const demoKey = btn.getAttribute('data-demo');
      if (demoData[demoKey]) {
        demoTitle.textContent = demoData[demoKey].title;
        demoContainer.innerHTML = demoData[demoKey].html;
        openModal('demoModal');

        const refreshBtn = document.getElementById('btnRefreshStats');
        if (refreshBtn) {
          refreshBtn.addEventListener('click', () => {
            showToast('Simulated real-time WebSocket packet update dispatched!');
          });
        }
      }
    });
  });

  // --- 5. Interactive Skill Badges Tooltip / Info ---
  const skillDetails = {
    'HTML5': 'Semantic markup, Web Accessibility (WCAG AA), Web Components, Microdata.',
    'CSS3': 'Modern CSS Grid, Flexbox, Custom Properties, Fluid Typography, Animations.',
    'JavaScript': 'ES6+ syntax, Async/Await, DOM Performance, Fetch API, Event Loop.',
    'Git & GitHub': 'Version control, atomic commits, pull requests, branch management.',
    'GitHub Pages': 'CI/CD deployment pipelines, static hosting, DNS configuration.',
    'VS Code': 'Productivity extensions, snippet libraries, ESLint & Prettier setups.',
    'Chrome DevTools': 'Lighthouse audits, Network profiling, Memory leak inspection.',
    'Responsive Design': 'Fluid rem/clamp scaling, media queries, mobile-first architectures.'
  };

  document.querySelectorAll('.skill-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const skillName = pill.textContent.trim();
      const detail = skillDetails[skillName] || 'Proficiently utilized across production projects.';
      showToast(`<strong>${skillName}</strong>: ${detail}`);
    });
  });

 
    

  // --- 7. Copy Email Clipboard Helper ---
  const copyEmailButtons = document.querySelectorAll('.btn-copy-email');
  copyEmailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'sairahirum@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Copied email to clipboard: ${email}`);
      }).catch(() => {
        showToast(`Email: ${email}`);
      });
    });
  });

  // --- 8. Toast Notification Utility ---
  function showToast(message, type = 'success') {
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.className = 'toast-container';
      document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    if (type === 'error') {
      toast.style.borderColor = '#ef4444';
    }

    const iconSvg = type === 'error'
      ? `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;

    toast.innerHTML = `
      ${iconSvg}
      <div>${message}</div>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // Window expose for inline clicks if needed
  window.showToast = showToast;
  window.openModal = openModal;
  window.closeModal = closeModal;
});
