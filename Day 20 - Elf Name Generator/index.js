const elfFirstNames = [
  "Aurora", "Blitzen", "Crispin", "Dazzle", "Evergreen", "Frost", "Glimmer",
  "Holly", "Icicle", "Joyful", "Kringle", "Luna", "Merry", "Nutmeg",
  "Olwen", "Pine", "Quill", "Razzle", "Sparkle", "Tinsel", "Umbra",
  "Vixen", "Whisk", "Xylo", "Yule", "Zippy"
];

const elfLastNames = [
  "Applecheeks", "Bells", "Candycane", "Dazzlebright", "Everbright", "Frostwhisk",
  "Gingersnap", "Hollyberry", "Icestorm", "Jovial", "Kindleflame", "Lightwhisper",
  "Merrysprout", "Nutcracker", "Oakenleaf", "Peppermint", "Quicksilver", "Raindrop",
  "Snowdust", "Twinkletoes", "Underwood", "Velvet", "Winterberry", "Xylospark",
  "Yuletide", "Zestwind"
];

const generatedNames = new Set();

function getElfName() {
  const firstNameInput = document.querySelector('.first-name').value.toUpperCase().trim();
  const lastNameInput = document.querySelector('.last-name').value.toUpperCase().trim();
  
  if(!firstNameInput || !lastNameInput) {
    alert("Please enter a valid first and last name");
    return;
  }
  
  const firstInitial = firstNameInput[0]; 
  const lastInitial = lastNameInput[0]; 
  const elfFirstName = elfFirstNames.filter(name => name[0] === firstInitial); 
  const elfLastName = elfLastNames.filter(name => name[0] === lastInitial); 
  let elfName = `${elfFirstName} ${elfLastName}`
  
  if(generatedNames.has(elfName)) {
    alert(`${elfName} is already registered`);
  } else {
    generatedNames.add(elfName);
    render(elfName);
  }
 } 
 
 function render(elfName) {
   const elfNamesListEl = document.getElementById('elf-names-list'); 
   if (elfNamesListEl.children[0].textContent === 'Seems empty...') { 
    elfNamesListEl.removeChild(elfNamesListEl.children[0]);
    }
    
    const elfNamesListElChild = document.createElement('li'); 
    elfNamesListElChild.textContent = elfName; 
    elfNamesListEl.appendChild(elfNamesListElChild);
  }
  
document.getElementById('generate-btn').addEventListener('click', getElfName);
