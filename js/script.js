document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // Hamburger Menu
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  let navOpen = false;
  hamburger.addEventListener('click', () => {
    navOpen = !navOpen;
    nav.style.display = navOpen ? 'block' : 'none';
  });

  // Smooth scrolling for nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: target, autoKill: false },
          ease: "power2.out"
        });
      }
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      if (window.innerWidth <= 768) {
        navOpen = false;
        nav.style.display = 'none';
      }
    });
  });

  // Lottie Animations
  // Hero
  const heroLottie = document.getElementById('heroLottie');
  if (heroLottie) {
    lottie.loadAnimation({
      container: heroLottie,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'animations/phonepopup.json'

      
      
    });
  }
  setTimeout(() => {
    document.querySelector('.hero-section').style.filter = "brightness(1)";
  }, 500);
  
  

  // About
  const aboutLottie = document.getElementById('aboutLottie');
  if (aboutLottie) {
    lottie.loadAnimation({
      container: aboutLottie,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'animations/cartoontechguy.json'
    });
  }

  // Services
  const servicesLottie = document.getElementById('servicesLottie');
  if (servicesLottie) {
    lottie.loadAnimation({
      container: servicesLottie,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'animations/services.json'
    });
  }

  // Projects
  const projectsLottie = document.getElementById('projectsLottie');
  if (projectsLottie) {
    lottie.loadAnimation({
      container: projectsLottie,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'animations/floatingcomputer.json'
    });
  }


  // Fade-in for sections
  gsap.utils.toArray('.section').forEach(section => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%"
      },
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
  });

  // Project Data
  const modalOverlay = document.getElementById('projectModal');
  const modalClose = modalOverlay.querySelector('.modal-close');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalBullets = document.getElementById('modalBullets');
  const modalCarousel = document.querySelector('.modal-carousel');

  const projectData = {
    adminDashboard: {
      title: "Enterprise Admin Dashboard – PHP & Angular",
      description: "A high-performance, enterprise-grade solution built with PHP and Angular.",
      bullets: [
        "MySQL for secure, scalable data storage",
        "RESTful APIs for efficient data flow",
        "Responsive design for seamless user experience"
      ],
      images: [
        "images/admindashboard1.jpg",
        "images/admindashboard2.jpg",
        "images/admindashboard3.jpg",
        "images/admindashboard4.jpg"
      ]
    },
    mobileApp: {
      title: "Cross-Platform Mobile App – Capacitor & Ionic",
      description: "A feature-rich mobile application leveraging Firebase for real-time data.",
      bullets: [
        "Push notifications for Android & iOS",
        "Real-time chat & friend invites",
        "Elastic search for lightning-fast queries"
      ],
      images: [
        "images/mobileapp.png"
      ]
    },
    commandDashboard: {
      title: "Real Estate Command Dashboard – React & Node",
      description: "A modern, real estate agency dashboard with advanced contact filtering.",
      bullets: [
        "Scalable Node.js backend with TypeScript",
        "Responsive UI/UX for seamless agent workflow",
        "MongoDB integration for data storage"
      ],
      images: [
        "images/commanddashboard1.png",
        "images/commanddashboard2.png",
        "images/commanddashboard3.png"
      ]
    }
  };

  // Projects Modal
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const projKey = card.getAttribute('data-project');
      const data = projectData[projKey];
      if (!data) return;
      modalTitle.textContent = data.title;
      modalDescription.textContent = data.description;
      modalBullets.innerHTML = "";
      data.bullets.forEach(b => {
        const li = document.createElement('li');
        li.textContent = b;
        modalBullets.appendChild(li);
      });
      modalCarousel.innerHTML = "";
      data.images.forEach(imgPath => {
        const img = document.createElement('img');
        img.src = imgPath;
        modalCarousel.appendChild(img);
      });
      modalOverlay.style.display = 'flex';
      gsap.fromTo('.modal-content', { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" });
    });
  });

  function closeModal() {
    gsap.to('.modal-content', {
      y: -50,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        modalOverlay.style.display = 'none';
      }
    });
  }

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target.id === 'projectModal') {
      closeModal();
    }
  });
  console.log('About to run testimonials code...');

  const testimonialCarousel = document.querySelector('.testimonial-carousel');
  if (!testimonialCarousel) {
    console.error('testimonial-carousel not found');
    return;
  }
  console.log('Found testimonial-carousel:', testimonialCarousel);
  
  // ... your carousel code here ...
  
  window.addEventListener('load', () => {
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    if (!testimonialCarousel) return; // safety check
  
    // Grab the initial slides
    const slides = Array.from(testimonialCarousel.querySelectorAll('.testimonial-slide'));
  
    // 1) Measure total width of the original slides
    let totalWidth = 0;
    slides.forEach(slide => {
      const style = window.getComputedStyle(slide);
      const marginLeft = parseFloat(style.marginLeft);
      const marginRight = parseFloat(style.marginRight);
      totalWidth += slide.offsetWidth + marginLeft + marginRight;
    });
  
    // 2) Duplicate each slide to create an infinite loop
    slides.forEach(slide => {
      testimonialCarousel.appendChild(slide.cloneNode(true));
    });
    // Now we have twice as many slides in .testimonial-carousel
  
    // 3) Animate from x=0 to x = -(totalWidth), wrapping at totalWidth
    gsap.to(testimonialCarousel, {
      x: `-=${totalWidth}`, // scroll left by totalWidth
      duration: 20,         // how many seconds one full loop takes (adjust speed)
      ease: "none",
      repeat: -1,           // infinite
      modifiers: {
        x: gsap.utils.wrap(0, totalWidth) 
        // once we hit -totalWidth, it wraps back to 0 for a seamless loop
      }
    });
  });
  
  
  // Contact Form
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      // e.preventDefault(); // if intercepting mailto
      // Optional success animation
      // gsap.to(contactForm, {
      //   duration: 0.5,
      //   opacity: 0,
      //   onComplete: () => {
      //     contactForm.style.display = 'none';
      //     formSuccess.style.display = 'block';
      //     gsap.from(formSuccess, { duration: 0.5, opacity: 0 });
      //   }
      // });
    });
  }
});
  