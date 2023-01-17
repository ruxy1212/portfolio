//show active sections on scroll
let callback0 = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navlinks.forEach(navlink => {
            navlink.classList.remove('active');
        });
        navlinks[0].classList.add('active');
      }
    });
  }
  let callback1 = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navlinks.forEach(navlink => {
            navlink.classList.remove('active');
        });
        navlinks[1].classList.add('active');
      }
    });
  }
  let callback2 = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navlinks.forEach(navlink => {
            navlink.classList.remove('active');
        });
        navlinks[2].classList.add('active');
      }
    });
  }
  let callback3 = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navlinks.forEach(navlink => {
            navlink.classList.remove('active');
        });
        navlinks[3].classList.add('active');
      }
    });
  }
  let callback4 = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navlinks.forEach(navlink => {
            navlink.classList.remove('active');
        });
      }
    });
  }
  let observer0 = new IntersectionObserver(callback0, {
    threshold: [0.5]
  });
  let observer1 = new IntersectionObserver(callback1, {
    threshold: [0.5]
  });
  let observer2 = new IntersectionObserver(callback2, {
    threshold: [0.5]
  });
  let observer3 = new IntersectionObserver(callback3, {
    threshold: [0.5]
  });
  let observer4 = new IntersectionObserver(callback4, {
    threshold: [0.5]
  });
  
  var navlinks = document.querySelectorAll('.topnav#topnav a'), navsections = document.querySelectorAll('section');
  observer0.observe(navsections[0]);
  observer1.observe(navsections[1]);
  observer2.observe(navsections[2]);
  observer3.observe(navsections[3]);
  observer4.observe(document.querySelector('footer'));