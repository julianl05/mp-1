function addition() {
    let first = Number(document.getElementById('first-num').value);
    let second = Number(document.getElementById('second-num').value);
    let result = first + second;

    document.getElementById('output').innerHTML = String(result);
    if (result < 0) {
        document.getElementById('output').style.color = 'red';
    } else {
        document.getElementById('output').style.color = '#EEEEEE';
    }
}

function subtraction() {
    let first = Number(document.getElementById('first-num').value);
    let second = Number(document.getElementById('second-num').value);
    let result = first - second;

    document.getElementById('output').innerHTML = String(result);
    if (result < 0) {
        document.getElementById('output').style.color = 'red';
    } else {
        document.getElementById('output').style.color = '#EEEEEE';
    }
}

function multiplication() {
    let first = Number(document.getElementById('first-num').value);
    let second = Number(document.getElementById('second-num').value);
    let result = first * second;

    document.getElementById('output').innerHTML = String(result);
    if (result < 0) {
        document.getElementById('output').style.color = 'red';
    } else {
        document.getElementById('output').style.color = '#EEEEEE';
    }
}

function division() {
    let first = Number(document.getElementById('first-num').value);
    let second = Number(document.getElementById('second-num').value);
    let result = first / second;

    document.getElementById('output').innerHTML = String(result);
    if (result < 0) {
        document.getElementById('output').style.color = 'red';
    } else {
        document.getElementById('output').style.color = '#EEEEEE';
    }
}

function power() {
    let first = Number(document.getElementById('first-num').value);
    let second = Number(document.getElementById('second-num').value);

    let result = 1;
    for (let i = 0; i < second; i++) {
        result = result * first;
    }

    document.getElementById('output').innerHTML = String(result);
    if (result < 0) {
        document.getElementById('output').style.color = 'red';
    } else {
        document.getElementById('output').style.color = '#EEEEEE';
    }
}

function reset() {
    // console.log("testing");
    document.getElementById('first-num').value = '';
    document.getElementById('second-num').value = '';
    document.getElementById('output').innerHTML = '';
}