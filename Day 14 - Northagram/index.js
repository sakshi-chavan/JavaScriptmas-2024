import { feedData } from './data.js'

const avatar = document.querySelector('.feed-avatars');
const image = document.querySelector('.feed-images');

let currentPersonIndex = 0;
let currentPicIndex = 0;

feedData.forEach(person => {
  const img = document.createElement('img');
  img.src = `./images/${person.avatarUrl}`;
  img.classList.add('avatar');
  avatar.appendChild(img);
});

const avatars = document.querySelectorAll('.avatar');
avatars[currentPersonIndex].classList.add('highlight');

function updatePic() {
  if (currentPicIndex === feedData[currentPersonIndex].features.length) {
    avatars[currentPersonIndex].classList.toggle('highlight');
    currentPersonIndex++;
    if (currentPersonIndex === feedData.length) {
      clearInterval(interval);
      image.innerHTML = '';
      const p = document.createElement('p'); 
      p.innerText = '↻ Refresh to load latest images'; 
      p.classList.add('message'); 
      image.appendChild(p);
    }
    avatars[currentPersonIndex].classList.add('highlight');
    currentPicIndex = 0;
  }
  
  image.innerHTML = '';

  const imgObject = feedData[currentPersonIndex].features[currentPicIndex];
  const img = document.createElement('img');
  img.src = `./images/${imgObject.imageUrl}`;
  img.classList.add('feature-image');
  img.alt = imgObject.alt;

  image.appendChild(img);
  currentPicIndex++;
}
const interval = setInterval(updatePic, 1500);

