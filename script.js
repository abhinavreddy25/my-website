// Simple JS for interactivity
document.getElementById('year').textContent = new Date().getFullYear();

const modal = document.getElementById('modal');
const loginBtn = document.getElementById('loginBtn');
const closeModal = document.getElementById('closeModal');
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

loginBtn.addEventListener('click', ()=> {
  modal.setAttribute('aria-hidden', 'false');
});

closeModal.addEventListener('click', ()=> {
  modal.setAttribute('aria-hidden', 'true');
  loginMessage.textContent = '';
});

loginForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const data = new FormData(loginForm);
  const user = data.get('user');
  // Mock login: accept any non-empty user/pass
  loginMessage.textContent = 'Signing in...';
  setTimeout(()=> {
    loginMessage.textContent = 'Welcome, ' + user + '!';
  }, 600);
});

// Contact form mock
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
contactForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const fd = new FormData(contactForm);
  formMessage.textContent = 'Thanks ' + (fd.get('name')||'') + '! Message received.';
  contactForm.reset();
});
