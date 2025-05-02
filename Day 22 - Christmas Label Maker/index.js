import { addresses } from './addresses.js'

const labelsContainer = document.querySelector('.labels-container')

const img = ['bauble.png', 'bow.png', 'candy-cane.png', 'deer.png', 'gifts.png', 'gingerbread-man.png', 
             'santa-hat.png', 'santa.png', 'snowflake.png', 'snowglobe.png', 'snowman.png', 'star-bauble.png', 
             'star.png', 'stocking.png', 'tree.png', 'trees.png', 'wreath.png']

function getRandomImg() {
    const randomNumber = Math.floor(Math.random() * img.length);
    return img[randomNumber];
}

for (let address of addresses) {
    if (address.isOnChristmasList) {
        const label = document.createElement('div');
        label.className = 'label';
        
        const topImg = document.createElement('img');
        topImg.className = 'top-img';
        topImg.src = `icons/${getRandomImg()}`;
        label.appendChild(topImg);

        const name = document.createElement('h1');
        name.textContent = address.name;
        label.appendChild(name);

        const line1 = document.createElement('h2');
        line1.textContent = address["address line 1"];
        label.appendChild(line1);

        const town = document.createElement('h2');
        town.textContent = address.town;
        label.appendChild(town);

        const state = document.createElement('h2');
        state.textContent = address.state;
        label.appendChild(state);

        const country = document.createElement('h2');
        country.textContent = address.country;
        label.appendChild(country);

        const bottomImg = document.createElement('img');
        bottomImg.className = 'bottom-img';
        bottomImg.src = `icons/${getRandomImg()}`;
        label.appendChild(bottomImg);

        labelsContainer.appendChild(label);
    }
}


