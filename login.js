const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const kaydolLink=document.querySelector('.kaydol-link');

kaydolLink.addEventListener('click', ()=> {
	wrapper.classList.add('active');
});
loginLink.addEventListener('click', ()=> {
	wrapper.classList.remove('active');
});
