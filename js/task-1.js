const categories = document.querySelectorAll('.item');
console.log('Number of categories: ' + categories.length);

categories.forEach(category => {
    const childs = category.children;
    const item = [];
    for (const child of childs) {
        if (child.tagName.toLowerCase() == 'h2') {
            item.name = child.innerHTML;
        } else if (child.tagName.toLowerCase() == 'ul') {
            item.cnt = child.children.length;
        }
    }
    console.log(`Category: ${item.name}`);
    console.log(`Elements: ${item.cnt}`);
});
