class Category {
    #title;
    #cnt;

    set title(title) {
        this.#title = title;
    }

    set cnt(cnt) {
        this.#cnt = cnt;
    }

    get title() {
        return this.#title;
    }

    get cnt() {
        return this.#cnt;
    }

}
const categories = document.querySelectorAll('.item');
console.log('Number of categories: ' + categories.length);

categories.forEach(category => {
    const categoryChildren = category.children;
    const item = new Category();
    for (const child of categoryChildren) {
        if (child.tagName == 'H2') {
            item.title = child.innerHTML;
        } else if (child.tagName == 'UL') {
            item.cnt = child.children.length;
        }
    }
    console.log(`Category: ${item.title}`);
    console.log(`Elements: ${item.cnt}`);
});
