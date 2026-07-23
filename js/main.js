AOS.init();

particlesJS('particles-js', {
  particles: {
    number: { value: 60 },
    color: { value: '#1FA89B' },
    shape: { type: 'circle' },
    opacity: { value: 0.3 },
    size: { value: 3 },
    move: {
      enable: true,
      speed: 1
    }
  }
});

const faqs = document.querySelectorAll('.faq-question');

faqs.forEach(btn => {
  btn.addEventListener('click', () => {

    const answer = btn.nextElementSibling;

    answer.style.display =
      answer.style.display === 'block'
      ? 'none'
      : 'block';

  });
});
const phone = document.getElementById('phone');

if (phone) {
  window.addEventListener('mousemove', (e)=>{
    let x = (window.innerWidth / 2 - e.pageX) / 30;
    let y = (window.innerHeight / 2 - e.pageY) / 30;

    phone.style.transform = `translate(${x}px, ${y}px)`;
  });
}
