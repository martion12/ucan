import './style.css';

const affirmations = [

  "我充满能量和创造力",
  "我值得拥有最好的一切",
  "我正在成为更好的自己",
  "我选择放弃攀比",
  "我的潜力是无限的",
  "我对自己充满信心",
  "我正在实现我的梦想",
  "我值得被爱和尊重",
  "我拥有无限的力量",
  "我站在我自己的力量之上",
  "我全身心投入当下",
  "我专注于当下",
  "我全心全意的相信我自己",
  "我值得拥有幸福的生活",
  "我掌握自己幸福的钥匙",
  "我拥有无限的能量",
  "我有能力完成不可思议的事情",
  "我拥有无限的创造力",
];

let currentIndex = Math.floor(Math.random() * affirmations.length);

function createRipple(event) {
  const ripple = document.createElement('div');
  ripple.classList.add('ripple', 'animate-ripple');
  ripple.style.left = `${event.clientX - 200}px`;
  ripple.style.top = `${event.clientY - 200}px`;
  document.body.appendChild(ripple);
  
  setTimeout(() => ripple.remove(), 1000);
  
  updateAffirmation();
}

function updateAffirmation() {
  const affirmationElement = document.getElementById('affirmation');
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * affirmations.length);
  } while (newIndex === currentIndex);
  
  currentIndex = newIndex;
  affirmationElement.classList.remove('animate-fade');
  void affirmationElement.offsetWidth;
  affirmationElement.classList.add('animate-fade');
  affirmationElement.textContent = affirmations[currentIndex];
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', createRipple);
  updateAffirmation();
});