const showModal = () => {
  document.getElementById('modal').classList.add('show');
  const scrollY = document.documentElement.style.getPropertyValue('scrollY');
  const body = document.body;
  body.style.height = '100vh';
  body.style.overflowY = 'hidden';
};
const closeModal = () => {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  body.style.height = '';
  body.style.overflowY = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  document.getElementById('modal').classList.remove('show');

};
window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty(
    'scrollY',
    `${window.scrollY}px`
  );
});

const checkStorage = () => {
  const dateToday = new Date();
  let cookieTimeout  = dateToday.getTime();
  const expValue  = localStorage.getItem('cookieName');
  if (cookieTimeout) {
     if (cookieTimeout  > expValue) {
      cookieTimeout  += (24 * 60 * 60 * 1000);
      localStorage.setItem('cookieName', cookieTimeout);
      showModal();
    }
  } else {
    cookieTimeout  += (24 * 60 * 60 * 1000);
    localStorage.setItem('cookieName', cookieTimeout);
    showModal();
  }
  document.getElementById('btnCancel').addEventListener('click', () => {
    localStorage.removeItem('cookieName');
    closeModal();
  })
};


