let x=+prompt('введите число')
if (isNaN(x) === true) {
    alert('не число')
}
else{
    if (x%2===0) {
        alert('четное число')
    }
    else {
        alert('нечетное число')
    }
}