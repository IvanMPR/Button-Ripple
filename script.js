const btn = document.querySelector('button');

btn.addEventListener('click', function (e) {
  const x = e.offsetX;
  const y = e.offsetY;

  const circle = document.createElement('span');
  circle.classList.add('animation');
  circle.style.position = 'absolute';
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
  circle.style.transform = 'translate(-50%, -50%)';
  circle.style.width = '10rem';
  circle.style.height = '10rem';
  circle.style.borderRadius = '50%';
  circle.style.backgroundColor = '#fff';
  circle.style.opacity = '0.8';

  btn.appendChild(circle);
  setTimeout(() => {
    btn.removeChild(circle);
  }, 500);
});
