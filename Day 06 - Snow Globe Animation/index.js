const snowGlobe = document.querySelector('.snow-globe')
const snowflakes = []
const maxSnowFlakes = 300;

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    const size = Math.random() * 5 + 4;
    const position = Math.random() * 100;
    const animationDuration = Math.random() * 12 + 12; 
    snowflake.style.fontSize = `${size}px`;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${position}%`;
    snowflake.style.animationDuration = `${animationDuration}s`;
    snowGlobe.appendChild(snowflake);
    snowflakes.push(snowflake);
    if (snowflakes.length > maxSnowFlakes) {
        const removeOldSnowFlakes = snowflakes.shift();
        removeOldSnowFlakes.remove();
    }
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
        const indexOfSnowFlakes = snowflakes.indexOf(snowflake);
        if(index>-1) {
            snowflakes.splice(index,2);
        }
    });
}

setInterval(createSnowflake, 100) // Let's create a snowflake every 100 milliseconds!
