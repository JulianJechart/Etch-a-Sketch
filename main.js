function createMosaic(size) {
    let container = document.querySelector('.grandparent');
    let squares = container.querySelectorAll('div');
    squares.forEach((div)=> div.remove());
    for (let i=0; i<size; i++) {
        let newParent = document.createElement('div');
        let height = 960/size;
        newParent.style.height = height + "px";
        newParent.classList.add('parent');
        container.appendChild(newParent);
        for (let j=0; j<size; j++) {
            let newChild = document.createElement('div');
            newChild.classList.add('child');
            newParent.appendChild(newChild);
            newChild.addEventListener('mouseover', () => {newChild.classList.add('touched')});
        }
    }
}

createMosaic(16);

let input = document.querySelector('input');
input.addEventListener('change', () => {
    console.log('what');
    createMosaic(input.value);
})
