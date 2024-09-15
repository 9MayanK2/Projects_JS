let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let result = document.querySelector('.result');
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = 'Please Enter valid Height';
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = 'Please Enter valid Weight';
    } else {
        let res = (weight / ((height * height) / 1000)).toFixed(2);
        result.innerHTML = `Body Mass Indicator result is : ${res}`
    }
})