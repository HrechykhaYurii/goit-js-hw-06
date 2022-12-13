const listCategories = document.querySelector('#categories');
console.log('Number of categories: ', listCategories.children.length);

const items = [...listCategories.children];
for (const element of items) {
    console.log('Category: ', element.firstElementChild.textContent);
    console.log('Elements: ', element.lastElementChild.children.length);  
}
