let arr = [6, 10, 11, 93, 0, 0, null, 15]
let even = 0
let odd = 0
let NotANumber = 0
let zero = 0
let i = 0
let type = typeof (arr[i])
for (let i=0; i<arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] !== 0 && type !== 'string' || 'boolean' || 'object' && isNaN(arr[i]) === false) {
        even++;
    }
}
for (let i=0; i<arr.length; i++) {
    if (arr[i] % 2 !== 0 && arr[i] !== 0 && type !== 'string' || 'boolean' || 'object' && isNaN(arr[i]) == false) {
        odd++
    }
}
for (let i=0; i<arr.length; i++) {
    if (arr[i] == 0) {
        zero++
    }
}
for (let i=0; i<arr.length; i++) {
    if (isNaN(arr[i]) == true || type == 'string' || 'boolean' || 'object')
        NotANumber++
}
console.log(even, odd, zero, NotANumber)