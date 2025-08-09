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
  const aboutTextEn = "I am passionate about video game development and hold an Advanced Technical Diploma in Cross-Platform Application Development. While my goal is to work in the gaming industry, I am open to other opportunities where I can apply my technical skills and grow professionally.";

  const aboutTitleEs = "Sobre mí";
  const aboutTextEs = "Soy un apasionado del desarrollo de videojuegos y tengo un Ciclo Superior en Desarrollo de Aplicaciones Multiplataforma. Aunque mi objetivo es trabajar en la industria del videojuego, estoy abierto a otras oportunidades donde pueda aplicar mis habilidades técnicas y crecer profesionalmente.";

  const studiesEn = "Unity C# Programmer & Adaptable Developer.";
  const studiesEs = "Programador de C# para Unity & Desarrollador Adaptable.";

  const studiesSubEn = "I believe that my greatest quality is my ability to learn and adapt to new work methods and technologies that provide me with possibilities that I did not contemplate, expanding horizons excites me.";
  const studiesSubEs = "Creo que mi mayor cualidad es mi capacidad de aprendizaje y adaptación a nuevos métodos de trabajo y tecnologías que me aporten posibilidades que no contemplaba, expadir horizontes me apasiona.";

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
  const disponibilidadResEs = "Listo para trabajar";

  const inicioEn ="Home";
  const inicioEs = "Inicio";

  const sobremiEn = "About me";
  const sobremiEs = "Sobre mí";

  const postsobremiEn = "I've been in the labor market for a while now, but in a position that doesn't allow me to enjoy my passion for programming, so I'm very interested in job opportunities that give me the chance to explore that side of the job. I must emphasize that what I am most proud of is that when people ask me if I know how to do something, I have two main possible answers: 'Yes' or 'Not yet'. If you don't know how to do something you need to do, the best option is to learn.";
  const postsobremiEs = "Llevo un tiempo en el mercado laboral pero en un puesto que no me permite disfrutar de mi pasión por la programación, así que estoy muy interesado en oportunidades de empleo que me den la posibilidad de explorar esa faceta del trabajo. He de destacar que aquello de lo que más me enorgullezco es que cuando me preguntan si sé hacer algo tengo dos posibles respuestas principales: 'Sí' o 'Aún no', si no sabes hacer algo que necesitas hacer, la mejor opción es aprender.";

  const curriresEn = "Resume";
  const curriresEs = "Currículum";

  const curriEn = "Up to now I don't have many medium-sized projects behind me, largely due to the time demands of my work, however during my studies and during some Game Jams I have made small games in Unity that have been quite rewarding to develop, I have also created some tools in Python to make the repetitive processes in my current job easier.";
  const curriEs = "Hasta ahora no cuento con muchos proyectos medianos a mis espaldas, en gran medidad debido a la demanda de tiempo de mi trabajo, sin embargo durante mis estudios y durante alguna Game Jam he hecho pequeños juegos en Unity que me han resultado bastante gratificantes de desarrollar, también he creado algunas herramientas en Python para facilitarme los procesos repetitivos en mi trabajo actual.";
  
  const resumenEn = "Sumary";
  const resumenEs = "Resumen";

  const estudiosEn = "Currently my most important studies are my Advanced Technical Diploma in Cross-Platform Application Development as I already mentioned, nevertheless, I have other minor TIC related courses as an Unity Game Development and an AI Tools for Work intensives.";
  const estudiosEs = "Actualmente mis estudios más importantes son mi Ciclo Superior de Desarrollo de Aplicaciones Multiplataforma como ya mencioné, sin embargo, tengo otros cursos menores relacionados con las TIC como unos intensivos de Desarrollo de Juegos en Unity y de Herramientas de IA para el Trabajo.";

  const estudiostitEn = "Education";
  const estudiostitEs = "Estudios";

  const perksEn = "Main Skills";
  const perksEs = "Habilidades";

  const utilesEn = "Work useful skills";
  const utilesEs = "Habilidades útiles para el trabajo";

  const progskillsEn = "My programming knowledge is mostly focused on Object Oriented Programming languages: C#, C++, Java and Python.";
  const progskillsEs = "Mi conocimiento de programación se centra en los lenguajes de Programación Orientada a Objetos: C#, C++, Java y Python.";
  const webskillsEn = "As you can see I'm also capable of setting a working website using online tools combined with HTML, CSS and JS.";
  const webskillsEs = "Como se puede comprobar soy capaz de preparar una página web funcional usando herramientas online combinadas con HTML, CSS y JS.";
  const engskillsEn = "I'm a native spanish speaker with advanced english level, I usually understand written english without any problem and most of spoken english as well.";
  const engskillsEs = "Soy hablante nativo de español con un nivel de inglés avanzado, normalmente entiendo todo el inglés escrito sin problemas y la mayoría del hablado.";
  const editskillsEn = "One of my interests is editing, so image and video editing could be considered some of my skills too.";
  const editskillsEs = "Uno de mis intereses es la edición, así que la edición de imagen y vídeo se podría considerar también una de mis habilidades.";

  const xpEn = "Professional Experience";
  const xpEs = "Experiencia Laboral";
  const xptsEn = "Techincal Support";
  const xptsEs = "Servicio Técnico";
  const xptsresEn = "My main work since 2 years or so has been providing technical support and guide for TimeCheck, a website and app made for companies to have a register of their employees schedule.";
  const xptsresEs = "Mi principal trabajo durante más o menos 2 años ha sido proporcionar soporte técnico y guía para TimeCheck, una página y aplicación hecha para que las empresas tenga un registro del horario de sus empleados.";
  const xpwhpEn = "Workplace Harassment Protocol";
  const xpwhpEs = "Protocolo de Acoso Laboral";
  const xpwhpresEn = "During last months I started to manage another department focused on giving information and preventing workplace harassment for companies, this work was added to my previous labor as technical support, so currently I'm working on both tasks.";
  const xpwhpresEs = "Durante los últimos meses empece a gestionar otro departamento centrado en dar información y prevenir el acoso laboral en empresas, este trabajo fue añandido a mis labores previas como soporte técnico, así que actualmente trabajo en ambas tareas.";

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