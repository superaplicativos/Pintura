/**
 * Guilherme Miranda - Main Script
 * Orquestra: starfield, navegação, rendering dinâmico, modal, formulário, cursor
 */
 * Guilherme Miranda - Main Script
 * Orquestra: starfield, navegação, rendering dinâmico, modal, formulário, cursor
 */
(function () {
  'use strict';

  // ========================================================================
  // STARFIELD BACKGROUND (Canvas 2D)
  // ========================================================================
  function initStarfield() {
    const canvas = document.getElementById('starfield');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let stars = [];
    let w, h;
    
    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      stars = [];
      const count = Math.floor((w * h) / 8000);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z: Math.random() * 3 + 0.5,
          r: Math.random() * 1.5 + 0.3,
          tw: Math.random() * Math.PI * 2,
          twSpeed: Math.random() * 0.02 + 0.005,
        });
      }
    }
    
    function draw() {
      ctx.fillStyle = '#050818';
      ctx.fillRect(0, 0, w, h);
      
      // Nebulosa difusa de fundo
      const grad = ctx.createRadialGradient(w * 0.7, h * 0.3, 0, w * 0.7, h * 0.3, w * 0.6);
      grad.addColorStop(0, 'rgba(30, 58, 138, 0.15)');
      grad.addColorStop(1, 'rgba(30, 58, 138, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      
      const grad2 = ctx.createRadialGradient(w * 0.2, h * 0.7, 0, w * 0.2, h * 0.7, w * 0.5);
      grad2.addColorStop(0, 'rgba(212, 175, 55, 0.08)');
      grad2.addColorStop(1, 'rgba(212, 175, 55, 0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, w, h);
      
      // Estrelas
      stars.forEach((s) => {
        s.tw += s.twSpeed;
        const opacity = 0.4 + Math.sin(s.tw) * 0.4;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * s.z, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
        
        // Estrelas maiores têm brilho
        if (s.r > 1.2) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * s.z * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(212, 175, 55, ${opacity * 0.15})`;
          ctx.fill();
        }
      });
      
      requestAnimationFrame(draw);
    }
    
    window.addEventListener('resize', resize);
    resize();
    draw();
  }

  // ========================================================================
  // LOADING SCREEN
  // ========================================================================
  function initLoader() {
    const loader = document.getElementById('loader');
    if (!loader) return;
    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('is-hidden');
        document.body.style.overflow = 'auto';
      }, 1800);
    });
    document.body.style.overflow = 'hidden';
  }

  // ========================================================================
  // CUSTOM CURSOR
  // ========================================================================
  function initCursor() {
    const cursor = document.getElementById('cursor');
    const dot = document.getElementById('cursor-dot');
    if (!cursor || !dot) return;
    
    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';
    });
    
    function animate() {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';
      requestAnimationFrame(animate);
    }
    animate();
    
    // Hover em elementos interativos
    document.querySelectorAll('a, button, .portfolio__item, .shop__card, .catalogue__item, .book-spine').forEach((el) => {
      el.addEventListener('mouseenter', () => cursor.classList.add('is-hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('is-hover'));
    });
  }

  // ========================================================================
  // NAVIGATION
  // ========================================================================
  function initNav() {
    const nav = document.getElementById('nav');
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');
    const langToggle = document.getElementById('lang-toggle');
    
    // Scrolled state
    window.addEventListener('scroll', () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 50);
      
      // Progress bar
      const progress = document.getElementById('scroll-progress');
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const pct = (scrollTop / docHeight) * 100;
      progress.style.width = pct + '%';
      
      // Back to top
      const btt = document.getElementById('back-to-top');
      btt.classList.toggle('is-visible', window.scrollY > 600);
    });
    
    // Mobile toggle
    if (toggle) {
      toggle.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('is-open');
        toggle.classList.toggle('is-open', isOpen);
        toggle.setAttribute('aria-expanded', isOpen);
      });
    }
    
    // Close menu on link click
    if (menu) {
      menu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          menu.classList.remove('is-open');
          toggle.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
        });
      });
    }
    
    // Language toggle
    if (langToggle) {
      langToggle.addEventListener('click', () => {
        if (window.i18n) window.i18n.toggle();
      });
    }
    
    // Back to top
    const btt = document.getElementById('back-to-top');
    if (btt) {
      btt.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
    
    // Footer year
    const yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  // ========================================================================
  // RENDER BIO
  // ========================================================================
  function renderBio() {
    if (!window.BIO) return;
    const textEl = document.getElementById('bio-full-text');
    if (!textEl) return;
    const lang = window.i18n ? window.i18n.lang : 'pt';
    const paragraphs = BIO.fullBio[lang];
    textEl.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
  }

  // ========================================================================
  // RENDER HERO STATS
  // ========================================================================
  function renderHeroStats() {
    if (!window.BIO) return;
    const el = document.getElementById('hero-stats');
    if (!el) return;
    const lang = window.i18n ? window.i18n.lang : 'pt';
    el.innerHTML = BIO.stats.map(s => `
      <div class="hero__stat">
        <div class="hero__stat-num">${s.number}</div>
        <div class="hero__stat-label">${s.label[lang]}</div>
      </div>
    `).join('');
  }

  // ========================================================================
  // RENDER PORTFOLIO
  // ========================================================================
  function renderPortfolio(filter = 'all') {
    if (!window.ARTWORKS) return;
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;
    const lang = window.i18n ? window.i18n.lang : 'pt';
    
    const filtered = filter === 'all' 
      ? ARTWORKS 
      : ARTWORKS.filter(a => a.medium === filter);
    
    grid.innerHTML = filtered.map(art => {
      const imgFile = `assets/artworks/${art.id}-${art.slug}.svg`;
      return `
        <article class="portfolio__item" data-artwork-id="${art.id}" tabindex="0">
          <div class="portfolio__item-status ${art.status}">
            ${art.status === 'available' ? (lang === 'pt' ? 'Disponível' : 'Available') : (lang === 'pt' ? 'Vendida' : 'Sold')}
          </div>
          <img src="${imgFile}" alt="${art.title[lang]}" class="portfolio__item-img" loading="lazy" />
          <div class="portfolio__item-overlay">
            <div class="portfolio__item-id">${art.id} · ${art.year}</div>
            <h3 class="portfolio__item-title">${art.title[lang]}</h3>
            <div class="portfolio__item-meta">
              <span>${art.technique[lang]}</span>
              <span>${art.dimensions}</span>
            </div>
          </div>
        </article>
      `;
    }).join('');
    
    // Re-bind click
    grid.querySelectorAll('.portfolio__item').forEach(item => {
      item.addEventListener('click', () => openArtworkModal(item.dataset.artworkId));
      item.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') openArtworkModal(item.dataset.artworkId);
      });
    });
  }
  
  function getSlug(text) {
    return text.toLowerCase()
      .replace(/[àáâãäå]/g, 'a').replace(/[èéêë]/g, 'e').replace(/[ìíîï]/g, 'i')
      .replace(/[òóôõö]/g, 'o').replace(/[ùúûü]/g, 'u').replace(/[ç]/g, 'c')
      .replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  }

  // ========================================================================
  // RENDER CATALOGUE
  // ========================================================================
  function renderCatalogue() {
    if (!window.ARTWORKS) return;
    const list = document.getElementById('catalogue-list');
    if (!list) return;
    const lang = window.i18n ? window.i18n.lang : 'pt';
    
    const headerLabels = {
      pt: { id: 'Nº', thumb: '', title: 'Título', technique: 'Técnica', dim: 'Dimensões', year: 'Ano' },
      en: { id: 'No.', thumb: '', title: 'Title', technique: 'Technique', dim: 'Dimensions', year: 'Year' }
    };
    const L = headerLabels[lang];
    
    list.innerHTML = `
      <div class="catalogue__header">
        <span>${L.id}</span>
        <span></span>
        <span>${L.title}</span>
        <span>${L.technique}</span>
        <span>${L.dim}</span>
        <span>${L.year}</span>
      </div>
      ${ARTWORKS.map(art => {
        const imgFile = `assets/artworks/${art.id}-${art.slug}.svg`;
        return `
          <div class="catalogue__item" data-artwork-id="${art.id}" tabindex="0">
            <div class="catalogue__item-id">${art.id}</div>
            <img src="${imgFile}" alt="${art.title[lang]}" class="catalogue__item-thumb" loading="lazy" />
            <div class="catalogue__item-title">${art.title[lang]}</div>
            <div class="catalogue__item-technique">${art.technique[lang]}</div>
            <div class="catalogue__item-dim">${art.dimensions}</div>
            <div class="catalogue__item-year">${art.year}</div>
          </div>
        `;
      }).join('')}
    `;
    
    list.querySelectorAll('.catalogue__item').forEach(item => {
      item.addEventListener('click', () => openArtworkModal(item.dataset.artworkId));
      item.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') openArtworkModal(item.dataset.artworkId);
      });
    });
  }

  // ========================================================================
  // RENDER SHOP
  // ========================================================================
  function renderShop() {
    if (!window.ARTWORKS) return;
    const grid = document.getElementById('shop-grid');
    if (!grid) return;
    const lang = window.i18n ? window.i18n.lang : 'pt';
    
    const available = ARTWORKS.filter(a => a.status === 'available');
    
    grid.innerHTML = available.map(art => {
      const imgFile = `assets/artworks/${art.id}-${art.slug}.svg`;
      return `
        <article class="shop__card">
          <div class="shop__card-img">
            <img src="${imgFile}" alt="${art.title[lang]}" loading="lazy" />
          </div>
          <div class="shop__card-body">
            <div class="shop__card-id">${art.id} · ${art.year}</div>
            <h3 class="shop__card-title">${art.title[lang]}</h3>
            <div class="shop__card-meta">
              ${art.technique[lang]}<br/>
              ${art.dimensions}
            </div>
            <div class="shop__card-price">${art.price}</div>
            <span class="shop__card-status available">${lang === 'pt' ? 'Disponível' : 'Available'}</span>
            <button class="btn btn--ghost btn--full shop__card-btn" data-artwork-id="${art.id}">
              ${lang === 'pt' ? 'Solicitar informações' : 'Request information'}
            </button>
          </div>
        </article>
      `;
    }).join('');
    
    grid.querySelectorAll('.shop__card-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        openArtworkModal(btn.dataset.artworkId);
      });
    });
  }

  // ========================================================================
  // RENDER BECO STREET
  // ========================================================================
  function renderBeco() {
    if (!window.BECO_STREET) return;
    const lang = window.i18n ? window.i18n.lang : 'pt';
    const desc = document.getElementById('beco-description');
    const highlights = document.getElementById('beco-highlights');
    if (desc) desc.textContent = BECO_STREET.description[lang];
    if (highlights) {
      highlights.innerHTML = BECO_STREET.highlights.map(h => `<li>${h[lang]}</li>`).join('');
    }
  }

  // ========================================================================
  // RENDER BOOKS
  // ========================================================================
  function renderBooks() {
    if (!window.BOOKS) return;
    const lang = window.i18n ? window.i18n.lang : 'pt';
    const desc = document.getElementById('books-description');
    const stats = document.getElementById('books-stats');
    const shelf = document.getElementById('books-shelf');
    
    if (desc) desc.textContent = BOOKS.description[lang];
    if (stats) {
      stats.innerHTML = BOOKS.stats.map(s => `
        <div class="books__stat">
          <div class="books__stat-num">${s.number}</div>
          <div class="books__stat-label">${s.label[lang]}</div>
        </div>
      `).join('');
    }
    if (shelf) {
      // Gera 40 lombadas fictícias
      const titles = lang === 'pt' 
        ? ['Cosmos', 'Dada', 'Planeta', 'Invenção', 'Eclipse', 'Nebulosa', 'Saturno', 'Buraco Negro', 'Constelação', 'Mercúrio', 'Vênus', 'Júpiter', 'Marte', 'Atelier', 'Pintura', 'Tinta', 'Óleo', 'Acrílica', 'Colagem', 'Autômato']
        : ['Cosmos', 'Dada', 'Planet', 'Invention', 'Eclipse', 'Nebula', 'Saturn', 'Black Hole', 'Constellation', 'Mercury', 'Venus', 'Jupiter', 'Mars', 'Studio', 'Painting', 'Ink', 'Oil', 'Acrylic', 'Collage', 'Automaton'];
      let html = '';
      for (let i = 0; i < 40; i++) {
        const title = titles[i % titles.length] + ' #' + (i + 1);
        const width = 24 + (i % 6) * 4;
        const height = 120 + (i % 5) * 18;
        html += `<div class="book-spine" style="width: ${width}px; height: ${height}px;">${title}</div>`;
      }
      shelf.innerHTML = html;
    }
  }

  // ========================================================================
  // RENDER EXHIBITIONS
  // ========================================================================
  function renderExhibitions() {
    if (!window.EXHIBITIONS) return;
    const timeline = document.getElementById('exhibitions-timeline');
    if (!timeline) return;
    const lang = window.i18n ? window.i18n.lang : 'pt';
    
    timeline.innerHTML = EXHIBITIONS.map(ex => `
      <div class="exhibition__item">
        <div class="exhibition__year">${ex.year}</div>
        <h3 class="exhibition__title">${ex.title[lang]}</h3>
        <div class="exhibition__venue">${ex.venue[lang]}</div>
        <span class="exhibition__type">${ex.type[lang]}</span>
      </div>
    `).join('');
  }

  // ========================================================================
  // MODAL - DETALHE DA OBRA
  // ========================================================================
  function openArtworkModal(artworkId) {
    if (!window.ARTWORKS) return;
    const art = ARTWORKS.find(a => a.id === artworkId);
    if (!art) return;
    const lang = window.i18n ? window.i18n.lang : 'pt';
    const modal = document.getElementById('artwork-modal');
    const body = document.getElementById('modal-body');
    
    const imgFile = `assets/artworks/${art.id}-${art.slug}.svg`;
    const L = lang === 'pt' ? {
      technique: 'Técnica',
      dimensions: 'Dimensões',
      series: 'Série',
      provenance: 'Procedência',
      exhibitions: 'Exposições',
      bibliography: 'Bibliografia',
      signature: 'Assinatura',
      condition: 'Estado de conservação',
      inquire: 'Solicitar informação',
      available: 'Disponível',
      sold: 'Vendida',
    } : {
      technique: 'Technique',
      dimensions: 'Dimensions',
      series: 'Series',
      provenance: 'Provenance',
      exhibitions: 'Exhibitions',
      bibliography: 'Bibliography',
      signature: 'Signature',
      condition: 'Condition',
      inquire: 'Inquire',
      available: 'Available',
      sold: 'Sold',
    };
    
    body.innerHTML = `
      <div class="modal__body-img">
        <img src="${imgFile}" alt="${art.title[lang]}" />
      </div>
      <div class="modal__body-info">
        <div class="modal__id">${art.id} · ${art.series[lang]}</div>
        <h2 class="modal__title">${art.title[lang]}</h2>
        <div class="modal__year">${art.year}</div>
        <p class="modal__description">${art.description[lang]}</p>
        
        <div class="modal__meta">
          <div class="modal__meta-item">
            <div class="modal__meta-label">${L.technique}</div>
            <div class="modal__meta-value">${art.technique[lang]}</div>
          </div>
          <div class="modal__meta-item">
            <div class="modal__meta-label">${L.dimensions}</div>
            <div class="modal__meta-value">${art.dimensions}</div>
          </div>
          <div class="modal__meta-item">
            <div class="modal__meta-label">${L.provenance}</div>
            <div class="modal__meta-value">${art.provenance[lang]}</div>
          </div>
          <div class="modal__meta-item">
            <div class="modal__meta-label">${L.exhibitions}</div>
            <div class="modal__meta-value">${art.exhibitions.map(e => e[lang]).join('<br/>')}</div>
          </div>
          <div class="modal__meta-item">
            <div class="modal__meta-label">${L.bibliography}</div>
            <div class="modal__meta-value">${art.bibliography.join('<br/>')}</div>
          </div>
          <div class="modal__meta-item">
            <div class="modal__meta-label">${L.signature}</div>
            <div class="modal__meta-value">${art.signature[lang]}</div>
          </div>
          <div class="modal__meta-item">
            <div class="modal__meta-label">${L.condition}</div>
            <div class="modal__meta-value">${art.condition[lang]}</div>
          </div>
        </div>
        
        <div class="modal__price">${art.price}</div>
        <a href="#contact" class="btn btn--primary" data-close-modal-then-scroll>${L.inquire}</a>
      </div>
    `;
    
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  
  function closeModal() {
    const modal = document.getElementById('artwork-modal');
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
  }

  // ========================================================================
  // PORTFOLIO FILTERS
  // ========================================================================
  function initPortfolioFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        renderPortfolio(btn.dataset.filter);
      });
    });
  }

  // ========================================================================
  // CONTACT FORM
  // ========================================================================
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    const status = document.getElementById('form-status');
    const submit = document.getElementById('contact-submit');
    const lang = window.i18n ? window.i18n.lang : 'pt';
    
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      submit.disabled = true;
      const originalText = submit.textContent;
      submit.textContent = lang === 'pt' ? 'Enviando...' : 'Sending...';
      status.className = 'form-status';
      status.textContent = '';
      
      const data = {
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value,
      };
      
      try {
        // Tentativa via Formspree (configurar CONTACT.formspree em data.js)
        if (window.CONTACT && CONTACT.formspree && !CONTACT.formspree.includes('your-form-id')) {
          const res = await fetch(CONTACT.formspree, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(data),
          });
          if (res.ok) {
            status.className = 'form-status success';
            status.textContent = lang === 'pt' ? 'Mensagem enviada com sucesso. Retornarei em breve.' : 'Message sent successfully. I will reply soon.';
            form.reset();
          } else {
            throw new Error('Formspree error');
          }
        } else {
          // Fallback: mailto
          const subject = `[Site] ${data.subject} - ${data.name}`;
          const body = `${data.message}\n\n---\nNome: ${data.name}\nEmail: ${data.email}`;
          window.location.href = `mailto:${window.CONTACT ? CONTACT.email : 'contato@guimiranda.tech'}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
          status.className = 'form-status success';
          status.textContent = lang === 'pt' ? 'Abrindo seu cliente de email...' : 'Opening your email client...';
        }
      } catch (err) {
        status.className = 'form-status error';
        status.textContent = lang === 'pt' ? 'Erro ao enviar. Tente novamente ou escreva diretamente para o email.' : 'Error sending. Try again or write directly to the email.';
      } finally {
        submit.disabled = false;
        submit.textContent = originalText;
      }
    });
  }

  // ========================================================================
  // MODAL CLOSE HANDLERS
  // ========================================================================
  function initModalClose() {
    document.querySelectorAll('[data-close-modal]').forEach(el => {
      el.addEventListener('click', closeModal);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
    // "Inquire" no modal fecha e rola pro contato
    document.addEventListener('click', (e) => {
      if (e.target.hasAttribute('data-close-modal-then-scroll')) {
        e.preventDefault();
        closeModal();
        setTimeout(() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      }
    });
  }

  // ========================================================================
  // SMOOTH SCROLL (already CSS but extra safety for older browsers)
  // ========================================================================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ========================================================================
  // BOOT
  // ========================================================================
  function boot() {
    // Init i18n primeiro
    if (window.i18n) window.i18n.init();
    
    // Starfield
    initStarfield();
    
    // Loader
    initLoader();
    
    // Cursor (apenas desktop)
    if (window.matchMedia('(hover: hover)').matches) {
      initCursor();
    }
    
    // Nav
    initNav();
    
    // Render dinâmico
    renderBio();
    renderHeroStats();
    renderPortfolio();
    initPortfolioFilters();
    renderCatalogue();
    renderShop();
    renderBeco();
    renderBooks();
    renderExhibitions();
    
    // Interactions
    initModalClose();
    initContactForm();
    initSmoothScroll();
    
    // Re-aplica i18n depois do render dinâmico
    if (window.i18n) window.i18n.apply();
    
    // GSAP refresh depois de tudo renderizado
    setTimeout(() => {
      if (window.ScrollTrigger) ScrollTrigger.refresh();
    }, 1000);
  }
  
  // Expor para re-render no toggle de idioma
  window.renderPortfolio = renderPortfolio;
  window.renderCatalogue = renderCatalogue;
  window.renderShop = renderShop;
  window.renderExhibitions = renderExhibitions;
  window.renderBio = renderBio;
  window.renderHeroStats = renderHeroStats;
  window.renderBeco = renderBeco;
  window.renderBooks = renderBooks;
  
  // Patch do i18n.toggle para re-renderizar tudo
  const origToggle = window.i18n ? window.i18n.toggle.bind(window.i18n) : null;
  if (origToggle) {
    window.i18n.toggle = function() {
      origToggle();
      renderBio();
      renderHeroStats();
      renderPortfolio(document.querySelector('.filter-btn.is-active')?.dataset.filter || 'all');
      renderCatalogue();
      renderShop();
      renderBeco();
      renderBooks();
      renderExhibitions();
      if (window.ScrollTrigger) setTimeout(() => ScrollTrigger.refresh(), 100);
    };
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
