const itemInput = document.getElementById('item-input')
const addItemButton = document.getElementById('add-item-button')
const shoppingList = document.getElementById('shopping-list')
const listArr = []

// Function to check item is not duplicate
function checkDuplicate() {

/* ⚠️ You need to add code to this function! ⚠️*/ 


const itemText = itemInput.value.trim().replace(/\s+/g, ''); 
const normalizedItemText = itemText.toLowerCase(); 

const normalizedListArr = listArr.map(item => item.trim().toLowerCase().replace(/\s+/g,''));


if (!normalizedListArr.includes(normalizedItemText)) {
    listArr.push(itemText); 
} else {
    alert(`${itemText} is already in the list!`);
}
    renderList();
}

function renderList() {
    shoppingList.innerHTML = ''
    listArr.forEach((gift) => {
        const listItem = document.createElement('li')
        listItem.className = 'list-item';
        listItem.textContent = gift;
        shoppingList.appendChild(listItem);      
    })
    itemInput.value = ''; 
}

addItemButton.addEventListener('click', checkDuplicate)

itemInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        checkDuplicate()
    }
})
