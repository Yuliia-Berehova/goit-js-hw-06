const listEL = document.querySelectorAll('.item');

console.log(`Number of categories: ${listEL.length}`);

listEL.forEach((element) => 

console.log(
`Category: ${element.firstElementChild.textContent}\n`,
`Elements: ${element.lastElementChild.children.length}`));