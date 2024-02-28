
function fadeIn(element) {
    anime({
      targets: element,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 1000,
      easing: 'easeInOutQuad',
    });
  }
 
  function fadeOut(element) {
    anime({
      targets: element,
      opacity: [1, 0],
      translateY: [0, 20],
      duration: 1000,
      easing: 'easeInOutQuad',
    });
  }
  
  function fadeInSkills() {
    const skillsSection = document.querySelector('.skills');
    const skillItems = document.querySelectorAll('.skill');
  
    anime.timeline({ easing: 'easeInOutQuad' })
      .add({
        targets: skillsSection,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1000,
      })
      .add({
        targets: skillItems,
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(200),
      });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const toggleFormationBtn = document.getElementById('toggleFormation');
    const formationDetails = document.querySelector('.experience .details');
  
    toggleFormationBtn.addEventListener('click', function() {
      formationDetails.classList.toggle('show-details');
  
      if (formationDetails.classList.contains('show-details')) {
        fadeIn(formationDetails);
      } else {
        fadeOut(formationDetails);
      }
    });
  
    fadeIn(document.querySelector('header'));
    fadeInSkills(); 
    fadeIn(document.querySelector('footer'));
  });

  document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    const starryBackground = document.createElement('div');
    starryBackground.className = 'starry-background';
    body.appendChild(starryBackground);
  
    
    for (let i = 0; i < 200; i++) {
      const star = document.createElement('div');
      star.className = 'stars';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 3 + 1}s`;
      starryBackground.appendChild(star);
    }
  });

  



  
  
  