const item = document.querySelectorAll('.item');
console.log("Number of categories: ", item.length);

item.forEach(function(item){
    return console.log("Category:",item.children[0].textContent, "Elements",item.children[1].children.length);
});