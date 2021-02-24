let x = 0;

const element = document.getElementById("value");
element.innerHTML = x;

const addOne = () => {
    element.innerHTML = ++x;
};

const minusOne = () => {
    element.innerHTML = --x;
}

const addFive = () => {
    element.innerHTML = x += 5;
};

const minusFive = () => {
    element.innerHTML = x -= 5;
}