import shoppingList from "./shoppingList.js";

const sortAscButton = document.querySelector(".sort-asc"); 
const sortDescButton = document.querySelector(".sort-desc");
const productsContainer = document.querySelector(".products-list");

function sortProducts(list,order){
      const sorter = order === "sort-asc" ? (a,b)=> a.price - b.price : (a,b) => b.price - a.price ;
      return [...list].sort(order === "sort-asc" || order === "sort-desc" ? sorter : ()=>0);
}

function renderProducts(list) {
    const products = list.map(({product,price}) => {   
        return `<li><span>${product}</span><span>${price}</span></li>`
    }).join('');
    productsContainer.innerHTML = products;
}
renderProducts(shoppingList);

sortAscButton.addEventListener("click", () => { renderProducts(sortProducts(shoppingList, "sort-asc")); }); 
sortDescButton.addEventListener("click", () => { renderProducts(sortProducts(shoppingList, "sort-desc")); });

function logSortedList() {
    console.log("*-*-*-*-*-*-Holiday Gift Shopping-*-*-*-*-*-*");
    sortProducts(shoppingList, "sort-asc").forEach((item) => {
    console.log(`${item.product} : ${item.price}`)
  });
}
logSortedList();
