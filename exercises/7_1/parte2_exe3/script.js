const buttonClick = document.getElementById('button');
let clickCount = 0;
buttonClick.addEventListener('click', () => {
    clickCount += 1;
    let count = document.getElementById('count')
    count.innerHTML = `Contador: ${clickCount}`;
});