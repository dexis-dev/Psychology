document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
})





document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.getElementById('scroll-container');
    const sections = document.querySelectorAll('.section');
  
    scrollContainer.addEventListener('scroll', () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isVisible) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    });
  });


  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add('shadow');
    } else {
        header.classList.remove('shadow');
    }
});



document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
      const faqItem = button.parentElement;
      document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== faqItem) {
          item.classList.remove('active');
          item.querySelector('.faq-answer').style.maxHeight = null;
      }
      });
      faqItem.classList.toggle('active');
      const answer = faqItem.querySelector('.faq-answer');
      if (faqItem.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
      answer.style.maxHeight = null;
      }
  });
  });

  const texts = [
    'improve relationships with loved ones',
    'find peace of mind',
    'find your calling'
];

let currentIndex = 0;
const spanElement = document.getElementById('animated-span');

function changeText() {
    spanElement.classList.remove('show'); 
    setTimeout(() => {
        spanElement.textContent = texts[currentIndex]; 
        spanElement.classList.add('show'); 
        currentIndex = (currentIndex + 1) % texts.length;
    }, 500); 
}

setInterval(changeText, 6000);

changeText();


document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);

  fetch('send.php', {
      method: 'POST',
      body: formData
  })
  .then(response => response.text())
  .then(result => {
      document.getElementById('thankYouModal').style.display = 'flex';
  })
  .catch(error => {
      console.error('Error:', error);
  });
});
