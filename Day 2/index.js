const calendarContainer = document.getElementById('calendar');
const treats = [
  "🎄", "☃️", "❄️", "🌟", "🛷", "🍬", "🏔️", "🎚️", "🕯️", "🎶",
  "🛍️", "🦌", "🥛", "🧣", "🍪", "🍷", "🤶", "🧑‍🎄", "🧦", "🔔",
  "🎉", "✨", "🎁", "🎅"
];

for (let i = 1; i <= 24; i++) {
  let box = document.createElement('li');
  box.classList.add('calendar-box');
  box.onclick = function() {
    this.classList.toggle('opened');
  };
  let front = document.createElement('div');
  front.classList.add('box-front');
  let number = document.createElement('p');
  number.innerHTML = i;
  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-gift');
  let description = document.createElement('p');
  description.innerHTML = "Open me!";
  box.appendChild(number);
  box.appendChild(icon);
  box.appendChild(description);
  box.appendChild(front);
  let back = document.createElement('div');
  back.classList.add('box-back');
  if (treats.length > 0) {
    let treatIndex = Math.floor(Math.random() * treats.length);
    let treat = document.createElement('div');
    treat.classList.add('treat');
    treat.innerHTML = treats[treatIndex];
    treats.splice(treatIndex, 1); 
    back.appendChild(treat);
  }
  box.appendChild(back);
  calendarContainer.appendChild(box);
}
