  function toggleMenu() {
    document.querySelector("nav").classList.toggle("active");
}
  
  // إغلاق القائمة عند الضغط على أي رابط أو زر
  const nav = document.querySelector("nav");
  const linksAndButton = nav.querySelectorAll("a, button");

  linksAndButton.forEach(el => {
    el.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });




// scroll contact us 
    function scrollToSection() {
    document.getElementById("contactUs").scrollIntoView({
      behavior: "smooth"
    });
  }



// scroll to home
    function scrollToHome() {
    document.getElementById("home").scrollIntoView({
      behavior: "smooth"
    });
}
  
// scroll 
  function scrollOffers(direction) {
    const container = document.querySelector('.offers-row');
    const scrollAmount = 300;

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}
  


//emaill protocol send data


  // Initialize EmailJS
  (function() {
    emailjs.init("IbbG69TuO-Uyx_4I8"); // استبدل بـ مفتاحك العام من EmailJS
  })();

  // إرسال النموذج
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_9a47m0s", "template_vlo4ub3", this)     //  change service ,templet 
      .then(function(response) {
        document.getElementById("status-message").textContent = "✅ Message sent successfully!";
      }, function(error) {
        document.getElementById("status-message").textContent = "❌ Failed to send message.";
      });

    this.reset();
  });

  // “Contact us” button that opens a modal containing a form
 const contactBtn = document.getElementById('contactBtn');
const contactModal = document.getElementById('contactModal');
const closeBtn = document.querySelector('.close');

// فتح النافذة
contactBtn.addEventListener('click', () => {
  contactModal.style.display = 'flex';
});

// غلق النافذة
closeBtn.addEventListener('click', () => {
  contactModal.style.display = 'none';
});

// غلق إذا تم الضغط خارج النموذج
window.addEventListener('click', (event) => {
  if (event.target === contactModal) {
    contactModal.style.display = 'none';
  }
});