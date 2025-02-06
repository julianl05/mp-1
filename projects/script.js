function addition() {
    let first = Number(document.getElementById('first-num').value);
    let second = Number(document.getElementById('second-num').value);
    let result = first + second;
    document.getElementById('output').innerHTML = String(result);
}

function subtraction() {
    let first = Number(document.getElementById('first-num').value);
    let second = Number(document.getElementById('second-num').value);
    let result = first - second;
    document.getElementById('output').innerHTML = String(result);
}

function multiplication() {
    let first = Number(document.getElementById('first-num').value);
    let second = Number(document.getElementById('second-num').value);
    let result = first * second;
    document.getElementById('output').innerHTML = String(result);
}

function division() {
    let first = Number(document.getElementById('first-num').value);
    let second = Number(document.getElementById('second-num').value);
    let result = first / second;
    document.getElementById('output').innerHTML = String(result);
}

function power() {
    let first = Number(document.getElementById('first-num').value);
    let second = Number(document.getElementById('second-num').value);

    let result = 1;
    for (let i = 0; i < second; i++) {
        result = result * first;
    }

    document.getElementById('output').innerHTML = String(result);
}

function clear() {
    console.log("testing");
    document.getElementById('first-num').value = '';
    document.getElementById('second-num').value = '';
    document.getElementById('output').innerHTML = '';
}