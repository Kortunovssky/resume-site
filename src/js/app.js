
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) entry.target.classList.add('in-view');
});
},
{ threshold: 0.15 }
);
sections.forEach((s) => observer.observe(s));

const sub = document.querySelector('.header__subtitle');
if (sub) {
const txt = sub.textContent;
sub.textContent = '';
let i = 0;
const type = () => {
if (i < txt.length) {
sub.textContent += txt.charAt(i++);
setTimeout(type, 50);
}
};
window.addEventListener('load', () => setTimeout(type, 400));
}
