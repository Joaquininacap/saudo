(function () {
  const translations = {
    es: {
      // Shared
      nav_about: "Sobre mí",
      nav_contact: "Contacto",

      // Roblox page
      hero_sub_roblox: "Creo experiencias Roblox completas desde cero: gameplay scripting, construcción 3D, modelado, diseño de UI y música original.",
      nav_skills: "Habilidades",
      nav_work: "Proyectos",
      about_title: "Software and Game developer",
      about_intro_roblox_1: "Soy un Desarrollador de juegos. Disfruto trabajar en todo el proceso de desarrollo: desde sistemas de gameplay y código hasta el world building, interfaz y audio!",
      about_intro_roblox_2: "Mi portfolio se construye en torno a dos proyectos: Giant vs All y Slap Olympics, que representan mi experiencia como gamedev construyendo experiencias Roblox.",
      about_item1_title: "Desarrollo de Juegos",
      about_item1_desc: "Sistemas de gameplay, mecánicas y experiencias interactivas.",
      about_item2_title: "Creación Integral",
      about_item2_desc: "Código, entornos, assets, interfaces y música.",
      skills_title: "Qué puedo construir.",
      skill_script: "Luau, sistemas de gameplay, mecánicas, habilidades, interacciones y lógica de juego.",
      skill_building: "Entornos de Roblox, mapas, layouts de nivel, estructuras y ambientación del mundo.",
      skill_modeling: "Props personalizados, assets y elementos 3D listos para el juego.",
      skill_ui: "HUDs, menús, botones, interfaces de juego y sistemas orientados al jugador.",
      skill_music_title: "Música",
      skill_music: "Composiciones originales creadas para apoyar la atmósfera e identidad de un juego.",
      featured_label: "Trabajo Destacado",
      gva_desc: "Experiencia de acción multiplayer en Roblox donde los jugadores pueden tomar el rol del Gigante o unirse a los Cazadores que intentan derribarlo.",
      gva_play: "Jugar ↗",
      contrib_prog_t: "Programación",
      contrib_prog_d: "Gameplay & sistemas",
      contrib_world_d: "Mapa & entorno",
      contrib_model_t: "Modelado 3D",
      contrib_model_d: "Assets personalizados",
      contrib_ui_t: "Diseño de UI",
      contrib_ui_d: "Interfaz & HUD",
      contrib_music_t: "Música",
      contrib_music_d: "Composiciones originales",
      showcase_world_t: "Mundo 3D",
      showcase_world_d: "Entorno, caminos, estructuras y espacio jugable.",
      showcase_ui_ph: "CAPTURA DE UI",
      showcase_ui_d: "HUD, menús e interfaces orientadas al jugador.",
      showcase_music_t: "Música",
      showcase_music_d: "Composiciones originales creadas para apoyar la atmósfera e identidad de un juego.",
      process_label: "Cómo trabajo",
      p1: "Concepto",
      p1_s: "Idea",
      p2: "Diseño",
      p2_s: "Sistemas",
      p3: "Modelo",
      p4_s: "Mundo",
      p6: "Interfaz",
      p7: "Pulido",
      p7_s: "Lanzamiento",
      slap_label: "Segundo Proyecto",
      slap_desc: "Proyecto de Roblox que demuestra experiencia adicional con gameplay, construcción, assets y diseño orientado al jugador.",
      slap_tag_prog: "Programación",
      slap_tag_build: "World Building",
      slap_tag_anim: "Animaciones",
      slap_role_t: "Mi Rol",
      slap_role_d: "Programación, world building, animaciones y diseño de UI.",
      contact_title_roblox: "Construyamos algo.",
      contact_text_roblox: "¿Buscas un desarrollador de Roblox para scripting, construcción de mundos, modelado, UI o desarrollo completo del juego? Envíame un mensaje y charlemos.",
      footer_tag_roblox: "Roblox Game Developer",

      // Software page
      hero_cat_soft: "Desarrollador · Ingeniero de software",
      hero_sub_soft: "Software, contribuciones y proyectos personales.",
      nav_software: "Software",
      nav_contrib: "Contribuciones",
      nav_pages: "Páginas",
      about_title_soft: "Un desarrollador, muchos proyectos.",
      about_intro_soft_1: "Desarrollador de software con experiencia creando aplicaciones web, herramientas de gestión y sitios. Me gusta resolver problemas reales con código limpio y práctico.",
      about_intro_soft_2: "Mi trabajo está en GitHub: repositorios personales, ejercicios de práctica, contribuciones a The Odin Project y proyectos aplicados a negocios reales.",
      about_soft_item1_title: "Aplicaciones Web",
      about_soft_item1_desc: "Herramientas de gestión y sitios construidos con JavaScript, HTML y CSS.",
      about_soft_item2_title: "Aprendizaje Continuo",
      about_soft_item2_desc: "Ejercicios, forks y contribuciones open-source.",
      software_estacionamiento: "Software de gestión de estacionamiento para automatizar entradas y reportes.",
      software_melatte: "Aplicación de gestión de productos e informes comerciales para Cafetería Melatte.",
      software_clase: "Ejercicios y material de práctica en clases de programación.",
      software_clasespaises: "Proyecto relacionado con datos o clases para diferentes países.",
      software_codigosteam: "Scripts relacionados con funcionalidades y códigos de la plataforma Steam.",
      software_miprimerrepo: "Primer repositorio personal de programas de prueba en consola.",
      contrib_title: "Contribuciones",
      contrib_cssexercises: "Ejercicios públicos de The Odin Project. Contribución y práctica con técnicas de CSS moderno (Fork).",
      pages_title: "Páginas y trabajos",
      pages_jardin: "Este sitio web. Portafolio desarrollado para exhibir proyectos de software con un diseño limpio.",
      pages_curriculum: "Un currículum vítae interactivo online y dinámico.",
      pages_recipes: "Proyecto del curso de The Odin Project para construir un libro web de recetas.",
      pages_staff: "Concepto para gestionar empleados de reemplazo de un hospital mediante la web.",
      pages_registro: "Sistema online básico para ingresar contabilidad y control del personal.",
      pages_fichaclinica: "Proyecto para manejar historias clínicas o reportes médicos.",
      pages_repositorioclase: "Repositorio de la clase.",
      pages_gittest: "Primer repositorio de pruebas.",
      tag_misc: "Proyectos Varios",
      tag_otros: "Otros",
      contact_title_soft: "Hablemos.",
      contact_text_soft: "¿Quieres ver más proyectos o colaborar? Envíame un mensaje y charlemos.",
      footer_tag_soft: "Desarrollador de software"
    },
    en: {
      // Shared
      nav_about: "About",
      nav_contact: "Contact",

      // Roblox page
      hero_sub_roblox: "I build complete Roblox experiences from the ground up: gameplay scripting, 3D building, 3D modeling, UI design and original music.",
      nav_skills: "Skills",
      nav_work: "Work",
      about_title: "Software and Game developer",
      about_intro_roblox_1: "I'm a game developer. I enjoy working across the whole development process: from gameplay systems and code to world building, interface and audio!",
      about_intro_roblox_2: "My portfolio is built around two projects: Giant vs All and Slap Olympics, which represent my experience as a game dev building Roblox experiences.",
      about_item1_title: "Game Development",
      about_item1_desc: "Gameplay systems, mechanics and interactive experiences.",
      about_item2_title: "End-to-End Creation",
      about_item2_desc: "Code, environments, assets, interfaces and music.",
      skills_title: "What I can build.",
      skill_script: "Luau, gameplay systems, mechanics, abilities, interactions and game logic.",
      skill_building: "Roblox environments, maps, level layouts, structures and world dressing.",
      skill_modeling: "Custom props, assets and game-ready 3D elements.",
      skill_ui: "HUDs, menus, buttons, gameplay interfaces and player-facing systems.",
      skill_music_title: "Music",
      skill_music: "Original compositions created to support the atmosphere and identity of a game.",
      featured_label: "Featured Work",
      gva_desc: "A multiplayer Roblox action experience where players can take the role of the Giant or join the Hunters trying to take it down.",
      gva_play: "Play Game ↗",
      contrib_prog_t: "Programming",
      contrib_prog_d: "Gameplay & systems",
      contrib_world_d: "Map & environment",
      contrib_model_t: "3D Modeling",
      contrib_model_d: "Custom assets",
      contrib_ui_t: "UI Design",
      contrib_ui_d: "Interface & HUD",
      contrib_music_t: "Music",
      contrib_music_d: "Original compositions",
      showcase_world_t: "3D World Building",
      showcase_world_d: "Environment, roads, structures and gameplay space.",
      showcase_ui_ph: "UI SCREENSHOT",
      showcase_ui_d: "HUD, menus and player-facing interfaces.",
      showcase_music_t: "Music",
      showcase_music_d: "Original compositions created to support the atmosphere and identity of a game.",
      process_label: "How I work",
      p1: "Concept",
      p1_s: "Idea",
      p2: "Design",
      p2_s: "Systems",
      p3: "Model",
      p4_s: "World",
      p6: "Interface",
      p7: "Polish",
      p7_s: "Release",
      slap_label: "Second Project",
      slap_desc: "Roblox project showcasing additional experience with gameplay, building, assets and player-facing design.",
      slap_tag_prog: "Programming",
      slap_tag_build: "World Building",
      slap_tag_anim: "Animations",
      slap_role_t: "My Role",
      slap_role_d: "Programming, world building, animations and UI design.",
      contact_title_roblox: "Let's build something.",
      contact_text_roblox: "Looking for a Roblox developer for scripting, world building, modeling, UI or complete game development? Send me a message and let's talk.",
      footer_tag_roblox: "Roblox Game Developer",

      // Software page
      hero_cat_soft: "Developer · Software Engineer",
      hero_sub_soft: "Software, contributions and personal projects.",
      nav_software: "Software",
      nav_contrib: "Contributions",
      nav_pages: "Pages",
      about_title_soft: "One developer, many projects.",
      about_intro_soft_1: "Software developer experienced building web applications, management tools and sites. I enjoy solving real problems with clean, practical code.",
      about_intro_soft_2: "My work lives on GitHub: personal repositories, practice exercises, contributions to The Odin Project and projects applied to real businesses.",
      about_soft_item1_title: "Web Applications",
      about_soft_item1_desc: "Management tools and sites built with JavaScript, HTML and CSS.",
      about_soft_item2_title: "Continuous Learning",
      about_soft_item2_desc: "Exercises, forks and open-source contributions.",
      software_estacionamiento: "Parking management software to automate entries and reports.",
      software_melatte: "Product management and business reports app for Cafetería Melatte.",
      software_clase: "Exercises and practice material from programming classes.",
      software_clasespaises: "Project related to data or classes for different countries.",
      software_codigosteam: "Scripts related to Steam platform features and codes.",
      software_miprimerrepo: "First personal repository with console test programs.",
      contrib_title: "Contributions",
      contrib_cssexercises: "Public The Odin Project exercises. Contribution and practice with modern CSS techniques (Fork).",
      pages_title: "Pages & projects",
      pages_jardin: "This website. Portfolio built to showcase software projects with a clean design.",
      pages_curriculum: "An interactive, dynamic online resume.",
      pages_recipes: "The Odin Project course project to build a web recipe book.",
      pages_staff: "Concept to manage hospital replacement staff through the web.",
      pages_registro: "Basic online system for entering accounting and staff control.",
      pages_fichaclinica: "Project to manage clinical records or medical reports.",
      pages_repositorioclase: "Class repository.",
      pages_gittest: "First test repository.",
      tag_misc: "Misc Projects",
      tag_otros: "Other",
      contact_title_soft: "Let's talk.",
      contact_text_soft: "Want to see more projects or collaborate? Send me a message and let's talk.",
      footer_tag_soft: "Software Developer"
    }
  };

  const langButtons = document.querySelectorAll('.lang-toggle button');

  function setLang(lang) {
    document.documentElement.lang = lang;
    const dict = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    langButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
    try { localStorage.setItem('saudo-lang', lang); } catch (e) {}
  }

  let currentLang = 'es';
  try { currentLang = localStorage.getItem('saudo-lang') || 'es'; } catch (e) {}
  currentLang = translations[currentLang] ? currentLang : 'es';

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  window.addEventListener('DOMContentLoaded', () => {
    setLang(currentLang);

    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    const easeInOut = t => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    const smoothScrollTo = (targetY, duration = 600) => {
      const startY = window.scrollY;
      const distance = targetY - startY;
      let startTime = null;
      const step = currentTime => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, startY + distance * easeInOut(progress));
        if (elapsed < duration) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    };

    smoothLinks.forEach(link => {
      link.addEventListener('click', event => {
        const targetId = link.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (!target) return;
        event.preventDefault();
        const targetY = window.scrollY + target.getBoundingClientRect().top;
        smoothScrollTo(targetY, 600);
        history.replaceState(null, '', '#' + targetId);
      });
    });

    // --- Discord copy button ---
    const discordBtn = document.querySelector('[data-copy-discord]');

    if (discordBtn) {
      const fallbackCopy = text => {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); } catch (e) {}
        document.body.removeChild(ta);
      };

      discordBtn.addEventListener('click', () => {
        const original = discordBtn.innerHTML;
        const done = () => {
          discordBtn.classList.add('copied');
          discordBtn.innerHTML = '✓ ' + original.replace(/<svg[\s\S]*?<\/svg>\s*/, '');
          setTimeout(() => {
            discordBtn.innerHTML = original;
            discordBtn.classList.remove('copied');
          }, 1600);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText('saudo.cl').then(done).catch(() => { fallbackCopy('saudo.cl'); done(); });
        } else {
          fallbackCopy('saudo.cl');
          done();
        }
      });
    }

    // --- Showcase gallery navigation & lightbox ---
    const lightbox = document.getElementById('lightbox');

    if (lightbox) {
      const lbImg = document.querySelector('[data-lb-img]');
      const lbLevel = document.querySelector('[data-lb-level]');
      const lbStage = document.querySelector('[data-lb-stage]');
      const lbVideo = document.querySelector('[data-lb-video]');
      let isVideo = false;
      let scale = 1;
      let tx = 0;
      let ty = 0;
      let open = false;
      let dragging = false;
      let startX = 0;
      let startY = 0;
      let startTx = 0;
      let startTy = 0;

      const applyTransform = () => {
        lbImg.style.transform = 'translate(' + tx + 'px, ' + ty + 'px) scale(' + scale + ')';
        lbLevel.textContent = Math.round(scale * 100) + '%';
      };
      const resetView = () => { scale = 1; tx = 0; ty = 0; applyTransform(); };
      const openLightbox = src => {
        isVideo = false;
        lbImg.src = src;
        lbVideo.removeAttribute('src');
        lightbox.classList.remove('is-video');
        resetView();
        lightbox.hidden = false;
        lightbox.setAttribute('aria-hidden', 'false');
        open = true;
      };
      const openVideoLightbox = src => {
        isVideo = true;
        lbImg.removeAttribute('src');
        lbVideo.setAttribute('src', src);
        lightbox.classList.add('is-video');
        resetView();
        lightbox.hidden = false;
        lightbox.setAttribute('aria-hidden', 'false');
        open = true;
      };
      const closeLightbox = () => {
        lightbox.hidden = true;
        lightbox.setAttribute('aria-hidden', 'true');
        if (isVideo) {
          lbVideo.removeAttribute('src');
          lightbox.classList.remove('is-video');
          isVideo = false;
        }
        open = false;
      };
      const zoomBy = factor => {
        if (!open) return;
        scale = Math.min(5, Math.max(1, scale * factor));
        applyTransform();
      };

      document.querySelector('[data-lb-close]').addEventListener('click', closeLightbox);
      document.querySelector('[data-lb-zoom-in]').addEventListener('click', () => zoomBy(1.25));
      document.querySelector('[data-lb-zoom-out]').addEventListener('click', () => zoomBy(0.8));

      lbStage.addEventListener('click', e => {
        if (e.target === lbStage) closeLightbox();
      });

      lbStage.addEventListener('wheel', e => {
        if (isVideo) return;
        e.preventDefault();
        zoomBy(e.deltaY < 0 ? 1.15 : 0.87);
      }, { passive: false });

      lbStage.addEventListener('mousedown', e => {
        if (isVideo) return;
        if (e.target !== lbStage && e.target !== lbImg) return;
        dragging = true;
        lbStage.classList.add('dragging');
        startX = e.clientX;
        startY = e.clientY;
        startTx = tx;
        startTy = ty;
      });

      window.addEventListener('mousemove', e => {
        if (!dragging) return;
        tx = startTx + (e.clientX - startX);
        ty = startTy + (e.clientY - startY);
        applyTransform();
      });

      window.addEventListener('mouseup', () => {
        if (!dragging) return;
        dragging = false;
        lbStage.classList.remove('dragging');
      });

      document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && open) closeLightbox();
      });

      document.querySelectorAll('.showcase-gallery[data-gallery]').forEach(media => {
        const urls = media.dataset.gallery.split(',').map(u => u.trim()).filter(Boolean);
        if (!urls.length) return;

        let img = media.querySelector('img.gallery-img');
        if (!img) {
          img = document.createElement('img');
          img.className = 'gallery-img';
          img.loading = 'lazy';
          media.insertBefore(img, media.firstChild);
        }

        let counter = media.querySelector('.gallery-counter');
        if (!counter) {
          counter = document.createElement('span');
          counter.className = 'gallery-counter';
          counter.setAttribute('aria-hidden', 'true');
          media.appendChild(counter);
        }

        let index = 0;
        counter.textContent = '1 / ' + urls.length;

        const updateCounter = () => {
          counter.textContent = (index + 1) + ' / ' + urls.length;
          return urls[index];
        };

        const show = i => {
          index = (i + urls.length) % urls.length;
          img.src = urls[index];
          updateCounter();
        };

        urls.forEach(url => { const probe = new Image(); probe.src = url; });

        let retryLock = false;
        img.addEventListener('error', () => {
          if (retryLock) return;
          retryLock = true;
          console.warn('No se pudo cargar la imagen:', img.src);
          show(index - 1);
          setTimeout(() => { retryLock = false; }, 600);
        });

        const arrows = media.querySelectorAll('.gallery-arrow');
        arrows.forEach(btn => {
          btn.addEventListener('click', e => {
            e.stopPropagation();
            show(index + (btn.classList.contains('prev') ? -1 : 1));
          });
        });

        img.addEventListener('click', () => openLightbox(img.src));
      });

      const videoMedia = document.querySelector('[data-showcase-video]');
      if (videoMedia) {
        videoMedia.addEventListener('click', () => openVideoLightbox('https://streamable.com/e/6poq6g'));
      }
    }

    // --- Matrix Effect Implementation ---
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const canvas2 = document.getElementById('matrix-canvas-glow');
    const ctx2 = canvas2.getContext('2d');

    if (!canvas2) return;

    let cw = window.innerWidth;
    let ch = window.innerHeight;
    const charArr = ['0', '1', 'a', 'b', 'c', 'v', 'x', 'y', 'z', '⌁', 'λ', 'π', 'θ'];
    const fallingCharArr = [];
    const fontSize = 14;

    function Point(x, y) {
      this.x = x;
      this.y = y;
      this.speed = Math.random() * 2 + 1;
    }

    Point.prototype.draw = function () {
      const value = charArr[Math.floor(Math.random() * charArr.length)].toUpperCase();

      ctx2.fillStyle = "rgba(140, 255, 143, 0.4)";
      ctx2.font = fontSize + "px monospace";
      ctx2.fillText(value, this.x, this.y);

      ctx.fillStyle = "#8cff8f";
      ctx.font = fontSize + "px monospace";
      ctx.fillText(value, this.x, this.y);

      this.y += this.speed;
      if (this.y > ch) {
        this.y = Math.random() * -ch;
        this.speed = Math.random() * 2 + 1;
      }
    };

    const initMatrix = () => {
      cw = window.innerWidth;
      ch = window.innerHeight;
      canvas.width = canvas2.width = cw;
      canvas.height = canvas2.height = ch;

      const columns = Math.ceil(cw / fontSize);
      fallingCharArr.length = 0;
      for (let i = 0; i < columns; i++) {
        fallingCharArr.push(new Point(i * fontSize, Math.random() * -ch));
      }
    };

    const updateMatrix = () => {
      ctx.fillStyle = "rgba(13, 18, 20, 0.1)";
      ctx.fillRect(0, 0, cw, ch);

      ctx2.clearRect(0, 0, cw, ch);

      for (let i = 0; i < fallingCharArr.length; i++) {
        fallingCharArr[i].draw();
      }
      requestAnimationFrame(updateMatrix);
    };

    window.addEventListener('resize', initMatrix);
    initMatrix();
    updateMatrix();
  });
})();