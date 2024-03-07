const categories = document.querySelectorAll('.item');
console.log('Number of categories: ' + categories.length);

categories.forEach(category => {
    const childs = category.children;
    const item = [];
    for (let i = 0; i < childs.length; i++) {
        if (childs[i].tagName.toLowerCase() == 'h2') {
            item.name = childs[i].innerHTML;
        } else if (childs[i].tagName.toLowerCase() == 'ul') {
            item.cnt = childs[i].children.length;
        }
    }
    console.log(`Category: ${item.name}`);
    console.log(`Elements: ${item.cnt}`);
});
