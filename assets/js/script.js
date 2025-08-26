// Simple script to handle mobile navigation toggle
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('navToggle');
  const menu = document.getElementById('menu');
  // Mobile navigation toggle
  if (navToggle && menu) {
    navToggle.addEventListener('click', function () {
      menu.classList.toggle('open');
    });
  }

  // IntersectionObserver for reveal animations
  let observer;
  const initReveal = () => {
    const revealElements = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      if (!observer) {
        observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
              }
            });
          },
          {
            threshold: 0.2,
          }
        );
      }
      revealElements.forEach(el => observer.observe(el));
    } else {
      // Fallback: make all elements visible immediately
      revealElements.forEach(el => el.classList.add('active'));
    }
  };

  // Function to initialise publication filtering; will be called after publications are loaded
  let publicationItems;
  const initPublicationFilter = () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    publicationItems = document.querySelectorAll('.publication-list li');
    if (filterButtons.length > 0 && publicationItems.length > 0) {
      filterButtons.forEach(btn => {
        btn.addEventListener('click', function () {
          // Set active class on clicked button
          filterButtons.forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          const filter = this.getAttribute('data-filter');
          publicationItems.forEach(item => {
            const type = item.getAttribute('data-type');
            if (filter === 'all' || filter === type) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          });
        });
      });
    }
  };

  /*
   * The Jekyll version of this site builds the team, publications and news lists at compile time using
   * Liquid and data files.  Therefore we don't fetch JSON here.  Instead we simply initialise the
   * publication filtering (if a publication list exists) and run the reveal animations on page load.
   */

  // Initialise filters for the publication list
  const publicationList = document.getElementById('publicationList');
  if (publicationList) {
    initPublicationFilter();
  }

  // Initial reveal on page load for any static elements
  initReveal();

  // Back to top button functionality
  const toTopBtn = document.getElementById('toTop');
  if (toTopBtn) {
    const toggleToTop = () => {
      if (window.scrollY > 200) {
        toTopBtn.classList.add('show');
      } else {
        toTopBtn.classList.remove('show');
      }
    };
    toggleToTop();
    window.addEventListener('scroll', toggleToTop);
    toTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});