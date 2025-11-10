/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
function setLanguage(lang) {
  // Configuración de los textos para cada idioma
  const typedItemsEn = ["Developer", "Game Designer", "Programmer", "Editor"];
  const typedItemsEs = ["Desarrollador", "Diseñador", "Programador", "Editor"];
  const prefixEn = "I'm";
  const prefixEs = "Soy";

  const aboutTitleEn = "About Me";
  const aboutTextEn = "I am passionate about video game development and hold an Advanced Technical Diploma in Cross-Platform Application Development. While my goal is to work in the games industry, I am also open to other opportunities where I can apply my technical skills and continue growing professionally.";

  const aboutTitleEs = "Sobre mí";
  const aboutTextEs = "Soy un apasionado del desarrollo de videojuegos y cuento con un Ciclo Superior en Desarrollo de Aplicaciones Multiplataforma. Aunque mi objetivo es trabajar en la industria del videojuego, también estoy abierto a otras oportunidades donde pueda aplicar mis habilidades técnicas y seguir creciendo profesionalmente.";

  const studiesEn = "Unity C# Programmer & Adaptable Developer";
  const studiesEs = "Programador de Unity en C# y desarrollador adaptable";

  const studiesSubEn = "I believe my greatest strength is my ability to learn and adapt to new work methods and technologies that open up possibilities I hadn't considered before. Expanding my horizons genuinely excites me.";
  const studiesSubEs = "Creo que mi mayor fortaleza es mi capacidad para aprender y adaptarme a nuevos métodos de trabajo y tecnologías que abren posibilidades que antes no contemplaba. Expandir mis horizontes me entusiasma.";

  const nacimientoEn = "Birthday:";
  const nacimientoEs = "Nacimiento:";

  const nacimientoResEn = "12 July 2001";
  const nacimientoResEs = "12 de julio de 2001";

  const telefonoEn = "Phone:";
  const telefonoEs = "Teléfono:";

  const ciudadEn = "City:";
  const ciudadEs = "Ciudad:";

  const ciudadResEn = "Badajoz, Spain";
  const ciudadResEs = "Badajoz, España";
  
  const edadEn = "Age:";
  const edadEs = "Edad:";
  
  const gradoEn = "Degree:";
  const gradoEs = "Grado:";

  const gradoResEn = "Cross-Platform Application Development";
  const gradoResEs = "Desarrollo de Aplicaciones Multiplataforma";

  const disponibilidadEn = "Availability:";
  const disponibilidadEs = "Disponibilidad:";

  const disponibilidadResEn = "Open to work";
  const disponibilidadResEs = "Disponible para trabajar";

  const inicioEn ="Home";
  const inicioEs = "Inicio";

  const sobremiEn = "About me";
  const sobremiEs = "Sobre mí";

  const postsobremiEn = "I have been in the workforce for a while, but in a role that doesn't let me pursue my passion for programming, so I'm very interested in job opportunities that let me explore that side of the work. The thing I'm proudest of is that when someone asks whether I know how to do something, my answers are usually either 'Yes' or 'Not yet.' If you need to do something you don't know yet, the best option is to learn.";
  const postsobremiEs = "Llevo un tiempo en el mercado laboral, pero en un puesto que no me permite desarrollar mi pasión por la programación, así que me interesan mucho las oportunidades que me permitan explorar esa faceta del trabajo. De lo que más orgulloso estoy es de que, cuando me preguntan si sé hacer algo, mis respuestas suelen ser 'Sí' o 'Aún no'. Si necesitas hacer algo que todavía no sabes, la mejor opción es aprender.";

  const curriresEn = "Resume";
  const curriresEs = "Currículum";

  const curriEn = "So far I haven't completed many mid-sized projects, largely because of the time demands of my job. Even so, during my studies and a few Game Jams I have created small Unity games that were very rewarding to develop, and I've also built Python tools to streamline repetitive processes in my current job.";
  const curriEs = "Hasta ahora no cuento con muchos proyectos de tamaño medio, en gran medida por las exigencias de tiempo de mi trabajo. Aun así, durante mis estudios y en algunas Game Jams he creado pequeños juegos en Unity que han sido muy gratificantes de desarrollar, y también he hecho algunas herramientas en Python para agilizar los procesos repetitivos de mi trabajo actual.";

  const resumenEn = "Summary";
  const resumenEs = "Resumen";

  const estudiosEn = "At the moment my most relevant studies are my Advanced Technical Diploma in Cross-Platform Application Development, as I already mentioned. I have also completed shorter ICT-related courses such as Unity Game Development and AI Tools for Work intensives.";
  const estudiosEs = "En estos momentos mis estudios más relevantes son el Ciclo Superior de Desarrollo de Aplicaciones Multiplataforma, como ya mencioné. También he completado otros cursos más breves relacionados con las TIC, como intensivos de Desarrollo de Juegos en Unity y de Herramientas de IA para el trabajo.";

  const estudiostitEn = "Education";
  const estudiostitEs = "Estudios";

  const perksEn = "Key Skills";
  const perksEs = "Habilidades principales";

  const utilesEn = "Useful workplace skills";
  const utilesEs = "Habilidades útiles para el trabajo";

  const progskillsEn = "My programming knowledge is mostly focused on object-oriented languages such as C#, C++, Java, and Python.";
  const progskillsEs = "Mi conocimiento de programación se centra sobre todo en lenguajes orientados a objetos: C#, C++, Java y Python.";
  const webskillsEn = "As you can see, I'm also able to build a working website using online tools combined with HTML, CSS, and JavaScript.";
  const webskillsEs = "Como se puede comprobar, soy capaz de preparar una página web funcional usando herramientas en línea combinadas con HTML, CSS y JavaScript.";
  const engskillsEn = "I'm a native Spanish speaker with an advanced English level; I usually understand written English without any problem and most spoken English as well.";
  const engskillsEs = "Soy hablante nativo de español con un nivel avanzado de inglés; normalmente entiendo el inglés escrito sin problemas y la mayor parte del inglés hablado.";
  const editskillsEn = "One of my interests is editing, so image and video editing are also among my skills.";
  const editskillsEs = "Uno de mis intereses es la edición, así que la edición de imagen y vídeo también forma parte de mis habilidades.";

  const xpEn = "Professional Experience";
  const xpEs = "Experiencia Laboral";
  const xptsEn = "Technical Support";
  const xptsEs = "Soporte técnico";
  const xptsresEn = "For the past two years or so my main work has been providing technical support and guidance for TimeCheck, a website and app created so companies can record their employees' schedules.";
  const xptsresEs = "Mi trabajo principal durante los últimos dos años aproximadamente ha sido proporcionar soporte técnico y orientación para TimeCheck, una página web y aplicación que permite a las empresas registrar el horario de sus empleados.";
  const xpwhpEn = "Workplace Harassment Protocol";
  const xpwhpEs = "Protocolo de acoso laboral";
  const xpwhpresEn = "In recent months I began managing another department focused on providing information and preventing workplace harassment for companies. This work was added to my previous responsibilities as technical support, so I am currently carrying out both tasks.";
  const xpwhpresEs = "Durante los últimos meses empecé a gestionar otro departamento centrado en ofrecer información y prevenir el acoso laboral en las empresas. Este trabajo se sumó a mis funciones previas como soporte técnico, por lo que actualmente desempeño ambas tareas.";

  // Actualizar el prefijo del texto dinámico
  document.getElementById("dynamic-prefix").innerText = lang === 'en' ? prefixEn : prefixEs;

  // Actualizar la sección "About Me"
  document.getElementById("about-title").innerText = lang === 'en' ? aboutTitleEn : aboutTitleEs;
  document.getElementById("about-text").innerText = lang === 'en' ? aboutTextEn : aboutTextEs;

  document.getElementById("studies").innerText = lang === 'en' ? studiesEn : studiesEs;
  document.getElementById("studies-sub").innerText = lang === 'en' ? studiesSubEn : studiesSubEs;

  document.getElementById("nacimiento").innerText = lang === 'en' ? nacimientoEn : nacimientoEs;
  document.getElementById("nacimiento-res").innerText = lang === 'en' ? nacimientoResEn : nacimientoResEs;

  document.getElementById("telefono").innerText = lang === 'en' ? telefonoEn : telefonoEs;
  
  document.getElementById("ciudad").innerText = lang === 'en' ? ciudadEn : ciudadEs;
  document.getElementById("ciudad-res").innerText = lang === 'en' ? ciudadResEn : ciudadResEs;

  document.getElementById("edad").innerText = lang === 'en' ? edadEn : edadEs;

  document.getElementById("grado").innerText = lang === 'en' ? gradoEn : gradoEs;
  document.getElementById("grado-res").innerText = lang === 'en' ? gradoResEn : gradoResEs;

  document.getElementById("disponibilidad").innerText = lang === 'en' ? disponibilidadEn : disponibilidadEs;
  document.getElementById("disponibilidad-res").innerText = lang === 'en' ? disponibilidadResEn : disponibilidadResEs;

  document.getElementById("inicio").innerText = lang === 'en' ? inicioEn : inicioEs;
  document.getElementById("sobremi").innerText = lang === 'en' ? sobremiEn : sobremiEs;

  document.getElementById("postsobremi").innerText = lang === 'en' ? postsobremiEn : postsobremiEs;

  document.getElementById("curri").innerText = lang === 'en' ? curriEn : curriEs;
  document.getElementById("currirespart").innerText = lang === 'en' ? curriresEn : curriresEs;
  document.getElementById("currires").innerText = lang === 'en' ? curriresEn : curriresEs;

  document.getElementById("resumen").innerText = lang === 'en' ? resumenEn : resumenEs;
  document.getElementById("estudios").innerText = lang === 'en' ? estudiosEn : estudiosEs;
  document.getElementById("estudiostit").innerText = lang === 'en' ? estudiostitEn : estudiostitEs;

  document.getElementById("perks").innerText = lang === 'en' ? perksEn : perksEs;
  document.getElementById("utiles").innerText = lang === 'en' ? utilesEn : utilesEs;

  document.getElementById("progskills").innerText = lang === 'en' ? progskillsEn : progskillsEs;
  document.getElementById("webskills").innerText = lang === 'en' ? webskillsEn : webskillsEs;
  document.getElementById("engskills").innerText = lang === 'en' ? engskillsEn : engskillsEs;
  document.getElementById("editskills").innerText = lang === 'en' ? editskillsEn : editskillsEs;

  document.getElementById("xp").innerText = lang === 'en' ? xpEn : xpEs;
  document.getElementById("xpts").innerText = lang === 'en' ? xptsEn : xptsEs;
  document.getElementById("xptsres").innerText = lang === 'en' ? xptsresEn : xptsresEs;
  document.getElementById("xpwhp").innerText = lang === 'en' ? xpwhpEn : xpwhpEs;
  document.getElementById("xpwhpres").innerText = lang === 'en' ? xpwhpresEn : xpwhpresEs;

  // Eliminar la instancia actual de Typed si existe
  if (window.typedInstance) {
    window.typedInstance.destroy();
  }

  // Reiniciar el contenido del contenedor .typed
  const typedElement = document.querySelector(".typed");
  typedElement.innerHTML = ""; // Limpiar contenido previo

  // Crear una nueva instancia de Typed con el idioma seleccionado
  window.typedInstance = new Typed(".typed", {
    strings: lang === 'en' ? typedItemsEn : typedItemsEs,
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });
}

// Iniciar Typed en inglés por defecto al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  setLanguage("en");
});

(function() {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();